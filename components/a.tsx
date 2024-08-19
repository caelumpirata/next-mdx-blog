import { type ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

export function A(props: ComponentPropsWithoutRef<'a'>) {
  return (
    <Link  href={props.href as string} className="text-[#a3a3a3] hover:underline hover:text-[#e3e3e3]" {...props} />
  )
}