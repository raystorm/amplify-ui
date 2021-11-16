import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconTextSnippet = (props) => {
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
          d="M14.17 5L19 9.83V19H5V5H14.17ZM14.17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9.83C21 9.3 20.79 8.79 20.41 8.42L15.58 3.59C15.21 3.21 14.7 3 14.17 3ZM7 15H17V17H7V15ZM7 11H17V13H7V11ZM7 7H14V9H7V7Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
