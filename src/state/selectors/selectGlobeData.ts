import { RootStore } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { globeDataState } from "../reducers/globeDataReducer";

export const selectGlobeData = (state: RootStore): globeDataState =>
  state.globeData;

export const selectedSkillSet = createSelector(
  selectGlobeData,
  (statuses) => statuses.globeData.skillSet
);

export const selectedTools = createSelector(
  selectGlobeData,
  (statuses) => statuses.globeData.tools
);

export const selectedAbout = createSelector(
  selectGlobeData,
  (statuses) => statuses.globeData.aboutDescription
);
