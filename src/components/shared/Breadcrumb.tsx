'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { LuChevronRight } from 'react-icons/lu'

export interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center text-sm text-zinc-600 ${className || ''}`}
      aria-label="breadcrumb"
    >
      {items.map((item, index) => (
        <Fragment key={item.href}>
          {index > 0 && <LuChevronRight className="mx-2 h-4 w-4" aria-hidden />}
          {item.isCurrent ? (
            <span aria-current="page" className="font-medium text-zinc-900">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
