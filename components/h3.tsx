import { type ComponentPropsWithoutRef } from 'react';

export function H3(props: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className="group font-bold text-base my-8 relative" {...props} />;
}