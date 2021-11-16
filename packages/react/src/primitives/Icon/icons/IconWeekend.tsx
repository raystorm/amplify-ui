import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconWeekend = (props) => {
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
          d="M21 9V7C21 5.35 19.65 4 18 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20H21C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9ZM5 7C5 6.45 5.45 6 6 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H6V12C6 11.12 5.61 10.33 5 9.78V7ZM22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11C3.55 11 4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11C21.55 11 22 11.45 22 12V17Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
