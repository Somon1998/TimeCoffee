import NextImage, { type ImageProps } from "next/image";

function shouldUseUnoptimized(src: ImageProps["src"]): boolean {
  if (typeof src === "string") {
    return src.endsWith(".svg");
  }

  return false;
}

export function SiteImage({ unoptimized, ...props }: ImageProps) {
  return (
    <NextImage
      {...props}
      unoptimized={unoptimized ?? shouldUseUnoptimized(props.src)}
    />
  );
}
