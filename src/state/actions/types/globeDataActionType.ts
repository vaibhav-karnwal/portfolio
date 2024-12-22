export const SET_GLOBE_DATA = "SET_GLOBE_DATA";

export interface GlobeDataDto {
  name: string;
  profession: string;
  nameDescription: string;
  aboutDescription: string[];
  skillSet: string[];
  tools: string[];
  social: socialMedia[];
  currentProject: {
    company: projectDetail[];
    freelance: projectDetail;
  };
  offerings: offeringsDto[];
}
interface socialMedia {
  href: string;
  src: string;
  title: string;
}
interface projectDetail {
  projectName: string;
  clientIcon: string;
  role: string;
  summary: string[];
}
interface offeringsDto {
  title: string;
  description: string;
}
interface SetGlobeDataI {
  type: typeof SET_GLOBE_DATA;
  payload: GlobeDataDto;
}
export type globeDataActionType = SetGlobeDataI;
