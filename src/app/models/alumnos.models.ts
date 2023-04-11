export class Alumno {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    // public age: number,
    public aprove: boolean,
    public birthdate: Date,
    public course: string
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
