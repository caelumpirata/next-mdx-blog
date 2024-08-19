import { type ComponentPropsWithoutRef } from 'react';

export function H2(props: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className="mx-4 group mt-8 mb-4 relative" {...props} />;
}