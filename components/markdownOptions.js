import { Typography } from '@mui/material';

const markdownOptions = {
  forceBlock: true,
  wrapper: null,
  overrides: {
    h1: {
      component: Typography,
      props: {
          variant: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: {
        variant: 'h2',
      },
    },
    h3: {
      component: Typography,
      props: {
        variant: 'h3',
      },
    },
    h4: {
      component: Typography,
      props: {
        variant: 'h4',
      },
    },
    h5: {
      component: Typography,
      props: {
        variant: 'h5',
      },
    },
    a: {
      component: 'a',
      props: {
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'text-blue-500 hover:text-blue-700 underline transition duration-200 ease-in-out',
      },
    },
    ul: {
      component: 'ul',
      props: {
        className: 'list-disc',
        start: 1,
      },
    },
  },
}

export default markdownOptions;