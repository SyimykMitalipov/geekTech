import { makeStyles } from '@mui/styles';
import { theme } from '../../themes';
import back from '../../assets/Ruslan.png'
export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1110px',
    margin: '0 auto',
    // border: '1px solid red',
  },
  mainPage: {
    width: '100%',
    height: '100vh',
    background: `url(${back})`,
    // backdropFilter: 'blur(20px)',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '& h1': {
      color: '#ffffff',
      textTransform: 'capitalize',
      marginBottom: '30px',
      fontSize: '56px',
    },
    '& h2': {
      color: '#ffffff',
      // width: '770px',
      textTransform: 'capitalize',
      fontSize: '42px',
    },
  },
  ourCourses: {
    textAlign: 'center',
    paddingTop: '50px',
    backgroundColor: '#0D0D0D',
    '& h2': {
      color: 'white',
      marginBottom: '30px',
    },
  },
  ourBlocks: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  blockItem: {
    width: '350px',
    height: '550px',
    background: 'rgba(0, 78, 163, 0.06)',
    border: '1px solid #FFFFFF',
    borderRadius: '15px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  blockItemImg: {
    // height: '50%',
    paddingBottom: '10px',
  },
  blockCourse: {
    background: theme.palette.primary.main,
    padding: '8px',
    color: 'white',
  },
  blockRange: {
    background: 'rgba(0, 78, 163, 0.12)',
    backdropFilter: 'blur(20px)',
    padding: '10px',
    color: 'white',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  courseForm: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D0D0D',
        height: '800px',
        '& container': {
        border: '1px solid white'

        }
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
      '& input': {
          backgroundColor: 'white',
          width: '600px',
          height: '70px',
          textAlign: 'center',
          borderRadius: '10px',
          marginBottom: '12px',
          border: 'none',
          fontSize: '20px',
          color: 'black',
          fontWeight: '700'
      },
      '& button': {
          width: '600px',
          height: '70px',
          backgroundColor: theme.palette.primary.main,
          borderRadius: '10px',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold'
      }
  },
  formContainer: {
    width: '1110px',
    height: '600px',
    margin: '0 auto',
    border: '1px solid white',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socials: {
    width: '100%',
    height: '200px',
    backgroundColor: '#0D0D0D',
    display: 'flex',
    justifyContent: 'center',

  },
  socNet: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '25px'
  }
}));
