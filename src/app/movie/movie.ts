import { Category } from '../category/category';

export class Movie {
  public title: String;
  public id: number;
  public budget: number;
  public income: number;
  public length: number;
  public releaseDate: String;
  public category: Category;
  public _links: {
      self: {
          href: string
      }
  };


  constructor(title: String) {
    this.title = title;
  }
}
