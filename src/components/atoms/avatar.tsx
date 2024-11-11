import { LazyImage } from "./lazy-img";

export function Avatar(props: { src: string; size?: number }) {
  const { src, size = 42 } = props;
  return <LazyImage src={src} width={size} height={size} className="rounded-full" />;
}
