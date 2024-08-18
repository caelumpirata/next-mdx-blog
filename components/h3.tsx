import { type ComponentPropsWithoutRef } from 'react';

export function H3(props: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className="mx-4 group  text-base my-8 relative" {...props} />;
}