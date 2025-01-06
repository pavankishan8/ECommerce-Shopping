import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Navbar = () => {
  const { getCartCount } = useCart(); // Get the cart item count
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#232F3E", zIndex: 1300 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Shop
        </Typography>

        <IconButton color="inherit" sx={{ marginRight: "15px" }} onClick={() => navigate("/cart")}>
          <Badge badgeContent={getCartCount()} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        <IconButton color="inherit" onClick={handleMenuOpen} sx={{ display: "flex", alignItems: "center" }}>
          <AccountCircle />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ top: "50px", right: 0 }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
