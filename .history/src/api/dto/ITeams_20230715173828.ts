export interface ITeam {
  id: number;
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}

export interface fetchTeamsParams {
  name: string;
  page: number;
  pageSize: number;
}
