import { type ComponentPropsWithoutRef } from 'react';

export function H2(props: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className="group font-bold text-xl my-8 relative" {...props} />;
}