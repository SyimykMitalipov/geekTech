import { makeStyles } from "@mui/styles";
import { theme } from "../../themes";

export const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        position: 'fixed',
    },
    container: {
        maxWidth: '1110px',
        margin: '0 auto'
    },
    logo: {
        width: '20%',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& p': {
            paddingTop: '20px',
            color: theme.palette.primary.main,
            fontWeight: 'bold'
        }
    },
    headerBlocks: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerLinks: {
        width: '900px',
        marginLeft: '80px',
        paddingLeft: '30px',
        display: 'flex',
        float: 'right',
        justifyContent: 'space-between',
        gap: '20px',
        alignItems: 'center',
        paddingTop: '20px',
        textTransform: 'uppercase',
        fontSize: '18px',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        '& button': {
            // backgroundColor: theme.palette.secondary.main,
            width: '110px',
            height: '50px',
            color: 'white',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold'
        }
    },
    modalBox: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'column',
       paddingTop: '20px',
       '& h3': {
        color: '#ffffff',
        marginBottom: '15px'
       },
       '& button': {
        width: '300px',
        height: '70px',
        marginBottom: '20px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '10px',
        border: 'none',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '500ms',
        '&:hover': {
            width: '320px',
            height: '80px'
        },
    } 
}
    
}))