"use strict";
var withoutDI;
(function (withoutDI) {
    class Student {
        study() {
            console.log("Student is studying");
        }
    }
    class Teacher {
        teach() {
            console.log("Teacher is teaching");
        }
    }
    class Admin {
        administration() {
            console.log("Admin is administrating");
        }
    }
    class SchoolManagement {
        constructor(student, teacher, admin) {
            this.student = student;
            this.teacher = teacher;
            this.admin = admin;
        }
        manage() {
            this.student.study();
            this.teacher.teach();
            this.admin.administration();
        }
    }
    console.log("=========Without DIP============");
    const student = new Student();
    const teacher = new Teacher();
    const admin = new Admin();
    const schoolManagement = new SchoolManagement(student, teacher, admin);
    schoolManagement.manage();
})(withoutDI || (withoutDI = {}));
var withDIP;
(function (withDIP) {
    class Student {
        performDuties() {
            return this.study();
        }
        study() {
            return "Student is studying";
        }
    }
    class Teacher {
        performDuties() {
            return this.teach();
        }
        teach() {
            return "Teacher is teaching";
        }
    }
    class Admin {
        performDuties() {
            return this.administration();
        }
        administration() {
            return "Admin is administrating";
        }
    }
    class SchoolManagement {
        constructor(user) {
            this.user = user;
        }
        manage() {
            return this.user.performDuties();
        }
    }
    const student = new Student();
    const teacher = new Teacher();
    const admin = new Admin();
    const studentDuties = new SchoolManagement(student);
    const teacherDuties = new SchoolManagement(teacher);
    const adminDuties = new SchoolManagement(admin);
    console.log("=========With DIP============");
    console.log(studentDuties.manage());
    console.log(teacherDuties.manage());
    console.log(adminDuties.manage());
})(withDIP || (withDIP = {}));
