namespace AbstractClassFactoryFunction {
  abstract class Student {
    constructor(protected id: number, protected name: string) {}

    // Abstract method forces subclasses to implement their own fee calculation logic
    abstract calculateFee(): number;

    // Concrete method provides common functionality across all subclasses
    displayInfo(): void {
      console.log(`Name: ${this.name}, Id: ${this.id}`);
    }

    // Default fine behavior, subclasses can override if needed
    applyFine(): void {
      console.log("No fine applied.");
    }
  }

  class FulltimeStudent extends Student {
    constructor(id: number, name: string) {
      super(id, name);
    }

    calculateFee(): number {
      return 5000; // Fee logic specific to full-time students
    }
  }

  class ParttimeStudent extends Student {
    constructor(id: number, name: string, private creditHours: number) {
      super(id, name);
    }

    calculateFee(): number {
      return this.creditHours * 300; // Fee logic specific to part-time students
    }

    applyFine(): void {
      if (this.creditHours < 21) {
        console.log("Fine applied: credit hours are less than 21.");
      } else {
        console.log("No fine applied: sufficient credit hours.");
      }
    }
  }

  // Factory function to demonstrate abstraction
  function createStudent(
    type: "Fulltime" | "Parttime",
    id: number,
    name: string,
    creditHours?: number
  ): Student {
    if (type === "Fulltime") {
      return new FulltimeStudent(id, name);
    } else if (type === "Parttime" && creditHours !== undefined) {
      return new ParttimeStudent(id, name, creditHours);
    }
    throw new Error("Invalid student type or missing credit hours.");
  }

  // Usage
  const fulltimeStudent = createStudent("Fulltime", 20018, "Malik");
  const parttimeStudent = createStudent("Parttime", 2000, "AG", 20);

  fulltimeStudent.displayInfo();
  console.log(`Total Fee: ${fulltimeStudent.calculateFee()}`);
  fulltimeStudent.applyFine();

  parttimeStudent.displayInfo();
  console.log(`Total Fee: ${parttimeStudent.calculateFee()}`);
  parttimeStudent.applyFine();
}
