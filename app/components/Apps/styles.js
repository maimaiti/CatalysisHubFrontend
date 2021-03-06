export const styles = (theme) => ({
  AppWrapper: {
    maxWidth: 'calc(1200px + 16px * 2)',
    margin: '20 auto',
    marginTop: '40px',
    display: 'flex',
    minHeight: '100%',
    padding: '0 0px',
    flexDirection: 'column',
    textDecoration: 'none',
    position: 'block',
  },
  appHint: {
    fontSize: 12,
    textAlign: 'left',
  },
  appsPaper: {
    padding: 10,
    paddingTop: 5,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    cornerRadius: 40,
  },
  browse: {
    backgroundColor: theme.palette.sky[400],
  },
  analyze: {
    backgroundColor: theme.palette.cardinalred[400],
  },
  create: {
    backgroundColor: theme.palette.poppy[400],
  },
  contribute: {
    backgroundColor: theme.palette.mint[400],
  },
  appPaper: {
    padding: 10,
    paddingTop: 5,
    minWidth: 280,
    maxWidth: 300,
    textAlign: 'left',
    backgroundColor: '#eeeeee',
    cornerRadius: 40,
    '&:hover': {
      backgroundColor: theme.palette.sandhill[300],
    },
  },
});
