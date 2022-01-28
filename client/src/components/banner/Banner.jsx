
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://media.gettyimages.com/photos/blue-green-texture-background-of-old-wooden-door-picture-id888395810?b=1&k=20&m=888395810&s=170667a&w=0&h=Lh6uAvenZ0NvknDUwJP6jc7X4dgXMbIeETupMtA2yPo='})`,
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 80,
            color: '#FFFFFF',
            
        },
        '& :last-child': {
            fontSize: 25,
            //background: '#FFFFFF',
            color:'white',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    
    return (
        <>
            <Box className={classes.image}>
                <Typography>Write.It</Typography>
                <Typography>Write and Learn something new!!</Typography>
            </Box>
        </>
    )
}

export default Banner;