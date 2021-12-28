const isActive = true;

if (isActive) {
  const toggle = 'on';
} else {
  const toggle = 'off';
}

toggle; // => Uncaught ReferenceError: toggle is not defined
