export interface ICardTeam {
  name: string;
  foundationYear: number;
  imageUrl: string;
}

export interface ITeam {
  id?: number;
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
}
