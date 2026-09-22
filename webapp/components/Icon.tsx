import type { CSSProperties } from "react";

export function Icon({
  name,
  size = 20,
  color = "currentColor",
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className="ico"
      role="img"
      aria-hidden="true"
      style={
        {
          width: size,
          height: size,
          color,
          "--ico-url": `url(https://unpkg.com/lucide-static@0.544.0/icons/${name}.svg)`,
          ...style,
        } as CSSProperties
      }
    />
  );
}
