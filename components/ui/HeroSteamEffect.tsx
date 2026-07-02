import { cn } from "@/lib/utils";

type HeroSteamEffectProps = {
  animated?: boolean;
  className?: string;
};

export function HeroSteamEffect({
  animated = false,
  className,
}: HeroSteamEffectProps) {
  return (
    <div
      className={cn("hero-steam pointer-events-none absolute z-10", className)}
      aria-hidden
    >
      <span
        className={cn(
          "hero-steam-wisp hero-steam-wisp-1",
          animated && "hero-steam-wisp--animated"
        )}
      />
      <span
        className={cn(
          "hero-steam-wisp hero-steam-wisp-2",
          animated && "hero-steam-wisp--animated"
        )}
      />
      <span
        className={cn(
          "hero-steam-wisp hero-steam-wisp-3",
          animated && "hero-steam-wisp--animated"
        )}
      />
    </div>
  );
}
