
// Central image asset map. Keys match the `image` fields used across data/site.ts

export const IMAGES: Record<string, string> = {
  IMG_HERO_DOCTOR: "/571104a1-a004-4f20-8bf3-70a83dd8a4c1.jpg",
  IMG_ABOUT: "/f95f15aa-8bf2-4df4-8f7d-e58a6764fb92.jpg",
  IMG_SERVICE: "/389e398f-b81d-48fd-9712-879355eab034.jpg",

  IMG_DOC_RENU: "/644ebb14-cb1f-4227-83ef-c6166ab7d7cd.jpg",
  IMG_DOC_ARJUN: "/7a0d385e-6eb9-4299-96eb-467e0b6b4dc3.jpg",
  IMG_DOC_PRIYA: "/1fd4bd47-8974-402a-b1ba-92fd1927cd49.jpg",
  IMG_DOC_SANJAY: "/5f6209d4-770d-4517-bf89-9506b2587d5a.jpg",

  IMG_BLOG1: "/e7bf433d-ee54-4bef-86c0-4b2d4bfe407e.jpg",
  IMG_BLOG2: "/c0c53917-3395-4fa8-8eb5-30a3670b9f20.jpg",
  IMG_BLOG3: "/59b75085-9f56-4014-ad1a-d7476e3018e9.jpg"
};

// Doctor images resolve directly; service/blog images fall back to a shared visual.
export function img(key: string): string {
  if (IMAGES[key]) return IMAGES[key];
  if (key.startsWith('IMG_DOC')) return IMAGES.IMG_DOC_RENU;
  if (key.startsWith('IMG_BLOG')) return IMAGES.IMG_BLOG1;
  if (key.startsWith('IMG_T')) return IMAGES.IMG_ABOUT;
  return IMAGES.IMG_SERVICE;
}