namespace LiskovSubstitutionPrinciple {
  interface Shape {
    area(): number;
  }
  class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    public area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle implements Shape {
    private length: number;
    private breath: number;
    constructor(length: number, breath: number) {
      this.length = length;
      this.breath = breath;
    }
    public area(): number {
      return this.length * this.breath;
    }
  }
  console.log("With Parent Object type");
  const circle: Shape = new Circle(5);
  console.log(`Area of Circle: ${circle.area()}`);
  const rectangle: Shape = new Rectangle(3, 4);
  console.log(`Rectangle of Circle: ${rectangle.area()}`);

  console.log("With Child Object type");
  const circle1: Circle = new Circle(5);
  console.log(`Area of Circle: ${circle1.area()}`);
  const rectangle1: Rectangle = new Rectangle(3, 4);
  console.log(`Rectangle of Circle: ${rectangle1.area()}`);
}
