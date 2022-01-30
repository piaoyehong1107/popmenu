import React, { useState } from "react";
import { Button, TextField, Grid } from "@material-ui/core";

function EditForm({ item, editMenu }) {
  const [changed, setChanged] = useState(item);
  const handleInputChange = (e) => {
    setChanged({
      ...changed,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="title"
          name="title"
          type="title"
          fullWidth
          value={changed.title}
          autoComplete="current-title"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="desc"
          name="desc"
          type="desc"
          fullWidth
          value={changed.desc}
          autoComplete="current-desc"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="price"
          name="price"
          type="price"
          fullWidth
          value={changed.price}
          autoComplete="current-price"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="img"
          name="img"
          fullWidth
          value={changed.img}
          autoComplete="current-img"
          variant="outlined"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editMenu(changed)}
        >
          OK
        </Button>
      </Grid>
    </Grid>
  );
}
export default EditForm;
