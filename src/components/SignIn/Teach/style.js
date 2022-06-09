import { makeStyles } from "@mui/styles";
import { theme } from "../../../themes";

export const useStyles = makeStyles((theme) => ({
    courseForm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '80px',
        backgroundColor: '#0D0D0D',
          height: '800px',
          '& container': {
          border: '1px solid white'
  
          },
          
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
            fontWeight: '700',
            transition: '500ms',
            '&:focus':{
                width: '620px',
                height: '80px'
            }
        },
        '& button': {
            width: '600px',
            height: '70px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '10px',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '500ms',
            '&:hover': {
                width: '650px',
                height: '80px'
            },
           
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
      flexDirection: 'column',
      '& h1': {
        color: '#ffffff',
        marginBottom: '20px'
    }
    },
}))