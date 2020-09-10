export interface Photo {
  id: string;
  title: string;
  farm: number;
  secret: number;
  server: number;
  description: { _content: string };
  dateupload: string; // timestamp
  views: string;
  ownername: string;
  height_o?: number;
  width_o?: number;
}
