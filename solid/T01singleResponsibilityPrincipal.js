var T01singleResponsibilityPrincipal;
(function (T01singleResponsibilityPrincipal) {
    var EmailServise = /** @class */ (function () {
        function EmailServise() {
        }
        EmailServise.prototype.sendEmail = function () {
            console.log("Email sent");
        };
        return EmailServise;
    }());
    var UserService = /** @class */ (function () {
        function UserService(userName, email, emailServise) {
            userName: this.useName;
            email: this.email;
            emailServise: this.emailService;
        }
        UserService.prototype.createUser = function () {
            console.log("User Created");
            this.emailService.sendEmail();
        };
        return UserService;
    }());
    var emailService = new EmailServise();
    var userServise = new UserService("Malik", "malik@mail.com", emailService);
    userServise.createUser();
})(T01singleResponsibilityPrincipal || (T01singleResponsibilityPrincipal = {}));
