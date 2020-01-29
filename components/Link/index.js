import React from 'react';
import Link from 'next/link';

export default (props) => {
  const { href, children, prefetch } = props;

  return (
    <Link href={href} prefetch={prefetch}>
      <a href={href}>
        {children}
      </a>
    </Link>
  )
}