import { type ComponentPropsWithoutRef } from 'react';


export function P(props: ComponentPropsWithoutRef<'p'>) {
    return <p className="my-5 [blockquote_&]:my-2 text-base" {...props} />;
  }