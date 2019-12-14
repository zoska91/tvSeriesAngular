export interface TVInfo {
  score: number;
  show: {
    externals: object;
    genres: Array<string>;
    id: number;
    image: {
      medium: string;
      original: string;
    };
    language: string;
    name: string;
    network: string;
    officialSite: string;
    premiered: string;
    rating: object;
    runtime: number;
    schedule: object;
    status: string;
    summary: string;
    type: string;
    updated: number;
    url: string;
    webChannel: object;
  };
}
