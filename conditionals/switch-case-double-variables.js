const status = 'inactive';
let label;
let tag;

switch (status) {
  case 'finished':
    label = 'Finished task';
    tag = 'Finished';
    break;
  case 'inactive':
    label = 'Task inactive';
    tag = 'Inactive';
    break;
  case 'ongoing':
    label = 'Ongoing task';
    tag = 'Ongoing';
    break;
}
