import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconLocalMovies = (props) => {
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
          d="M14 5V19H10V5H14ZM20 3H18V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3ZM16 9V7H18V9H16ZM6 9V7H8V9H6ZM16 13V11H18V13H16ZM6 13V11H8V13H6ZM16 17V15H18V17H16ZM6 17V15H8V17H6Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
