import catalogue from "./public/catalogue";

export function genDictPath(p: string[]) {
  return catalogue
    .filter((item) => item.tags.find((item) => p.includes(item)))
    .map((item) => ({
      params: { dict: item.url },
    }));
}
