import React, { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { addToCart, setProductDetails } = useCart(); // Get the addToCart and setProductDetails functions

  const products = [
  {
    id: 1,
    title: "Apple iPhone 13",
    price: 799,
    image: "https://via.placeholder.com/150?text=iPhone+13",
    description: "Apple iPhone 13 with 128GB storage, A15 Bionic chip, and a 6.1-inch display."
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    price: 699,
    image: "https://via.placeholder.com/150?text=Samsung+Galaxy+S21",
    description: "Samsung Galaxy S21 with 128GB storage, Exynos 2100 processor, and a 6.2-inch display."
  },
  {
    id: 3,
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: 349,
    image: "https://via.placeholder.com/150?text=Sony+WH-1000XM4",
    description: "Noise-canceling over-ear headphones with long battery life and superior sound quality."
  },
  {
    id: 4,
    title: "Nike Air Max 270",
    price: 150,
    image: "https://via.placeholder.com/150?text=Nike+Air+Max+270",
    description: "Stylish running shoes with Air Max cushioning and breathable mesh upper for comfort."
  },
  {
    id: 5,
    title: "Dell XPS 13 Laptop",
    price: 999,
    image: "https://via.placeholder.com/150?text=Dell+XPS+13",
    description: "13-inch laptop with Intel Core i7 processor, 16GB RAM, and 512GB SSD."
  },
  {
    id: 6,
    title: "Apple Watch Series 7",
    price: 399,
    image: "https://via.placeholder.com/150?text=Apple+Watch+Series+7",
    description: "Smartwatch with a larger display, enhanced durability, and new health features."
  },
  {
    id: 7,
    title: "Canon EOS 90D DSLR Camera",
    price: 1299,
    image: "https://via.placeholder.com/150?text=Canon+EOS+90D",
    description: "High-performance DSLR camera with 32.5MP, 4K video, and fast autofocus."
  },
  {
    id: 8,
    title: "Bose SoundLink Revolve+ Bluetooth Speaker",
    price: 349,
    image: "https://via.placeholder.com/150?text=Bose+SoundLink+Revolve+",
    description: "360-degree sound, water-resistant design, and long-lasting battery."
  },
  {
    id: 9,
    title: "Fitbit Charge 5 Fitness Tracker",
    price: 179,
    image: "https://via.placeholder.com/150?text=Fitbit+Charge+5",
    description: "Fitness tracker with built-in GPS, heart rate monitoring, and sleep tracking."
  },
  {
    id: 10,
    title: "Sony PlayStation 5 Console",
    price: 499,
    image: "https://via.placeholder.com/150?text=PS5",
    description: "Next-generation gaming console with 4K gaming, ultra-fast load times, and DualSense controller."
  }
];


  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleViewDetails = (product) => {
    setProductDetails(product); // Set product in context
    navigate(`/product/${product.id}`); // Navigate to ProductDetailsPage
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "1%" }}>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "50%" }}
        />
      </Box>

      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                borderRadius: "10px",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.title}
                sx={{
                  objectFit: "contain",
                  backgroundColor: "#f9f9f9",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "10px" }}>
                  {product.title}
                </Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Rs. {product.price}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{ textTransform: "none", fontSize: "0.875rem" }}
                    onClick={() => handleViewDetails(product)} // Pass product to view details
                  >
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ textTransform: "none", fontSize: "0.875rem" }}
                    onClick={() => handleAddToCart(product)} // Add to cart
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
