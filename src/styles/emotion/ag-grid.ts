import { makeStyles } from '@mui/styles';

const AgGridStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    flexBasis: '100%',
  },
  dialogRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '700px',
  },
  dialogForm: {
    width: '600px',
  },
  dialogFormLg: {
    width: '100%',
  },
  agGrid: {
    flex: 1,
    width: '100%',
    paddingTop: '0',
  },
  agGridContainer: {
    height: 'calc(95vh - 350px)',
    minHeight: '450px',
  },
  halfGrid: {
    flex: 1,
    width: '50%',
    paddingTop: '1rem',
    height: '90vh',
  },
  gridBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 0,
    marginTop: '0',
    padding: '0.5rem',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginLeft: '0.25rem !important',
    '&:first-child': {
      marginLeft: 0,
    },
  },
  leftButton: {
    float: 'left',
  },
  rightButton: {
    float: 'right',
  },
  tabMenu: {
    marginLeft: '0.35rem',
    '&:first-child': {
      marginLeft: 0,
    },
  },
  dataSummary: {
    color: '#D02804',
  },
  dashboardBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  height: {
    height: '1000px',
  },
  errorMassage: {
    color: 'red',
  },
  dropzoneFrame: {
    width: '100%',
    height: '100%',
    border: '1px dotted #f50000',
  },
  flexboxCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customModal: {
    height: '500px',
  },
}));

export default AgGridStyle;
