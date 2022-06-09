import { makeStyles } from "@mui/styles";
import { theme } from "../../themes";

export const useStyles = makeStyles((theme) => ({
       profileMain: {
               width: '100%',
               height: '100vh',
               backgroundColor: '#0D0D0D',
               display: 'flex',
               justifyContent: 'space-around',
               alignItems: 'center'

       },
       logo: {
        width: '25%',
        height: '300px',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        '& img': {
        cursor: 'pointer',

        }

       },
       changePh: {
               width: '180px',
               height: '30px',
               background: 'rgba(255, 255, 255, 0.5)', 
                color: '#000000',
                opacity: '0.5',
                fontSize: '14px',
                position: 'absolute',
                right: '0',
                marginRight: '30px',
                bottom: 0,
                marginBottom: '55px',
        
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center' ,
                paddingLeft: '50px', 
                cursor: 'pointer',


                '& p': {
                    '& img': {
                        paddingTop: '10px',
        cursor: 'pointer',

                    }    
                },
       },
       aboutUser: {
                width: '50%',
                // border: '1px solid red',
                height: '150px'
       },
       name: {
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               width: '100%',
               height:'50%',
        //        border: '1px solid red',
       },
       role: {
               display: "flex",
               justifyContent: 'space-around',
               alignItems: 'center',
               color: '#ffffff',
               width: '150px'
       },
       student: {
               color: '#ffffff',
               marginRight: '50px'
       },
       direction: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height:'50%',
        // border: '1px solid red',  
       },
       direct: {
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#ffffff',
        width: '200px',
        // paddingLeft: '20px'
       },
       directName: {
        color: '#ffffff',
        marginRight: '50px'
       }





}))