export interface Music {
  id?: number,
  title?: string,
  description?: string,
  album?: string,
  artist?: string,
  duration?: string,
  date: string,
  styles: string[],
  picture?: string | ArrayBuffer | null      // path of the image
}

export const keys = ["id", "title", "description", "album", "artist", "duration", "date", "styles", "picture"];
