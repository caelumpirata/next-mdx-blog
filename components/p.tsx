import { type ComponentPropsWithoutRef } from 'react';


export function P(props: ComponentPropsWithoutRef<'p'>) {
    return <p className=" mx-4  my-5 [blockquote_&]:my-2" {...props} />;
  }