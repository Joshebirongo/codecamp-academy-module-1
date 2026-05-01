/*
    Author: Muliri Shebirongo Jonathan <Joshebirongo>
    Problem: Username Validation System
*/

const usernames = ["john", "alice123", "bob smith", "carol", "david_99"];

for (let i = 0; i < usernames.length; i++) {
  const username = usernames[i];
  let isValid = true;

  // Rule 1: At least 5 characters
  if (username.length < 5) {
    isValid = false;
  }

  // Output
  if (isValid) {
    console.log(`Username: ${username} -> VALID.`);
  } else {
    console.log(`Username: ${username} -> INVALID`);
  }
}
