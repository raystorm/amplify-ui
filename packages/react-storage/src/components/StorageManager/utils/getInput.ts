import { fetchAuthSession } from 'aws-amplify/auth';
import { StorageAccessLevel } from '@aws-amplify/core';
import { UploadDataWithPathInput, UploadDataInput } from 'aws-amplify/storage';

import { isFunction, isString, isTypedFunction } from '@aws-amplify/ui';

import { ProcessFile, ProcessFileParams, StorageManagerProps } from '../types';
import { resolveFile } from './resolveFile';
import { PathCallback, PathInput } from './uploadFile';
import { UseStorageManager } from '../hooks';

export interface GetInputParams {
  accessLevel: StorageAccessLevel | undefined;
  file: File;
  key: string;
  onProgress: NonNullable<UploadDataWithPathInput['options']>['onProgress'];
  path: string | PathCallback | undefined;
  processFile: ProcessFile | undefined;
  id: string;
  onUploadError: StorageManagerProps['onUploadError'];
  removeUpload: UseStorageManager['removeUpload'];
}

export const getInput = ({
  accessLevel,
  file,
  key,
  onProgress,
  path,
  processFile,
  id,
  onUploadError,
  removeUpload,
}: GetInputParams) => {
  return async (): Promise<PathInput | UploadDataInput> => {
    const hasCallbackPath = isTypedFunction<PathCallback>(path);
    const hasStringPath = isString(path);

    const hasKeyInput = !!accessLevel && !hasCallbackPath;

    const {
      file: data,
      key: fileKey,
      ...rest
    } = await resolveFile({ file, key, processFile }).catch(
      (result: ProcessFileParams) => {
        const { key, error } = result;
        if (isFunction(onUploadError)) {
          //TODO: localize this error.
          onUploadError(error ?? `Error processing: ${key}`, { key: key });
        }
        removeUpload({ id });
        return result;
      }
    );

    const contentType = file.type || 'binary/octet-stream';

    // IMPORTANT: always pass `...rest` here for backwards compatibility
    const options = { contentType, onProgress, ...rest };

    if (hasKeyInput) {
      // legacy handling of `path` is to prefix to `fileKey`
      const resolvedKey = hasStringPath ? `${path}${fileKey}` : fileKey;

      return { data, key: resolvedKey, options: { ...options, accessLevel } };
    }

    const { identityId } = await fetchAuthSession();
    const resolvedPath = `${
      hasCallbackPath ? path({ identityId }) : path
    }${fileKey}`;

    return { data: file, path: resolvedPath, options };
  };
};
