import { makeStyles } from "@mui/styles";
import { theme } from "../../themes";
import back from '../../assets/table.png'

export const useStyles  = makeStyles((theme) => ({
        container: {
            maxWidth: '1310px',
            margin:'0 auto'
        },
        mainPage: {
           width: '100%',
           height: '100vh',
           background: `url(${back})`,
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           backgroundSize: 'cover',
        },
        mainText: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& h1': {
                color: '#ffffff',
                fontSize: '64px',
                fontWeight: 'bold'
            }

        },
        progressTab: {
            width: '100%',
            backgroundColor: '#0D0D0D',
            paddingTop: '80px',
            // marginBottom: '50px',
            paddingBottom: '80px'
        },
        tabDes: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '5px',
            marginBottom: '20px'

        },
        desList: {
            width: '270px',
            height: '70px',
            backgroundColor: theme.palette.secondary.main,
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '18px',
        },
        desListItem: {
            width: '10%',
            height: '70px',
            backgroundColor: theme.palette.secondary.main,
            fontSize: '18px',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            

        },
        tabList: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '5px',
            marginBottom: '20px'
        },
        tabName: {
            width: '270px',
            height: '70px',
            backgroundColor: theme.palette.secondary.main,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff'
        },
        tabLesson: {
            width: '10%',
            height: '70px',
            backgroundColor: 'grey',
            fontSize: '16px',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
}))