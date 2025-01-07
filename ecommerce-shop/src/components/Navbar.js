import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem, Box } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Navbar = () => {
  const { getCartCount } = useCart(); // Get the cart item count
  const { username, logout } = useAuth(); // Get the username from AuthContext
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => {
    navigate("/home"); // Redirect to the MyProfile page
  }}>
          E-Shopping
        </Typography>

        {/* Display Username */}
        {username && (
          <Typography
            variant="body1"
            sx={{ marginRight: "15px", display: "flex", alignItems: "center", fontWeight: "bold", color: "white" }}
          >
            Welcome, {username}
          </Typography>
        )}

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
          <MenuItem
  onClick={() => {
    handleMenuClose(); // Close the menu
    navigate("/myprofile"); // Redirect to the MyProfile page
  }}
>
  Profile
</MenuItem>
          <MenuItem
  onClick={() => {
    handleMenuClose(); // Close the menu
    logout(); // Call the logout function from AuthContext
    navigate("/login"); // Redirect to the login page
  }}
>
  Logout
</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
