// Primitives vs structural data types
// Primitive data types pass values
// Structural data types pass references

// Primitive data types are immutable
// Structural data types contain mutateable data

// shallow copy vs deep copy (clones of data structures)

// shallow copy still share references of nested strutures
// which allows for mutations of the original data

// Object.freeze create a shallow freeze
// but it does not freez the entire data structure if there is a nested array or objects

// Deep copy share no references

// All of this is important to know when constructing Pure Functions
// because they require you to avoid mutating the original data
