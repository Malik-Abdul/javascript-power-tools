namespace withoutISP {
  interface User {
    teach(): string;
    study(): string;
  }
  class Teacher implements User {
    public teach() {
      return "Teacher is Teaching";
    }
    public study() {
      return "Teacher is Studying";
    }
  }
  class Student implements User {
    public teach() {
      return "Student is Teaching";
    }
    public study() {
      return "Student is Studying";
    }
  }
  console.log("=========Without ISP============");
  //   User just want study method in Student class but user forced to use the teach method
  console.log(new Student().study());

  //   Same here
  console.log(new Teacher().teach());
}
namespace withISP {
  interface Study {
    study(): string;
  }
  interface Teach {
    teach(): string;
  }
  class Student implements Study {
    public study() {
      return "Student is Studying";
    }
  }
  class Teacher implements Teach {
    public teach() {
      return "Teacher is Teaching";
    }
  }
  console.log("=========With ISP============");

  //   User just want study method in Student class no extra methods
  console.log(new Student().study());

  //   Same here
  console.log(new Teacher().teach());
}
