export type MemoryPhoto = {
  id: string;
  alt: string;
  caption: string;
};

export const memoryPhotos: MemoryPhoto[] = [];

export type PhotoVariant = 'thumb' | 'display';
export type PhotoFormat = 'webp' | 'jpeg';

export function photoSrc(id: string, variant: PhotoVariant, format: PhotoFormat): string {
  const folder = variant === 'thumb' ? 'thumbs' : 'display';
  const extension = format === 'webp' ? 'webp' : 'jpg';
  return `/photos/${folder}/${id}.${extension}`;
}

export function photoThumbWebpSrc(id: string): string {
  return photoSrc(id, 'thumb', 'webp');
}

export function photoThumbJpegSrc(id: string): string {
  return photoSrc(id, 'thumb', 'jpeg');
}

export function photoDisplayWebpSrc(id: string): string {
  return photoSrc(id, 'display', 'webp');
}

export function photoDisplayJpegSrc(id: string): string {
  return photoSrc(id, 'display', 'jpeg');
}
