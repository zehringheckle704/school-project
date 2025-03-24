class MyClass {
  constructor() {
    console.log("Class initialized");
  }

  method1() {
    console.log("Method 1 executed");
  }

  method2(data: any) {
    if (data) {
      console.log("Data is non-empty:", data);
    } else {
      console.error("No data provided for method 2");
    }
  }
}

const myInstance = new MyClass();
myInstance.method1(); // Output: Class initialized
myInstance.method2({}); // No output, logs "No data provided for method 2"
