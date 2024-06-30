import { fetchAuthSession } from 'aws-amplify/auth';
import { StorageAccessLevel } from '@aws-amplify/core';
import { UploadDataWithPathInput, UploadDataInput } from 'aws-amplify/storage';

import { isString, isTypedFunction } from '@aws-amplify/ui';

import { ProcessFile, ProcessFileParams } from '../types';
import { resolveFile } from './resolveFile';
import { PathCallback, PathInput } from './uploadFile';
import { UseStorageManager } from '../hooks';

export interface GetInputParams {
  accessLevel: StorageAccessLevel | undefined;
  file: File;
  key: string;
  onProcessFileSuccess: (input: { processedKey: string }) => void;
  onProgress: NonNullable<UploadDataWithPathInput['options']>['onProgress'];
  path: string | PathCallback | undefined;
  processFile: ProcessFile | undefined;
  useAccelerateEndpoint?: boolean;
  id: string;
  removeUpload: UseStorageManager['removeUpload'];
}

export const getInput = ({
  accessLevel,
  file,
  key,
  onProcessFileSuccess,
  onProgress,
  path,
  processFile,
  id,
  removeUpload,
  useAccelerateEndpoint,
}: GetInputParams) => {
  return async (): Promise<PathInput | UploadDataInput> => {
    const hasCallbackPath = isTypedFunction<PathCallback>(path);
    const hasStringPath = isString(path);

    const hasKeyInput = !!accessLevel && !hasCallbackPath;

    const {
      file: data,
      key: processedKey,
      ...rest
    } = await resolveFile({ file, key, processFile }).catch(
      (rejected: ProcessFileParams) => {
        //const { key, error } = result;
        /* `onUploadError()` is incorrect here, as this is a Pre-Upload stage.
         NOTE: Might need some sort of resolveFile/processFile error handler.
        if (isFunction(onUploadError)) {
          onUploadError(error ?? `Error processing: ${key}`, { key: key });
        }
        */
        removeUpload({ id });
        return rejected;
      }
    );

    const contentType = file.type || 'binary/octet-stream';

    // IMPORTANT: always pass `...rest` here for backwards compatibility
    const options = { contentType, onProgress, useAccelerateEndpoint, ...rest };

    let inputResult: PathInput | UploadDataInput;
    if (hasKeyInput) {
      // legacy handling of `path` is to prefix to `fileKey`
      const resolvedKey = hasStringPath
        ? `${path}${processedKey}`
        : processedKey;

      inputResult = {
        data,
        key: resolvedKey,
        options: { ...options, accessLevel },
      };
    } else {
      const { identityId } = await fetchAuthSession();
      const resolvedPath = `${
        hasCallbackPath ? path({ identityId }) : path
      }${processedKey}`;

      inputResult = { data: file, path: resolvedPath, options };
    }

    if (processFile) {
      // provide post-processing value of target `key`
      onProcessFileSuccess({ processedKey });
    }

    return inputResult;
  };
};
