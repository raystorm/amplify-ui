import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconMarkEmailRead = (props) => {
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
          d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H12V18H4V8L12 13L20 8V13H22V6C22 4.9 21.1 4 20 4ZM12 11L4 6H20L12 11ZM17.34 22L13.8 18.46L15.21 17.05L17.33 19.17L21.57 14.93L23 16.34L17.34 22Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
