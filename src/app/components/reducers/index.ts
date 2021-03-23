import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer'

export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers = {
  counter: fromCounter.reducer
}

const CountSelectorBranch = (state: AppState) => state.counter;

export const SelectCounterCurrent = createSelector(CountSelectorBranch, b => b.current)

export const SelectResetDisabled = createSelector(SelectCounterCurrent, c => c === 0)
export const SelectCountingBy = createSelector(CountSelectorBranch, b => b.by)
