import React from 'react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

interface NavItemsProps {
  items: NavItem[];
}

export function NavItems({ items }: NavItemsProps) {
  return (
    <>
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}