const statusMap = {
  finished: {
    label: 'Finished task',
    tag: 'Finished',
    variant: 'secondary',
  },
  inactive: {
    label: 'Task inactive',
    tag: 'Inactive',
    variant: 'disabled',
  },
  ongoing: {
    label: 'Ongoing task',
    tag: 'Ongoing',
    variant: 'primary',
  },
};

const { label, tag, variant } = statusMap['finished'];
label; // => Finished tag
tag; // => Finished
variant; // => secondary
