export class Animal {
  public staffPick: boolean = false;
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislkes: string,
    public funFact: string,
    public popular: boolean
  ) { }
}
