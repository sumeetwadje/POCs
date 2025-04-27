import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadDepartment } from './store/action';
import { selectDeparments, selectLoading } from './store/selector';
import { AsyncPipe } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private store = inject(Store)

  department$ = this.store.select(selectDeparments)
  loading$ = this.store.select(selectLoading)

  ngOnInit(): void {
    this.store.dispatch(loadDepartment())

  }

}
