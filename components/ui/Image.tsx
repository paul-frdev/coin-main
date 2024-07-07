import { cn } from '@/lib/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import BaseImage from 'next/image';
import React from 'react';

type ImageProps = {
  src: string | StaticImport;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
};
export const Image: React.FC<ImageProps> = ({ src, alt = '', width = 0, height = 0, sizes = '100vw', className }) => {
  return <BaseImage placeholder='blur' blurDataURL='/images/12.webp' src={src} alt={alt} width={width} height={height} sizes={sizes} className={cn(`w-full h-auto rounded`, className)} />;
};