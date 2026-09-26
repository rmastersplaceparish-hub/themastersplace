import photo01Asset from "@/assets/gallery-new/masters-place-01.jpg.asset.json";
import photo02Asset from "@/assets/gallery-new/masters-place-02.jpg.asset.json";
import photo03Asset from "@/assets/gallery-new/masters-place-03.jpg.asset.json";
import photo04Asset from "@/assets/gallery-new/masters-place-04.jpg.asset.json";
import photo05Asset from "@/assets/gallery-new/masters-place-05.jpg.asset.json";
import photo06Asset from "@/assets/gallery-new/masters-place-06.jpg.asset.json";
import photo07Asset from "@/assets/gallery-new/masters-place-07.jpg.asset.json";
import photo08Asset from "@/assets/gallery-new/masters-place-08.jpg.asset.json";
import photo09Asset from "@/assets/gallery-new/masters-place-09.jpg.asset.json";
import photo10Asset from "@/assets/gallery-new/masters-place-10.jpg.asset.json";


export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  group: string;
  description: string;
  driveUrl: string;
  photos: GalleryPhoto[];
}

export const DRIVE_ROOT_URL = "https://photos.app.goo.gl/bP3mL8BXVtMUikAf8";

// Asset pointers use root-relative paths on Lovable. Resolve them against the
// project preview so the same photos also work when this site runs on Vercel.
const PHOTO_ORIGIN = "https://id-preview--23567c28-58c9-436f-83a9-a870db587025.lovable.app";
const photoUrl = (path: string) => new URL(path, PHOTO_ORIGIN).href;

const sharedAlbumPhotos: GalleryPhoto[] = [
  { src: photoUrl(photo01Asset.url), alt: "A recent moment at RCCG The Master's Place" },
  { src: photoUrl(photo02Asset.url), alt: "Church family at RCCG The Master's Place" },
  { src: photoUrl(photo03Asset.url), alt: "A recent gathering at RCCG The Master's Place" },
  { src: photoUrl(photo04Asset.url), alt: "Fellowship at RCCG The Master's Place" },
  { src: photoUrl(photo05Asset.url), alt: "Life at RCCG The Master's Place" },
  { src: photoUrl(photo06Asset.url), alt: "A joyful moment at RCCG The Master's Place" },
  { src: photoUrl(photo07Asset.url), alt: "The Master's Place church community" },
  { src: photoUrl(photo08Asset.url), alt: "A recent church gathering in Ile-Ife" },
  { src: photoUrl(photo09Asset.url), alt: "Worship and fellowship at The Master's Place" },
  { src: photoUrl(photo10Asset.url), alt: "A recent photo from The Master's Place" },
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: "recent-moments",
    title: "Recent Moments",
    group: "Life at The Master's Place",
    description: "A glimpse of our church family, worship and fellowship in Ile-Ife.",
    driveUrl: DRIVE_ROOT_URL,
    photos: sharedAlbumPhotos,
  },
];

export const galleryHighlights: GalleryPhoto[] = sharedAlbumPhotos.slice(0, 6);
