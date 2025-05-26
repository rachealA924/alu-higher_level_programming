#!/usr/bin/node

const arg = process.argv[2];

// Check if arg is undefined (meaning no argument was passed)
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
