import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconMemory = (props) => {
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
          d="M15 9H9V15H15V9ZM13 13H11V11H13V13ZM21 11V9H19V7C19 5.9 18.1 5 17 5H15V3H13V5H11V3H9V5H7C5.9 5 5 5.9 5 7V9H3V11H5V13H3V15H5V17C5 18.1 5.9 19 7 19H9V21H11V19H13V21H15V19H17C18.1 19 19 18.1 19 17V15H21V13H19V11H21ZM17 17H7V7H17V17Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
