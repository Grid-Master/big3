export interface IPlayer {
  id: number;
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: any;
  height: number;
  weight: number;
  avatarUrl: string | null;
  teamName: string;
}

export interface IPlayers {
  name?: string;
  teamIds?: number[];
  page?: number;
  pageSize?: number;
}
