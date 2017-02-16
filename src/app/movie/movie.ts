import { Category } from '../category/category';

export class Movie {
  public title: string;
  public id: number = 0;
  public budget: number;
  public income: number;
  public length: number;
  public releaseDate: string;
  public category: Category;
  public _links: {
    self: {
      href: string
    },
    category: {
      href: string
    },
    movies: {
      href: string
    }
  };


  constructor(title: string, budget: number, income: number, length: number, releaseDate: string, category: Category) {
    this.title = title;
    this.budget = budget;
    this.income = income;
    this.length = length;
    this.releaseDate = releaseDate;
    this.category = category;
  }

  getId(): number {
    if (this.id === 0) {
      if (this._links && this._links.self && this._links.self.href) {
        let args: string[] = this._links.self.href.split('/');
        this.id = +args.pop();
      } else { this.id = 0; }
    }
    return this.id;
  }
}
