import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom'
import MenuForm from './MenuForm';
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import logo from "./logo.JPG";


function App() {
  let history = useHistory();
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: 'cakes',
      price: 15.99,
      img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'pancakes',
      price: 15.99,
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 3,
      title: 'pancakes',
      price: 15.99,
      img: 'https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?s=612x612',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 4,
      title: 'pancakes',
      price: 15.99,
      img: 'https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585?s=612x612',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
  ]);
  const addMenu = (newMenu) => {
    const lastMenu = menuItems[menuItems.length - 1]
    menuItems.push({  ...newMenu, id: lastMenu.id +1})
    // console.log(data)
    history.push('/');
  }

  return (
    <main>
      <div style={{ padding: '4rem' }}>
        <Typography variant="h6">Add a new menu</Typography>
        <MenuForm addMenu={addMenu}/>
        <div className="title">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h2>Popmenu</h2>
        </div>
        <div className="menu-list">
          <Grid container spacing={2}>
            {menuItems.map((item) => (
              <Grid item xs={12} sm={6} md={3}>
                 <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={item.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.desc}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
              {/* <img width="100%" src={item.img} alt={item.title}  />
              <div className="item-info">
                <header>
                  <h4>{item.title}</h4>
                  <h4 className="price">${item.price}</h4>
                  <h4>{item.desc}</h4>
                  {/* <button onClick={() => editItem(item)}>EDIT</button>
                  <button onClick={() => deleteItem(item)}>DELETE</button> */}
            </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </main>
  );
};



export default App;
