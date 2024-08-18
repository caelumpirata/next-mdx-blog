import { type ComponentPropsWithoutRef } from 'react';

export function H1(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className=" mx-4 text-base  mb-1 dark:text-gray-100" {...props} />;
}