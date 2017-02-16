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
  private id: number = 0;

  constructor(labelCat: string) {
    this.labelCat = labelCat;
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
