var SRT01singleResponsibilityPrincipalP;
(function (SRT01singleResponsibilityPrincipalP) {
    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        EmailService.prototype.sendEmail = function (email) {
            console.log("Email sent To: ".concat(email));
        };
        return EmailService;
    }());
    var UserService = /** @class */ (function () {
        function UserService(userName, email, emailService) {
            this.userName = userName;
            this.email = email;
            this.emailService = emailService;
        }
        UserService.prototype.createUser = function () {
            console.log("New User created with Name: ".concat(this.userName, " and Email ").concat(this.email));
            this.emailService.sendEmail(this.email);
        };
        return UserService;
    }());
    var emailService = new EmailService();
    var userService = new UserService("ag", "ag@gmail.com", emailService);
    userService.createUser();
})(SRT01singleResponsibilityPrincipalP || (SRT01singleResponsibilityPrincipalP = {}));
