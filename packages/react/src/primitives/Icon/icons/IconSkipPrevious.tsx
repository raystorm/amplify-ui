import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconSkipPrevious = (props) => {
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
          d="M6 6H8V18H6V6ZM9.5 12L18 18V6L9.5 12ZM16 14.14L12.97 12L16 9.86V14.14Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
