export interface IAssets {
  _ref: string;
  _type: string;
}

export interface IIcon {
  asset: IAssets;
  _type: "image";
}

export interface ISkills {
  icon: IIcon;
  name: string;
  bgColor: string;
  _id: string;
  _rev: string;
  _type: "skills";
  _createdAt: Date;
  _updatedAt: Date;
}

export interface IWorks {
  company: string;
  desc: string;
  name: string;
  _key: string;
  _type: string;
}

export interface IExperiences {
  works: IWorks[];
  year: string;
  _createdAt: Date;
  _updatedAt: Date;
  _id: string;
  _rev: string;
  _type: "experiences";
}
