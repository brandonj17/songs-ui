import { createAction } from "@ngrx/store";
import { SongEntity } from "../../app/components/reducers/songs.reducer";

let id = 1;

export const songAdded = createAction(
  '[app songs] song added',
  ({ title, artist, recommendedBy }: { title: string, artist?: string, recommendedBy: string }) => ({
    payload: {
      title,
      artist,
      recommendedBy,
      id: 'Temp' + id++
    } as SongEntity
  })
);
