// ==========================================================================================================
// Single Responsibility Principle (SRP):
// ==========================================================================================================

// Each class should focus on a single task or responsibility. This makes the class more understandable, maintainable, and reusable.
// By having classes with a single responsibility, the complexity of the system is reduced, making it easier to manage and less prone to bugs.

// ==========================================================================================================
// Open/Closed Principle (OCP):
// ==========================================================================================================

// The Open/Closed Principle (OCP) is one of the five SOLID principles of object-oriented design.
// It states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
// This means that the behavior of a module can be extended without modifying its source code.

// ==========================================================================================================
// Liskov Substitution Principle (LSP):
// ==========================================================================================================

// Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program

// ==========================================================================================================
// Interface Segregation Principle (ISP):
// ==========================================================================================================

// It states that no client should be forced to depend on methods it does not use. Essentially, it promotes the creation of small, specific interfaces rather than large, general-purpose ones.

// Benefits of ISP
// 1- Client-Specific Interfaces: Clients only depend on the interfaces relevant to them, reducing the impact of changes in other parts of the code.
// 2- Decoupling: Classes are more decoupled, making the system easier to understand, maintain, and extend.
// 3- Clearer Contracts: Smaller interfaces provide clearer contracts for the implementing classes.
// By applying the Interface Segregation Principle, we ensure that our code remains flexible and easier to manage as it grows, allowing clients to interact with only the methods they need.

// ==========================================================================================================
// Dependency Inversion Principle (DIP):
// ==========================================================================================================

// It states that high-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Additionally, abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

// In other words, we should depend on interfaces or abstract classes rather than on concrete implementations. This helps in achieving a decoupled design, making the system easier to maintain and extend.
