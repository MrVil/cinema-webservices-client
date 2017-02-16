
export class Actor {

  public lastNameAct: String = 'Unknow';
  public firstNameAct: String;
  public birthDate: String;
  public deathDate: String;
  public id: number;


  constructor(lastNameAct: String,firstNameAct: String,birthDate: String,deathDate: String ) {
    this.lastNameAct = lastNameAct;
    this.firstNameAct = firstNameAct;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
  }
}
