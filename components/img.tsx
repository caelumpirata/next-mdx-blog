import { type ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

type ImgProps = ComponentPropsWithoutRef<'img'>;

export function Img({ src, alt, width = 768, height = 500, ...props }: ImgProps) {
  // Extract the actual src path from the Markdown-style syntax
  const srcPath = typeof src === 'string' ? (src.match(/\((.*?)\)/)?.[1] || src) : '';

  return (
    <Image
      src={srcPath}
      width={Number(width) || 768}
      height={Number(height) || 500}
      alt={alt || ''}
      className="my-5 flex flex-col items-center rounded-3xl"
      {...props}
    />
  );
}