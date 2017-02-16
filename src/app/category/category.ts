
export class Category {
  public labelCat: string;
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


  constructor(labelCat: string) {
    this.labelCat = labelCat;
  }
}
