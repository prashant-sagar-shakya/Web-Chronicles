# Week 2 - Asynchronous JavaScript Assignments

This folder contains practical exercises to master asynchronous programming in JavaScript, specifically focusing on timers and file system operations.

## Assignments

### Easy
1. **Counter**: Implementation of a standard 1-second incrementing counter using `setInterval`.
2. **Counter (no setInterval)**: Implementation of a counter using recursive `setTimeout` calls to simulate an interval.

### Medium
1. **File cleaner**: Reading a "dirty" file with extra whitespaces, cleaning it, and saving the result back.
2. **Clock**: A real-time terminal clock that displays both 24-hour and 12-hour AM/PM formats.

## Development Setup

1. **Local Environment**: Ensure you have Node.js installed on your machine.
2. **Installation**: Run `npm install` in this directory to set up any necessary dependencies.
3. **Execution**: You can run any assignment file directly using Node.js:
   ```bash
   node easy/1-counter.js
   node medium/2-clock.js
   ```

## Key Learning Objectives
- Understanding the difference between synchronous and asynchronous code.
- Mastering the use of `setInterval` and `setTimeout`.
- Working with the Node.js File System (`fs`) module.
- Formatting dates and strings in JavaScript.