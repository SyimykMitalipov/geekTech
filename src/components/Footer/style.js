import { makeStyles } from "@mui/styles";
import { theme } from "../../themes";



export const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#0D0D0D',
        textAlign: 'center',
        
        height: '200px'
    },
    container: {
        maxWidth: '1110px',
        margin: '0 auto',
    

    },  
    footerLinks: {
        width: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        // border: '1px solid red',
        textTransform: 'uppercase',
        marginBottom: '50px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer'

    },
    footerLine: {
        border: '1px solid white'
    },
    footerLogo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'

    },
    logoBlock: {
        width: '100px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: theme.palette.primary.main,
        '& p': {
            paddingTop: '20px'
        }
    }

}))