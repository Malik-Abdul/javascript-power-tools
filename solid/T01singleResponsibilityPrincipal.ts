namespace T01singleResponsibilityPrincipal {
  class EmailServise {
    public sendEmail() {
      console.log("Email sent");
    }
  }
  class UserService {
    private useName: string;
    private email: string;
    private emailService: EmailServise;
    constructor(userName: string, email: string, emailServise: EmailServise) {
      userName: this.useName;
      email: this.email;
      emailServise: this.emailService;
    }
    public createUser() {
      console.log("User Created");
      this.emailService.sendEmail();
    }
  }
  const emailService = new EmailServise();
  const userServise = new UserService("Malik", "malik@mail.com", emailService);
  userServise.createUser();
}
