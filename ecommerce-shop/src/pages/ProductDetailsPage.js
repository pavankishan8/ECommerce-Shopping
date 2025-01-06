import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Container, Button, Box, Grid } from "@mui/material";
import { useCart } from "../context/CartContext"; // Ensure you have setProductDetails here

const ProductDetailsPage = () => {
  const { selectedProduct, setProductDetails } = useCart(); // Get setProductDetails from context
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!selectedProduct) {
    return (
      <Typography variant="h6" textAlign="center">
        Product not found.
      </Typography>
    );
  }

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container>
      <Button
        variant="outlined"
        color="primary"
        sx={{ marginBottom: "20px" }}
        onClick={handleBackClick}
      >
        Back
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{ width: "80%", maxWidth: "400px", objectFit: "contain" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
              {selectedProduct.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginBottom: "25px" }}>
              {selectedProduct.description}
            </Typography>
            <Typography variant="h5" color="primary" sx={{ marginBottom: "25px", fontWeight: "bold" }}>
              Rs. {selectedProduct.price}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "12px 20px", fontSize: "16px", fontWeight: "bold", width: "100%" }}
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage;
