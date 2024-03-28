import { projectDataState } from "../reducers/projectDataReducer";
import { RootStore } from "../store";

export const selectProjectData = (state:RootStore): projectDataState => state.projectData;