export interface ITeam {
  id?: number;
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}

export interface IInitialTeams {
  data: ITeam[];
  count: number;
  page: number;
  size: number;
}
