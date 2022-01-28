import {
    Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles,
    Grid,
  } from "@material-ui/core";
  import { Link, useLocation } from "react-router-dom";
  
  import { categories } from "../../constants/data";
  
  const useStyle = makeStyles({
    table: {
      border: "1px 1px 1px 1px solid black",
      // padding: "20px",
      borderRadius: 10,
      background: "aqua",
      position: "sticky",
      top: 10,
    },
    write: {
      margin: 20,
      width: "85%",
      background: "#adedf0",
      color: "black",
      textDecoration: "none",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        background: "#7ee5fc",
      },
    },
  });
  
  const Categories = ({ match }) => {
    const classes = useStyle();
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    return (
      <>
        <Link
          to={`/create/${location.search}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" className={classes.write}>
            Write an article!
          </Button>
        </Link>
  
        <Table className={classes.table}>
          <TableHead>
            <TableCell>
              <Link to={"/"} className={classes.link}>
                All Categories
              </Link>
            </TableCell>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow>
                <TableCell style={{ padding: "15px" }}>
                  <Link to={`/?category=${category}`} className={classes.link}>
                    {category}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  };
  
  export default Categories;
  