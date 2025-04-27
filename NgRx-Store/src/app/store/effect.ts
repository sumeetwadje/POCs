import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { DepartmentService } from '../service/department.service';
import { map, mergeMap } from 'rxjs';
import { loadDepartment, loadDepartmentSuccess } from './action';


@Injectable()
export class DepartmentEffects {

    actions$ = inject(Actions);

    constructor(
        private departmentService: DepartmentService
    ) { }

    loadDepartment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadDepartment),
            mergeMap(() =>
                this.departmentService.getDepartment().pipe(
                    map((departments: any) =>
                        loadDepartmentSuccess({ departments })
                    )
                )
            )
        )
    )
}