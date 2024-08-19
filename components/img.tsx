import { type ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

export function Img(props: ComponentPropsWithoutRef<'img'>) {
  return (
    
    
<Image
  src="/images/featured-image.jpg"
  width={768}
  height={500}
  alt="Picture of the author"
  className="my-5 flex flex-col items-center rounded-3xl"
/>


  )
}