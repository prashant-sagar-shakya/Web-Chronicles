/*
  Task: Read a file, remove all extra spaces, and write it back.
  Approach:
  1. Read the file content.
  2. Use a regular expression to replace multiple spaces with a single space.
  3. Write the cleaned content back to the same file.
*/

const fs = require('fs');

const filePath = 'dirty-file.txt';

// Helper to create the file if it doesn't exist for testing
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, 'hello     world    my    name   is       raman');
}

function cleanFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Replace multiple spaces with a single space
    const cleanedContent = data.replace(/\s+/g, ' ').trim();

    fs.writeFile(path, cleanedContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File cleaned successfully!');
    });
  });
}

cleanFile(filePath);
