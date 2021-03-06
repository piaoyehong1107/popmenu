import React, { useState } from "react";
import { Button, TextField, Grid } from "@material-ui/core";

function MenuForm({ addMenu }) {
  const [newMenu, setNewMenu] = useState({
    id: -1,
    title: "",
    price: "",
    img: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    setNewMenu({
      ...newMenu,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="title"
          name="title"
          label="title"
          type="title"
          fullWidth
          autoComplete="current-title"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="desc"
          name="desc"
          label="desc"
          type="desc"
          fullWidth
          autoComplete="current-desc"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="price"
          name="price"
          label="price"
          type="price"
          fullWidth
          autoComplete="current-price"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="img"
          name="img"
          label="img"
          fullWidth
          autoComplete="current-img"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addMenu(newMenu)}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
export default MenuForm;
