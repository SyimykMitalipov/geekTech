import { makeStyles } from "@mui/styles";
import { theme } from "../../themes";
import back from '../../assets/table.png'
export const useStyles = makeStyles((theme) => ({
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
    mainTxt: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        '& h1': {
            color: '#ffffff'
        }
    },
    tableLessons: {
        backgroundColor: '#0D0D0D',
        paddingBottom: '100px'
        // border: '1px solid red',
    },
    tableDes: {
        width: '100%',
        // height: '100px',
        paddingTop: '80px',
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        marginBottom: '50px',
        // border: '1px solid r
        

    },
    lessons: {
        width: '270px',
        height: '70px',
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        marginTop: '50px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }, 
    themes: {
        width: '900px',
        height: '70px',
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        marginTop: '50px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tableNum: {
        backgroundColor: theme.palette.secondary.main,
        width: '270px',
        height: '70px',
        // marginTop: '20px',
        color: '#ffffff',
        fontSize: '18px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tableRes: {
        width: '100%',
        // height: '100px',
        // paddingTop: '80px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '10px',
    },
    tableText: {
        backgroundColor: 'grey',
        width: '900px',
        height: '70px',
        color: 'white',
        // marginTop: '50px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        // border: '1px solid red',

    }

}))