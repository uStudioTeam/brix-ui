import React from 'react';
import NextLink, { LinkProps } from 'next/link';

export const Link: React.FC<LinkProps> = ({ children, href, ...props }) => (
  <NextLink href={href} as={`${process.env.BASE_URL}${href}`} {...props}>
    {children}
  </NextLink>
);
