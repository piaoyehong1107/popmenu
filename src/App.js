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
    title: "Fried pork and vegetables",
    price: "15.99",
    img: "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?s=612x612",
    desc: `Fried pork,salad,egg`,
  },
  {
    id: 2,
    title: "Vegan Spinach Pasta",
    price: "12.99",
    img: "https://media.istockphoto.com/photos/vegan-glutenfree-creamy-spinach-pasta-picture-id1182467837?s=612x612",
    desc: `Spinach pasta, Gluten-Free, Vegan cheese`,
  },
  {
    id: 3,
    title: "Fried chicken",
    price: "15.99",
    img: "https://media.istockphoto.com/photos/fried-chicken-picture-id524035688?s=612x612",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 4,
    title: "Pork and rice dish",
    price: "18.99",
    img: "https://media.istockphoto.com/photos/pork-and-rice-dish-picture-id153561754?s=612x612",
    desc: `Frided port, serverd with white rice and red pepper`,
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const confirmationStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [menuItems, setMenuItems] = useState(initialData);

  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [editItemId, setEditItemId] = React.useState("");
  const [openDelete, setOpenDelete] = React.useState(false);
  const [deleteItemId, setDeleteItemId] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addMenu = (newMenu) => {
    let nextIndex = 0;
    if (menuItems.length) {
      nextIndex = menuItems.length - 1;
    }
    if (nextIndex === 0) {
      menuItems.push(newMenu);
    } else {
      const lastMenu = menuItems[nextIndex];
      menuItems.push({ ...newMenu, id: lastMenu.id + 1 });
    }
    handleClose();
  };
  const removeMenu = (deleteItemId) => {
    const newMenuItems = menuItems.filter((item) => item.id !== deleteItemId);
    setMenuItems(newMenuItems);
    handleDeleteClose();
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
  const openDeleteCheck = () => {
    setOpenDelete(true);
  };

  const handleEditClose = () => setOpenEdit(false);
  const editItem = menuItems.find((item) => item?.id === editItemId);
  const handleDeleteClose = () => setOpenDelete(false);
  const backToMain = () => {
    handleDeleteClose();
  };

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
        <Modal
          open={openDelete}
          onClose={handleDeleteClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={confirmationStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => removeMenu(deleteItemId)}
              style={{ marginRight: "8px" }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => backToMain()}
            >
              Cancel
            </Button>
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
                        onClick={() => {
                          setDeleteItemId(item.id);
                          openDeleteCheck();
                        }}
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
