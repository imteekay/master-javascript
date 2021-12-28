const status = 'inactive';
let label;
let tag;
let variant;

switch (status) {
  case 'finished':
    label = 'Finished task';
    tag = 'Finished';
    variant = 'secondary';
    break;
  case 'inactive':
    label = 'Task inactive';
    tag = 'Inactive';
    variant = 'disabled';
    break;
  case 'ongoing':
    label = 'Ongoing task';
    tag = 'Ongoing';
    variant = 'primary';
    break;
}
