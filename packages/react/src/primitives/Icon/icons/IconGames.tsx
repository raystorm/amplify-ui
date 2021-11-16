import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconGames = (props) => {
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
          d="M13 4V6.67L12 7.67L11 6.67V4H13ZM20 11V13H17.33L16.33 12L17.33 11H20ZM6.67 11L7.67 12L6.67 13H4V11H6.67ZM12 16.33L13 17.33V20H11V17.33L12 16.33ZM15 2H9V7.5L12 10.5L15 7.5V2ZM22 9H16.5L13.5 12L16.5 15H22V9ZM7.5 9H2V15H7.5L10.5 12L7.5 9ZM12 13.5L9 16.5V22H15V16.5L12 13.5Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
