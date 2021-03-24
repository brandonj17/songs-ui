import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer'
import * as fromSongs from './songs.reducer';
import { SongListModel } from '../../models/songs-models';

export interface AppState {
  counter: fromCounter.CounterState
  songs: fromSongs.SongState
}

export const reducers = {
  counter: fromCounter.reducer,
  songs: fromSongs.reducer
}

const CountSelectorBranch = (state: AppState) => state.counter;

export const SelectCounterCurrent = createSelector(CountSelectorBranch, b => b.current)

export const SelectResetDisabled = createSelector(SelectCounterCurrent, c => c === 0)
export const SelectCountingBy = createSelector(CountSelectorBranch, b => b.by)

// songs

const selectSongsBranch = (state: AppState) => state.songs;

const selectSongEntityArray =
  fromSongs.adapter.getSelectors(selectSongsBranch).selectAll;



export const selectSongListModel = createSelector(
  selectSongEntityArray,
  songs => songs as SongListModel[]
)
