namespace SRT01singleResponsibilityPrincipalP {
  class EmailService {
    public sendEmail(email: string) {
      console.log(`Email sent To: ${email}`);
    }
  }
  class UserService {
    private userName: string;
    private email: string;
    private emailService: EmailService;
    constructor(userName: string, email: string, emailService: EmailService) {
      this.userName = userName;
      this.email = email;
      this.emailService = emailService;
    }
    public createUser() {
      console.log(
        `New User created with Name: ${this.userName} and Email ${this.email}`
      );
      this.emailService.sendEmail(this.email);
    }
  }
  const emailService = new EmailService();
  const userService = new UserService("ag", "ag@gmail.com", emailService);
  userService.createUser();
}
