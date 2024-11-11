import { LazyImage } from "./lazy-img";

export function Avatar(props: { src: string }) {
  return <LazyImage src={props.src} width={42} height={42} className="rounded-full" />;
}
