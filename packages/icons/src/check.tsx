import React from 'react';

import { classNames, intrinsicComponent } from '@brix-ui/utils/functions';

import type { IconProps } from './icon.props';

const Check = intrinsicComponent<IconProps, SVGSVGElement>(function Check({ className, ...props }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 13 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('check', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.16312 7.65845L3.53811 6.03345C3.26475 5.76008 2.82153 5.76008 2.54816 6.03345C2.2748 6.30681 2.2748 6.75003 2.54816 7.0234L4.63139 9.10662C4.64264 9.11965 4.65444 9.13236 4.6668 9.14472C4.80436 9.28228 4.98493 9.35062 5.16522 9.34974C5.34411 9.34955 5.52294 9.28121 5.65943 9.14472C5.67177 9.13238 5.68354 9.11971 5.69476 9.10671L10.6065 4.19497C10.8799 3.92161 10.8799 3.47839 10.6065 3.20503C10.3331 2.93166 9.88992 2.93166 9.61655 3.20503L5.16312 7.65845Z"
      />
    </svg>
  );
});

export default Check;
