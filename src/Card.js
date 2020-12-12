// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// function Card(props) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default Card


import './Card.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';


const useStyles = makeStyles({
      root: {
        maxWidth: 200,
      },
      media: {
        height: 140,
      },
    });

function Cards(prop) {
    const classes = useStyles();
    return (
        <div className="cards">
            <div className="book_info">
                <h3><strong>Title : </strong>{prop.title}</h3>
                <hr></hr>
                <h4><strong>Price : </strong>{prop.price}</h4>
                <h4><strong>Author : </strong>{prop.author}</h4>
                <h4><strong>ISBN : </strong>{prop.isbn}</h4>
            </div>
        </div>
        // <div className="cards">
        //     <Card className={classes.root}>
        //         <CardActionArea>
        //             <CardMedia
        //                 className={classes.media}
        //                 image={props.src}
        //                 title={props.title}
        //             />
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="h2">
        //                 {props.title}
        //                 </Typography>
        //                 <Typography variant="body2" color="textSecondary" component="p">
        //                 {props.price}
        //                 </Typography>
        //             </CardContent>
        //         </CardActionArea>
            
        //     </Card>
        // </div>
        
    )
}

export default Cards
