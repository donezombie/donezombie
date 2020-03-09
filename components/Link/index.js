import React from 'react';
import Link from 'next/link';

const isExternalUrl = (link) => link && typeof link === 'string' && (link.includes('http') || link.includes('https'));

export default (props) => {
  const { href, children, prefetch } = props;

  if (isExternalUrl(href)) {
    return (
      <a href={href} target="__blank" style={{ textDecoration: 'none' }}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} prefetch={prefetch}>
      <a href={href}>
        {children}
      </a>
    </Link>
  )
}