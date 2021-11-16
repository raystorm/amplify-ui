import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconSettingsInputComposite = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 2C5 1.45 4.55 1 4 1C3.45 1 3 1.45 3 2V6H1V16C1 17.3 1.84 18.4 3 18.82V23H5V18.82C6.16 18.4 7 17.3 7 16V6H5V2ZM4 17C3.45 17 3 16.55 3 16V14H5V16C5 16.55 4.55 17 4 17ZM3 12V8H5V12H3ZM13 2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V6H9V16C9 17.3 9.84 18.4 11 18.82V23H13V18.82C14.16 18.4 15 17.3 15 16V6H13V2ZM12 17C11.45 17 11 16.55 11 16V14H13V16C13 16.55 12.55 17 12 17ZM11 12V8H13V12H11ZM21 6V2C21 1.45 20.55 1 20 1C19.45 1 19 1.45 19 2V6H17V16C17 17.3 17.84 18.4 19 18.82V23H21V18.82C22.16 18.4 23 17.3 23 16V6H21ZM20 17C19.45 17 19 16.55 19 16V14H21V16C21 16.55 20.55 17 20 17ZM19 12V8H21V12H19Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
