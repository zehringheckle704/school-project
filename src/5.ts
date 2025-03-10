// Create a new class called 'Student'
class Student {
  // Define instance variables
  private _name: string;
  private _age: number;

  // Constructor
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter and setter methods for 'name' property
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  // Getter and setter methods for 'age' property
  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
