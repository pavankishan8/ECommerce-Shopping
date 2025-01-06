import React from "react";
import { Container, Typography, Grid, Box, Button, Paper } from "@mui/material";
import { useCart } from "../context/CartContext"; // Import useCart hook
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const CartPage = () => {
  const { cartItems = [], clearCart } = useCart(); // Safeguard with default empty array
  const navigate = useNavigate(); // For navigation

  if (cartItems.length === 0) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h5" textAlign="center">
          Your cart is empty.
        </Typography>
      </Container>
    );
  }

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleClearCart = () => {
    clearCart(); // Clear the cart
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Your Cart
        </Typography>

        <Grid container spacing={3}>
          {cartItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Typography variant="h6" sx={{ marginTop: "15px" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "10px" }}>
                  Rs. {item.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" color="secondary" onClick={handleBack} sx={{ width: "150px" }}>
          Back
        </Button>
        <Button variant="contained" color="primary" size="large" sx={{ width: "150px" }}>
          Checkout
        </Button>
      </Paper>
    </Container>
  );
};

export default CartPage;
