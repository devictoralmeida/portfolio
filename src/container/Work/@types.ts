import { IAssets } from "../Skills/@types";

interface IImgUrl {
  asset: IAssets;
  _type: "image";
}

export interface IProjects {
  codeLink: string;
  projectLink: string;
  description: string;
  imgUrl: IImgUrl;
  tags: string[];
  title: string;
  _type: "works";
  _createdAt: Date;
  _updatedAt: Date;
  _id: string;
  _rev: string;
}
