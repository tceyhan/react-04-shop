import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

// import useStyles from './styles';

export default function CartItem({ahmet}) {

  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="resim yok bekleme"
        image={ahmet.image}
        className={classes.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {ahmet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ahmet.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ahmet.category}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}