
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
      border: "1px solid #d3cede",
      borderRadius: 10,
      margin: 20,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: 400,
      width: "85%",
      "& > *": {
        padding: "0px 0px 0px 0px",
      },
    },
    image: {
      width: "100%",
      objectFit: "cover",
      borderRadius: "10px 10px 0 0",
      height: 250,
    },
    textColor: {
      color: "blue",
      fontSize: 14,
    },
    heading: {
        padding: "5px",
        color: "red",
      fontSize: 18,
      fontWeight: 50,
    },
    detail: {
      fontSize: 16,
      wordBreak: "break-word",
    },
    author: {
    
      fontSize: 13,
      color: "Grey",
    },
  });
  
  const Post = ({ post }) => {
    const classes = useStyle();
    const url = post.picture
      ? post.picture
      : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  
    const addEllipsis = (str, limit) => {
      return str.length > limit ? str.substring(0, limit) + "..." : str;
    };
  
    return (
      <Box className={classes.container}>
        <img src={url} alt="post" className={classes.image} />
        <Typography className={classes.textColor}>{post.categories}</Typography>
        <Typography className={classes.heading}>{post.title}</Typography>
  
        <Typography className={classes.detail}>
          {addEllipsis(post.description, 150)}
          <Typography className={classes.author}> By: {post.username}</Typography>
        </Typography>
      </Box>
    );
  };
  
  export default Post;
  