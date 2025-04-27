import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDeparments, selectLoading } from '../../store/selector';
import { loadDepartment } from '../../store/action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [AsyncPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  private store = inject(Store)

  department$ = this.store.select(selectDeparments)
  loading$ = this.store.select(selectLoading)

  ngOnInit(): void {
    this.store.dispatch(loadDepartment())
  }

}
