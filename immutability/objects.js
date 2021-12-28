const objectA = {
  text: 'text',
  number: 1,
  active: true,
  behaviour: () => {
    console.log('doing!');
  },
};

const objectB = {
  text: 'text',
  number: 1,
  active: true,
  behaviour: () => {
    console.log('doing!');
  },
};

console.log('objectA == objectB   -->', objectA == objectB);
console.log('objectA == objectA   -->', objectA == objectA);
console.log('objectA === objectB  -->', objectA === objectB);
console.log('objectA === objectA  -->', objectA === objectA);

objectA.active = false;
console.log('objectA == objectA   -->', objectA == objectA);
console.log('objectA === objectA  -->', objectA === objectA);
