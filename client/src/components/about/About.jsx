
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://r2.community.samsung.com/t5/image/serverpage/image-id/763058iA58E95820D3B3562/image-size/large?v=v2&px=999'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Write.It</Typography>
                <Typography variant="h5" className={classes.text}>Write.It is a website for blogging. Unlike 
                other simple blogging websites it allow users to write their own blogs and also 
                read others blogs.<br />
                    This project is done by,<br/>
                    Umair Ghaffar (SP19-BCS-035)<br/>
                    Shoaib (SP19-BCS-023)<br/>
                    Saad Shahid (SP19-BCS-026)
                   
                </Typography>
                <Typography variant="h5" className={classes.text}>
                     Feel free to send us an Email 
                        <Link target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Typography>
            </Box>
        </Box>
    )
}

export default About;