console.log("=========Without DIP============");

namespace withoutDI {
  class Student {
    study(): void {
      console.log("Student is studying");
    }
  }
  class Teacher {
    teach(): void {
      console.log("Teacher is teaching");
    }
  }
  class Admin {
    administration(): void {
      console.log("Admin is administrating");
    }
  }
  class SchoolManagement {
    private student: Student;
    private teacher: Teacher;
    private admin: Admin;
    constructor(student: Student, teacher: Teacher, admin: Admin) {
      this.student = student;
      this.teacher = teacher;
      this.admin = admin;
    }
    public manage() {
      this.student.study();
      this.teacher.teach();
      this.admin.administration();
    }
  }

  const student = new Student();
  const teacher = new Teacher();
  const admin = new Admin();
  const schoolManagement = new SchoolManagement(student, teacher, admin);
  schoolManagement.manage();
}

namespace withDIP {
  interface User {
    performDuties(): string;
    // otherTasks(): void;
  }
  class Student implements User {
    public performDuties(): string {
      return this.study();
    }
    private study() {
      return "Student is studying";
    }
  }
  class Teacher implements User {
    public performDuties(): string {
      return this.teach();
    }
    private teach() {
      return "Teacher is teaching";
    }
  }
  class Admin implements User {
    public performDuties(): string {
      return this.administration();
    }
    private administration() {
      return "Admin is administrating";
    }
  }
  class SchoolManagement {
    private user: User;
    constructor(user: User) {
      this.user = user;
    }
    public manage() {
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
}
