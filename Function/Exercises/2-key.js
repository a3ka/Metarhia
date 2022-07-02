'use strict';

const generateKey = (length, possible) => {
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  baseLength = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * baseLength);
    key += possible[index]
  }
	
  return key;
};

module.exports = { generateKey };
