const status = 'inactive';
let label;

switch (status) {
  case 'finished':
    label = 'Finished task';
    break;
  case 'inactive':
    label = 'Task inactive';
    break;
  case 'ongoing':
    label = 'Ongoing task';
    break;
}
