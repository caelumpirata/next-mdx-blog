import { type ComponentPropsWithoutRef } from 'react';

  export function Code(props: ComponentPropsWithoutRef<'code'>) {
    return <code className={`
      [p_&]:px-1
      [p_&]:py-0.5
      [p_&]:rounded-sm
      [p_&]:bg-gray-200
      dark:[p_&]:bg-[#333]
    `} {...props} />;
  }