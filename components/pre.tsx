import { type ComponentPropsWithoutRef } from 'react';

export function Pre(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <pre 
    
    className={`
        rounded
        p-4
        text-sm
        bg-gray-800 text-white
        dark:bg-[#222] dark:text-gray-300
        overflow-x-auto 
        
      `}

        {...props}>
      <code>{props.children}</code>
    </pre>
  );
}
