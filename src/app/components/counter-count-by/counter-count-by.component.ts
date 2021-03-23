import { Component, OnInit } from '@angular/core';
import { countBySet } from 'src/app/actions/counter.actions';
import { Store } from '@ngrx/store';
import { AppState, SelectCountingBy } from '../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-count-by',
  templateUrl: './counter-count-by.component.html',
  styleUrls: ['./counter-count-by.component.css']
})
export class CounterCountByComponent implements OnInit {

  CountingBy$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.CountingBy$ = this.store.select(SelectCountingBy);
  }
  changeCountBy(by: number): void {
    this.store.dispatch(countBySet({ by }));
  }
}
