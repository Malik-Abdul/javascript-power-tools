"use strict";
var withoutISP;
(function (withoutISP) {
    class Teacher {
        teach() {
            return "Teacher is Teaching";
        }
        study() {
            return "Teacher is Studying";
        }
    }
    class Student {
        teach() {
            return "Student is Teaching";
        }
        study() {
            return "Student is Studying";
        }
    }
    console.log("=========Without ISP============");
    //   User just want study method in Student class but user forced to use the teach method
    console.log(new Student().study());
    //   Same here
    console.log(new Teacher().teach());
})(withoutISP || (withoutISP = {}));
var withISP;
(function (withISP) {
    class Student {
        study() {
            return "Student is Studying";
        }
    }
    class Teacher {
        teach() {
            return "Teacher is Teaching";
        }
    }
    console.log("=========With ISP============");
    //   User just want study method in Student class no extra methods
    console.log(new Student().study());
    //   Same here
    console.log(new Teacher().teach());
})(withISP || (withISP = {}));
