namespace withoutOC {
  export class Shape {
    public type: string | undefined;
    public radius: number | null;
    public length: number | null;
    public breath: number | null;
    constructor(
      type: string = "",
      radius: number | null = null,
      length: number | null = null,
      breath: number | null = null
    ) {
      this.type = type;
      this.radius = radius;
      this.length = length;
      this.breath = breath;
    }
  }
  export class CalculateArea {
    private shape: Shape;
    constructor(shape: Shape) {
      this.shape = shape;
    }
    public area() {
      let area = 0;
      if (this.shape.type?.toLowerCase() == "circle") {
        area = this.shape.radius
          ? Math.PI * this.shape.radius * this.shape.radius
          : 0;
      }
      if (this.shape.type?.toLowerCase() == "rectangle") {
        area =
          this.shape.length && this.shape.breath
            ? this.shape.length * this.shape.breath
            : 0;
      }
      return area;
    }
  }
  console.log("=========Without Open Closed Principal============");

  const circleShape = new withoutOC.Shape("circle", 5);
  const circleArea = new withoutOC.CalculateArea(circleShape).area();
  console.log(`Circle Area: ${circleArea}`);

  const rectangleShape = new withoutOC.Shape("Rectangle", null, 3, 4);
  const rectangleArea = new withoutOC.CalculateArea(rectangleShape).area();
  console.log(`Rectangle Area: ${rectangleArea}`);
}
namespace withOC {
  abstract class Shape {
    public abstract area(): number;
  }
  export class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    public area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  export class Rectangle extends Shape {
    private lenght: number;
    private breath: number;
    constructor(length: number, breath: number) {
      super();
      this.lenght = length;
      this.breath = breath;
    }
    public area(): number {
      return this.lenght * this.breath;
    }
  }
  console.log("=========With Open Closed Principal============");
  console.log(`Areac of Circle: ${new Circle(5).area()}`);
  console.log(`Areac of Rectangle: ${new Rectangle(3, 4).area()}`);
}
