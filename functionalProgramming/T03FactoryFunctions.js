function registerStudent(name, rollNo) {
  return {
    name,
    rollNo,
    register() {
      console.log(`New Student: ${name} is registered with rollNo: ${rollNo}`);
    },
  };
}

const studentOne = registerStudent("Malik", 25);
const studentTwo = registerStudent("AG", 26);

studentOne.register();
studentTwo.register();

// Output:
// New Student: Malik is registered with rollNo: 25
// New Student: AG is registered with rollNo: 26

function createEmployee(name, position, salary, department, bonus = 0) {
  return {
    name,
    position,
    salary,
    department,
    bonus,
    getDetails() {
      return `${this.name} works as a ${this.position} in the ${this.department} department and earns $${this.salary} per month.`;
    },
    calculateAnnualSalary() {
      return this.salary * 12;
    },
  };
}

// Create employee objects using the factory function
const employee1 = createEmployee(
  "John Doe",
  "Software Engineer",
  5000,
  "IT",
  5000
);
const employee2 = createEmployee(
  "John Doe",
  "Project Manager",
  6000,
  "IT",
  7000
);

// Access their details
console.log(employee1.getDetails());
// Output: "John Doe works as a Software Engineer and earns $5000 per month."

console.log(employee2.getDetails());
// Output: "Jane Smith works as a Project Manager and earns $7000 per month."

// Calculate their annual salary
console.log(
  `${employee1.name}'s annual salary: $${employee1.calculateAnnualSalary()}`
);
// Output: "John Doe's annual salary: $60000"

console.log(
  `${employee2.name}'s annual salary: $${employee2.calculateAnnualSalary()}`
);
// Output: "Jane Smith's annual salary: $84000"

// Reusability: You can create multiple employees with different properties by calling the createEmployee function.
// Encapsulation: Each employee object has its own methods (getDetails and calculateAnnualSalary) to manage its behavior.
// Flexibility: You can easily extend the factory function to add more properties or methods (e.g., bonuses, department).
// This pattern allows for easy creation and management of employee objects without the complexity of using class or new constructors.

const employee3 = createEmployee(
  "Malik",
  "Software Engineer",
  9000,
  "IT",
  8000
);

// Dynamically add the 'calculateTotalCompensation' method to employee3
employee3.calculateTotalCompensation = function () {
  const annualSalary = this.calculateAnnualSalary(); // Accessing the existing method
  return annualSalary + this.bonus;
};

console.log(
  `${
    employee3.name
  }'s total annual compensation: $${employee3.calculateTotalCompensation()}`
);
