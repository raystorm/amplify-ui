import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconBorderLeft = (props) => {
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
          d="M11 21H13V19H11V21ZM11 17H13V15H11V17ZM11 5H13V3H11V5ZM11 9H13V7H11V9ZM11 13H13V11H11V13ZM7 21H9V19H7V21ZM7 5H9V3H7V5ZM7 13H9V11H7V13ZM3 21H5V3H3V21ZM19 9H21V7H19V9ZM15 21H17V19H15V21ZM19 17H21V15H19V17ZM19 3V5H21V3H19ZM19 13H21V11H19V13ZM19 21H21V19H19V21ZM15 13H17V11H15V13ZM15 5H17V3H15V5Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
