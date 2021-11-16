import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconSpellcheck = (props) => {
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
          d="M12.45 16H14.54L9.43 3H7.57L2.46 16H4.55L5.67 13H11.31L12.45 16ZM6.43 11L8.5 5.48L10.57 11H6.43ZM21.59 11.59L13.5 19.68L9.83 16L8.42 17.41L13.51 22.5L23 13L21.59 11.59Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
