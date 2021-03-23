import { Action, createReducer, on } from "@ngrx/store";
import { by } from "protractor";
import * as actions from '../../actions/counter.actions';



export interface CounterState {
  current: number;
  by: number;
}



const initialState: CounterState = {
  current: 0,
  by: 1
}

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by })),
  on(actions.countReset, (s) => ({ ...s, current: 0 }))
)

export function reducer(state: CounterState = initialState, action: Action) {
  return myReducer(state, action);
}
