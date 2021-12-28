type Statuses = 'finished' | 'inactive' | 'ongoing';
type StatusObject = {
  label: string;
  tag: string;
  variant: string;
};

type StatusMap = Record<Statuses, StatusObject>;

const statusMap: StatusMap = {
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

// @ts-expect-error "Element implicitly has an 'any' type because expression of type '"bla"' can't be used to index type 'StatusMap'. Property 'bla' does not exist on type 'StatusMap'."
statusMap['bla'];
