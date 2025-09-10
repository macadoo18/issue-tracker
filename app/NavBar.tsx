'use client';

import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <>
      <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/">
          <AiFillBug />
        </Link>

        <ul>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classnames({
                'text-zinc-800': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'transition-colors hover:text-zinc-800 px-5': true,
              })}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
