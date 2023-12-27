export class User {
  constructor(private _username: string, private _sub: string, private _roles: string[]) { }

  public get username(): string {
    return this._username;
  }

  
  public get sub() : string {
    return this._sub;
  }
  

  public get roles(): string[] {
    return this._roles;
  }

}