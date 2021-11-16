import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconCountertops = (props) => {
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
          d="M22 10H18V7C18 5.34 16.66 4 15 4C13.34 4 12 5.34 12 7H14C14 6.45 14.45 6 15 6C15.55 6 16 6.45 16 7V10H8C9.1 10 10 9.1 10 8V4H4V8C4 9.1 4.9 10 6 10H2V12H4V20H20V12H22V10ZM6 6H8V8H6V6ZM6 18V12H11V18H6ZM18 18H13V12H18V18Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
