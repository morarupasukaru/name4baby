export class Firstname {
  name: string;

  // TODO enum Gender (Male, Female, Neutral)
  gender: string;
  like: boolean;

  constructor(name: string, gender: string, like: boolean) {
    this.name = name;
    this.gender = gender;
    this.like = like;
  }
}
