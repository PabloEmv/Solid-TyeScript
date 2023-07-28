(() => {
  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }
  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }
    checkCredentials() {
      return true;
    }
  }
  class UserSetting extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }
  const userSettings = new UserSetting(
    "/src/home",
    "/home",
    "pablo.ed.martinez@gmail.com",
    "Admin",
    "Pablo",
    "M",
    new Date("1999-02-27")
  );
  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
