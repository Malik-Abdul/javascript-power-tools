// -----------------------
// -----------------------
// Abstraction
// -----------------------
// Abstraction is about hiding the complexity of code and showing only the essential features of an object or a system. It's commonly implemented using classes and methods.

// -----------------------
// Abstract class
// -----------------------
// An abstract class is a class in object-oriented programming that cannot be instantiated on its own. Instead, it serves as a blueprint for other classes. Abstract classes are typically used to define common behavior or characteristics that can be shared among multiple derived classes, while leaving the implementation of some methods up to the subclasses.
namespace AbstractClass {
  abstract class Student {
    constructor(protected id: number, protected name: string) {}
    abstract calculateFee(): number;
    displayInfo() {
      console.log(`Name: ${this.name}, Id: ${this.id}`);
    }
    applyFine() {
      console.log("No Fine Applied");
    }
  }
  class FulltimeStudent extends Student {
    constructor(id: number, name: string) {
      super(id, name);
    }
    calculateFee(): number {
      return 5000;
    }
  }
  class ParttimeStudent extends Student {
    constructor(id: number, name: string, private creditHours: number) {
      super(id, name);
    }
    calculateFee(): number {
      return this.creditHours * 300;
    }
    applyFine() {
      if (this.creditHours < 21) {
        console.log("Fine Applied as credit hours are less than 21");
      }
    }
  }

  const fulltimeStudent = new FulltimeStudent(20018, "Malik");
  const parttimeStudent = new ParttimeStudent(2000, "AG", 20);

  fulltimeStudent.displayInfo();
  console.log(`Total Fee: ${fulltimeStudent.calculateFee()}`);
  fulltimeStudent.applyFine();

  parttimeStudent.displayInfo();
  console.log(`Total Fee: ${parttimeStudent.calculateFee()}`);
  parttimeStudent.applyFine();

  const parttimeStudent2 = new ParttimeStudent(2000, "AG", 21);
  parttimeStudent2.displayInfo();
  console.log(`Total Fee: ${parttimeStudent2.calculateFee()}`);
  parttimeStudent2.applyFine();

  // const student = new Student(); // Error: Cannot create an instance of an abstract class.
}
