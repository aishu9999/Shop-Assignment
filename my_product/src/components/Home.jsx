import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Home = () => {
    var [user, setUser]=useState([])
  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
    .then((res)=>setUser(res.data))
    .catch((err) => console.log(err));
    },[]);
  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
                {
                    user.map((val) => {
                        return (
                            <Grid size={2}>
                                <Card sx={{ maxWidth: 345, height:'100%' }}>
                                    <CardMedia
                                        sx={{ height: 175 }}
                                        image={val.image}
                                        title={val.item}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="body" component="div">
                                            {val.title}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            category: {val.category}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="div">
                                            {val.price}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                    })
                }


            </Grid>

    </div>
  )
}

export default Home