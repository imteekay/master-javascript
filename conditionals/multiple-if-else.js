const status = 'inactive';
let label;

if (status === 'finished') {
  label = 'Finished task';
} else if (status === 'inactive') {
  label = 'Task inactive';
} else if (status === 'ongoing') {
  label = 'Ongoing task';
}
