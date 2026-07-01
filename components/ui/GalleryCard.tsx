import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/utils";

type GalleryCardProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function GalleryCard({ src, alt, caption, className }: GalleryCardProps) {
  return (
    <article
      className={cn(
        "gallery-card-premium group flex h-full flex-col overflow-hidden rounded-2xl",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        <SiteImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/55 via-brand-900/10 to-transparent transition-opacity duration-500 group-hover:from-brand-900/70 group-hover:via-brand-800/25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-400/0 via-transparent to-brand-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-400/10 group-hover:to-brand-500/8 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col border-t border-brand-100/60 bg-white/90 p-5 dark:border-brand-700/40 dark:bg-brand-800/50">
        <h3 className="font-display text-lg font-semibold tracking-tight text-brand-900 dark:text-brand-50">
          {alt}
        </h3>
        {caption && (
          <p className="mt-1.5 text-sm leading-relaxed text-brand-800/55 transition-colors duration-300 group-hover:text-brand-800/75 dark:text-brand-200/60 dark:group-hover:text-brand-200/80">
            {caption}
          </p>
        )}
      </div>
    </article>
  );
}
