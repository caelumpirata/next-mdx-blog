import { type ComponentPropsWithoutRef } from 'react';

export function H2(props: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className="mx-4 group text-base my-8 relative dark:text-[#EFEFEF]" {...props} />;
}