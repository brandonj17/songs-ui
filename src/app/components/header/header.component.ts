import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, SelectCounterCurrent } from '../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  current$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(SelectCounterCurrent);
  }

}
