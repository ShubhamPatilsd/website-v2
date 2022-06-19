export interface SanityProject {
  ms: number;
  query: string;
  result: Result[];
}

export interface Result {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  demo: string;
  description: string;
  github: string;
  image: Image;
  name: string;
  technologies: string[];
}

export interface Image {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
