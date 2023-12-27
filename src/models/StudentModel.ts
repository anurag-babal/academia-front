export default class StudentModel {
  constructor(
    private _rollNumber: string,
    private _firstName: string,
    private _email: string,
    private _cgpa: number,
    private _totalCredits: number,
    private _graduationYear: number,
    private _lastName?: string
  ) { }


  public get rollNumber(): string {
    return this._rollNumber;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string | undefined {
    return this._lastName;
  }

  public get email(): string {
    return this._email;
  }

  public get cgpa(): number {
    return this._cgpa;
  }

  public get totalCredits(): number {
    return this._totalCredits;
  }

  public get graduationYear(): number {
    return this._graduationYear;
  }

}