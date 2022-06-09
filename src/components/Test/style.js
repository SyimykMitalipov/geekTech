import { makeStyles } from "@mui/styles";
import back from '../../assets/table.png'
export const useStyles  = makeStyles((theme) => ({
        mainPage: {
            width: '100%',
        height: '100vh',
        background: `url(${back})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    container: {
        maxWidth: '1110px',
        margin: '0 auto'
    },
    mainText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        '& h1': {
            color: '#ffffff',
            fontSize: '64px'
        }
    },
    testPage: {
        width: '100%',
        backgroundColor: '#0D0D0D',
        paddingTop: '80px',
        paddingBottom: '100px',
       
    },
    testDes: {
        width: '1110px',
        backgroundColor: theme.palette.secondary.main,
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold',  
        marginBottom: '50px'
    },
    testList: {
        width: '100%',
        height: '70px',
        marginBottom: '5px',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    a : {
        textDecoration: 'none'
    }
}))