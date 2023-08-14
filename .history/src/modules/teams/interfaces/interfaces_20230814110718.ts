export interface ITeam {
  id: number;
  name: string | null;
  foundationYear: number | null;
  division: string | null;
  conference: string | null;
  imageUrl: string | null;
  isLoading: boolean;
  error: number | null | undefined;
}

export interface IFetchTeamsParams {
  name: string;
  page: number;
  pageSize: number;
}
