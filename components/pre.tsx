import { type ComponentPropsWithoutRef } from 'react';

export function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <pre 
    
    className={`
        rounded-lg
        p-4
        text-sm
        dark:bg-[#000] dark:text-gray-300
        overflow-x-auto 
        border border-[#e0e0e0]
        dark:border-fake-grey
        
      `}

        {...props}>
      <code>{props.children}</code>
    </pre>
  );
}
