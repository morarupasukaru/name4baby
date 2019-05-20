export enum Gender {
  male = 'male',
  female = 'female',
  mix = 'mix'
}

export class Firstname {
  name: string;
  gender: Gender;
  like: boolean;
  search: string

  constructor(name: string, gender: Gender, like: boolean, search: string) {
    this.name = name;
    this.gender = Gender[gender];
    this.like = like;
    this.search = search;
  }
}
