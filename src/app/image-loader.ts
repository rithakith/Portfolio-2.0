const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Portfolio-2.0" : "";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  // Avoid duplicating base path if already present
  if (basePath && src.startsWith(basePath)) {
    return src;
  }
  return `${basePath}${src.startsWith("/") ? "" : "/"}${src}`;
}
