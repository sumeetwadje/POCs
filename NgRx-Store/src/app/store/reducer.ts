import { createReducer, on } from "@ngrx/store"
import { iDepartment } from "./model"
import { loadDepartment, loadDepartmentSuccess } from "./action"

export interface DepartmentState {
    departments: iDepartment[],
    loading: boolean
}

export const initialState: DepartmentState = {
    departments: [],
    loading: false
}

export const departmentReducer = createReducer(
    initialState,
    on(loadDepartment, state => ({
        ...state,
        loading: true
    })),
    on(loadDepartmentSuccess, (state, { departments }) => ({
        ...state,
        departments,
        loading: false
    })
    )
)