export interface TVDetails {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: object;
  rating: object;
  weight: number;
  network: object;
  webChannel: any;
  externals: object;
  image: object;
  summary: string;
  updated: number;
  _links: object;
}
