export class Animal {
  public pints: number = 35;
  public priceColor: string = "bg-success";
  public abvColor: string = "text-muted";
  // public popular: boolean = false;
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
    public popular: boolean
  ) { }
}
