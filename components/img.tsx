// import { type ComponentPropsWithoutRef } from 'react';
// import Image from 'next/image';

// export function Img(props: ComponentPropsWithoutRef<'img'>) {
//   return (
    
    
// <Image
//   src="/images/featured-image.jpg"
//   width={768}
//   height={500}
//   alt="Picture of the author"
//   className="my-5 flex flex-col items-center rounded-3xl"
// />


//   )
// }


import { type ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

interface ImgProps extends Omit<ComponentPropsWithoutRef<'img'>, 'width' | 'height'> {
  width?: number;
  height?: number;
}

export function Img({ src, width = 768, height = 500, alt = 'Image', className, ...rest }: ImgProps) {
  return (
    <Image
      src={src || '/images/featured-image.jpg'}  // Use default image if src is not provided
      width={typeof width === 'number' ? width : 768}  // Ensure width is a number
      height={typeof height === 'number' ? height : 500}  // Ensure height is a number
      alt={alt}
      className={`my-5 flex flex-col items-center rounded-3xl ${className || ''}`}  // Ensure className is a string
      {...rest}  // Spread remaining props
    />
  );
}
