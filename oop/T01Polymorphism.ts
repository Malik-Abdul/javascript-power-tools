// Polymorphism is a concept in object-oriented programming where a single function, method, or class behaves differently depending on the context in which it is used. Here’s an example that demonstrates polymorphism through inheritance:

class Employee {
  private name: string;
  protected basicSalary: number;
  constructor(name: string, basicSalary: number) {
    this.name = name;
    this.basicSalary = basicSalary;
  }
  calculateSalary(): number {
    return this.basicSalary;
  }
}

class FullTimeEmployee extends Employee {
  private bonus: number;
  constructor(name: string, basicSalary: number, bonus: number) {
    super(name, basicSalary);
    this.bonus = bonus;
  }
  calculateSalary(): number {
    return this.basicSalary + this.bonus;
  }
}

class PartTimeEmployee extends Employee {
  private hoursWorked: number;
  private hourlyRate: number;
  constructor(name: string, hoursWorked: number, hourlyRate: number) {
    super(name, hourlyRate * hoursWorked);
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }
  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

function printDetail(employee) {
  console.log(
    `Employee: ${
      employee.name
    } 's total salary is: ${employee.calculateSalary()}`
  );
}

const employeeN = new Employee("Awan", 90000);
const fullTimeEmployee = new FullTimeEmployee("Malik", 70000, 30000);
const partTimeEmployee = new PartTimeEmployee("AG", 176, 1000);

printDetail(employeeN);
printDetail(fullTimeEmployee);
printDetail(partTimeEmployee);
