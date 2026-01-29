'use client';

import { IKImage } from "imagekitio-next";

type ImageType = {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

const ImageComp = ({
  src,
  alt,
  w,
  h,
  className,
  tr,
}: ImageType) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      alt={alt}
      width={w}
      height={h}
      className={className}
      lqip={{ active: true, quality: 20 }}
      transformation={
        tr
          ? [{ width: String(w), height: String(h) }]
          : undefined
      }
    />
  );
};

export default ImageComp;
