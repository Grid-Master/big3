export interface ITeam {
  id: number;
  name: string | null;
  foundationYear: number | null;
  division: string | null;
  conference: string | null;
  imageUrl: string | null;
}

export interface IFetchTeamsParams {
  name: string;
  page: number;
  pageSize: number;
}
