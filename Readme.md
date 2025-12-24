# JavaScript Advanced Concepts Task

## Description

This project demonstrates the implementation of core JavaScript concepts, including closures, execution context (`this`), recursive object traversal, and the two primary approaches to Object-Oriented Programming (ES6 Classes and ES5 Prototypes).

## Implemented Tasks

### 1. Higher-Order Functions & Closures

-   Created the `addParamsToRequest` function, which uses closure to maintain a private `count` state.
-   Returns a new function that merges initial parameters with provided data and automatically increments the request counter with each call.

### 2. Context and `this` Keyword

-   Demonstrates execution context manipulation using `.call()` and `.bind()` methods.
-   Executes an object's method using data from a separate object without modifying the original structures.

### 3. Recursion (Recursive File Search)

-   Implemented an algorithm for deep searching within a tree-like object structure.
-   The function recursively traverses all nested `children` arrays to collect and return all file names in a single flat array.

### 4. Classes & Inheritance (OOP)

Implemented a `Person` -> `Student` / `Teacher` hierarchy using two different approaches:

-   **ES6 Syntax**: Modern implementation using `class`, `constructor`, `extends`, and `super`.
-   **ES5 Syntax (Legacy)**: Classic implementation using constructor functions, `Person.call(this, ...)` for property inheritance, and `Object.create(Person.prototype)` for method inheritance.

## Installation & Usage

1. Save the code into a file named `main.js`.
2. Run the following command in your terminal:

```bash
node index.js
```
