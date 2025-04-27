import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DepartmentState } from "./reducer";


export const selectDepartmentState = createFeatureSelector<DepartmentState>('departments')

export const selectDeparments = createSelector(
    selectDepartmentState,
    state => state.departments
)

export const selectLoading = createSelector(
    selectDepartmentState,
    state => state.loading
)