export enum Gender {
  male = 'male',
  female = 'female',
  mix = 'mix'
}

export class Firstname {
  name: string;
  gender: Gender;
  like: boolean;

  constructor(name: string, gender: Gender, like: boolean) {
    this.name = name;
    this.gender = Gender[gender];
    this.like = like;
  }
}
