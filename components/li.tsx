import { type ComponentPropsWithoutRef } from 'react';

export function Li(props: ComponentPropsWithoutRef<'li'>) {
  return (
    <li 
    
    className={`
      mx-4
        my-2
        [ul_&]:relative
        [ul_&]:pl-4
        [ul_&]:before:text-gray-400
        [ul_&]:before:content-['–']
        [ul_&]:before:mr-2
        [ul_&]:before:absolute
        [ul_&]:before:-ml-4
      `}

        {...props}>
    </li>
  );
}
