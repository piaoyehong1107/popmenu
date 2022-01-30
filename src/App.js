import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import MenuForm from "./MenuForm";
import EditForm from "./EditForm";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./index.css";

const initialData = [
  {
    id: 1,
    title: "cakes",
    price: "15.99",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "pancakes",
    price: "15.99",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 3,
    title: "pancakes",
    price: "15.99",
    img: "https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?s=612x612",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 4,
    title: "pancakes",
    price: "15.99",
    img: "https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585?s=612x612",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  let history = useHistory();
  const [menuItems, setMenuItems] = useState(initialData);

  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editItemId, setEditItemId] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addMenu = (newMenu) => {
    const lastMenu = menuItems[menuItems.length - 1];
    menuItems.push({ ...newMenu, id: lastMenu.id + 1 });
    handleClose();
    history.push("/");
  };
  const removeMenu = (id) => {
    const newMenus = [...menuItems];
    newMenus.splice(id, 1);
    setMenuItems(newMenus);
  };
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleEditMenu = (changed) => {
    const newMenuItems = menuItems.map((item) => {
      if (item.id !== editItemId) return item;
      return changed;
    });
    setMenuItems(newMenuItems);
    handleEditClose();
  };

  const handleEditClose = () => setOpenEdit(false);
  const editItem = menuItems.find((item) => item?.id === editItemId);

  return (
    <main>
      <div className="container">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add New Menu
            </Typography>
            <MenuForm addMenu={addMenu} />
          </Box>
        </Modal>
        <Modal
          open={openEdit}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Menu
            </Typography>
            <EditForm item={editItem} editMenu={handleEditMenu} />
          </Box>
        </Modal>
        <div className="header">
          <Typography variant="h2">Popmenu</Typography>
        </div>
        <Button variant="contained" onClick={handleOpen}>
          {" "}
          New Menu{" "}
        </Button>
        <div className="menu-list">
          <Grid container spacing={2}>
            {menuItems
              .filter((item) => item)
              .map((item) => (
                <Grid item xs={12} sm={6} md={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia component="img" height="400" image={item.img} />
                    <CardContent className="card-content">
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
                    <CardActions className="card-action">
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          setEditItemId(item.id);
                          handleOpenEdit();
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => removeMenu(item)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default App;
