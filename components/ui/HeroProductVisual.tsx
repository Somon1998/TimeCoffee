"use client";

import { useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";

type HeroProductVisualProps = {
  videoEnabled: boolean;
  imageSrc: string;
  videoSrc: string;
  alt: string;
  sizes: string;
};

export function HeroProductVisual({
  videoEnabled,
  imageSrc,
  videoSrc,
  alt,
  sizes,
}: HeroProductVisualProps) {
  const [videoFailed, setVideoFailed] = useState(false);

  if (!videoEnabled || videoFailed) {
    return (
      <SiteImage
        src={imageSrc}
        alt={alt}
        width={2614}
        height={1394}
        sizes={sizes}
        className="h-full w-full object-cover object-center"
        priority
      />
    );
  }

  return (
    <>
      <video
        muted
        autoPlay
        loop
        playsInline
        poster={imageSrc}
        preload="metadata"
        className="h-full w-full object-cover object-center"
        aria-hidden
        onError={() => setVideoFailed(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand-900/10"
        aria-hidden
      />
    </>
  );
}
