import './App.css';
import SideNav from '../components/SideNav';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import BusinessIcon from '@material-ui/icons/Business';

const theme = createMuiTheme({
  //  can customize the theme here
palette: {
  primary: {
    main: "#333996",
    light: "#3c44b126"
  },
  secondary: {
    main: "#f83245",
    light: "#f8324526"
  },
  background : {
    default: '#f4f5fd'
  },
  shape: {
    borderRadius: '12px'
  }
}
})

const useStyles = makeStyles({
appMain: {
  paddingLeft: '320px',
  width: '100%'
}
})

function App() {
  const classes= useStyles();
  return (
 <ThemeProvider theme={theme}> 
    <SideNav />
    <div className={classes.appMain}>
        <Header />
        <PageHeader 
        title="Sample"
        subTitle="Sample"
        icon={<BusinessIcon />} fontSize="small" />
    </div>
     <CssBaseline />
  </ThemeProvider>
  );
}

export default App;
