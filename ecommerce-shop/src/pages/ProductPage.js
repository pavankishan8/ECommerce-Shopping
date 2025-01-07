import React from "react";
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material"; // Make sure this is correctly imported

const ProductPage = () => {
  const product = {
    id: 1,
    name: "Product 1",
    description: "This is a great product. Buy it now!",
    price: "$100",
    image: "https://via.placeholder.com/300",
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img src={product.image} alt={product.name} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h5" color="secondary" sx={{ marginY: "10px" }}>
            {product.price}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            {product.description}
          </Typography>
          
          <TextField
            label="Quantity"
            type="number"
            defaultValue={1}
            InputProps={{ inputProps: { min: 1 } }}
            sx={{ width: "80px", marginRight: "10px" }}
          />

          {/* Wishlist button (heart icon) */}
          <IconButton color="secondary" sx={{ marginRight: "10px" }}>
            <Favorite sx={{ fontSize: 30 }} /> {/* Explicit size added here */}
          </IconButton>

          <Button variant="contained" color="primary" size="large">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
