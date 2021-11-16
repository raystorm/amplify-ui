import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconFastfood = (props) => {
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
          d="M1 21.98C1 22.54 1.45 22.99 2.01 22.99H15C15.56 22.99 16.01 22.54 16.01 21.98V21H1V21.98ZM8.5 8.99C4.75 8.99 1 11 1 15H16C16 11 12.25 8.99 8.5 8.99ZM3.62 13C4.73 11.45 7.09 10.99 8.5 10.99C9.91 10.99 12.27 11.45 13.38 13H3.62ZM1 17H16V19H1V17ZM18 5V1H16V5H11L11.23 7H20.79L19.39 21H18V23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5H18Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
