export const SET_PROJECT_DATA = "SET_PROJECT_DATA";

export interface ProjectDataDto {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  link: string;
}

interface SetProjectDataI {
  type: typeof SET_PROJECT_DATA;
  payload: ProjectDataDto[];
}
export type projectDataActionType = SetProjectDataI;
