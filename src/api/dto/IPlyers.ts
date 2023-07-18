export interface IPlayer {
  name: string;
  number?: number;
  position: string;
  team?: number;
  birthday?: Date;
  height?: number;
  weight?: number;
  avatarUrl?: string | null;
  //   id: number;
  teamName?: string;
}

export interface IPlayers {
  name?: string;
  teamIds?: number[];
  page?: number;
  pageSize?: number;
}
