import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Paper, Divider, List, ListItem, ListItemButton, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material"; // Added missing components
import { Edit, Delete } from "@mui/icons-material"; // Added missing icons
import { Email as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material"; // For Email and Phone icons
import { Discount as DiscountIcon, LocalOffer as LocalOfferIcon, LocalShipping as LocalShippingIcon, NewReleases as NewReleasesIcon, AddShoppingCart as AddShoppingCartIcon, NotificationImportant as NotificationImportantIcon } from "@mui/icons-material";

const MyProfilePage = () => {
  // State to track the selected menu option
    const [selectedOption, setSelectedOption] = useState("My Orders");
    const [address, setAddress] = useState(""); // To store the address input
const [addressSubmitted, setAddressSubmitted] = useState(false); // To show a success message after submission
const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "Visa", last4: "1234" },
    { id: 2, type: "MasterCard", last4: "5678" },
  ]);
  const [newPaymentMethod, setNewPaymentMethod] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedPayment, setEditedPayment] = useState(null);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., API call)
    alert("Form submitted!");
    };
    
    const handleSubmitAddress = (e) => {
  e.preventDefault();
  // Logic for saving the address (you can integrate this with your backend or context)
  setAddressSubmitted(true);
  setAddress(""); // Clear the input after submission
};

    // Handle edit payment method
  const handleEditPaymentMethod = (payment) => {
    setEditMode(true);
    setEditedPayment(payment);
  };

  // Handle remove payment method
  const handleRemovePaymentMethod = (id) => {
    setPaymentMethods(paymentMethods.filter((payment) => payment.id !== id));
  };

  // Handle cancel edit mode
  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedPayment(null);
  };

     // Handle add new payment method
  const handleAddPaymentMethod = () => {
    if (newPaymentMethod) {
      const newPayment = {
        id: paymentMethods.length + 1,
        type: newPaymentMethod,
        last4: "****", // You can implement logic to show only the last 4 digits
      };
      setPaymentMethods([...paymentMethods, newPayment]);
      setNewPaymentMethod("");
    }
    };
    
    function getOfferColor(type) {
    switch (type) {
      case "discount":
        return "#FF5733"; // Red-orange for discount
      case "sale":
        return "#FFC300"; // Yellow for sale
      case "shipping":
        return "#4CAF50"; // Green for free shipping
      case "new-arrival":
        return "#2196F3"; // Blue for new arrivals
      case "bogo":
        return "#9C27B0"; // Purple for buy-one-get-one
      default:
        return "#E0E0E0"; // Grey as fallback
    }
  }

  function getOfferIcon(type) {
    switch (type) {
      case "discount":
        return <DiscountIcon sx={{ fontSize: "30px", color: "#fff" }} />;
      case "sale":
        return <LocalOfferIcon sx={{ fontSize: "30px", color: "#fff" }} />;
      case "shipping":
        return <LocalShippingIcon sx={{ fontSize: "30px", color: "#fff" }} />;
      case "new-arrival":
        return <NewReleasesIcon sx={{ fontSize: "30px", color: "#fff" }} />;
      case "bogo":
        return <AddShoppingCartIcon sx={{ fontSize: "30px", color: "#fff" }} />;
      default:
        return <NotificationImportantIcon sx={{ fontSize: "30px", color: "#fff" }} />;
    }
  }

  // Menu options
  const menuOptions = [
    "My Orders",
    "Wishlist",
    "Payment Methods",
    "Order Tracking",
    "Notifications",
    "Contact Us",
    "My Addresses",
  ];

  // Function to render content based on selected menu
  const renderContent = () => {
    switch (selectedOption) {
      case "My Orders":
        return <Typography>Here are all your orders.</Typography>;
      case "Wishlist":
        return <Typography>Here are the items in your wishlist.</Typography>;
      case "Payment Methods":
        return (
    <Box sx={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Paper to contain the UI */}
      <Paper elevation={3} sx={{ padding: "20px", width: "100%", maxWidth: "600px" }}>

        {/* Add or Edit Payment Method */}
        <Box sx={{ marginBottom: "20px" }}>
          {editMode ? (
            <>
              <TextField
                label="Edit Payment Type"
                variant="outlined"
                value={editedPayment.type}
                onChange={(e) => setEditedPayment({ ...editedPayment, type: e.target.value })}
                fullWidth
                sx={{ marginBottom: "10px" }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary" onClick={() => setPaymentMethods(paymentMethods.map((method) => method.id === editedPayment.id ? editedPayment : method))}>
                  Save Changes
                </Button>
                <Button variant="outlined" onClick={handleCancelEdit}>Cancel</Button>
              </Box>
            </>
          ) : (
            <>
              <TextField
                label="Add New Payment Method"
                variant="outlined"
                value={newPaymentMethod}
                onChange={(e) => setNewPaymentMethod(e.target.value)}
                fullWidth
                sx={{ marginBottom: "20px" }}
              />
              <Button variant="contained" color="primary" onClick={handleAddPaymentMethod} sx={{ width: "100%" }}>
                Add Payment Method
              </Button>
            </>
          )}
        </Box>

        {/* Payment Methods List */}
        <List>
          {paymentMethods.map((payment) => (
            <ListItem key={payment.id} sx={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}>
              <ListItemText primary={payment.type} secondary={`**** ${payment.last4}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" color="primary" onClick={() => handleEditPaymentMethod(payment)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" color="error" onClick={() => handleRemovePaymentMethod(payment.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
      case "Order Tracking":
        return <Typography>Track your ongoing orders here.</Typography>;
      case "Notifications":
        return (
    <Box>
      <Typography variant="h6" sx={{ marginBottom: "20px", color: "#333" }}>
        Latest Notifications & Offers
      </Typography>

      <List>
        {[
          { text: "Get 20% off on your next purchase! Use code 'SHOP20'", type: "discount" },
          { text: "Flash Sale: Up to 50% off on selected items!", type: "sale" },
          { text: "Free shipping on all orders above Rs.500.", type: "shipping" },
          { text: "New arrivals in electronics! Check them out now.", type: "new-arrival" },
          { text: "Exclusive offer: Buy 1, get 1 free on all accessories!", type: "bogo" },
        ].map((offer, index) => (
          <ListItem key={index} sx={{ paddingLeft: "0", paddingRight: "0" }}>
            <ListItemButton
              sx={{
                backgroundColor: getOfferColor(offer.type), // Dynamic background color based on the offer type
                borderRadius: "8px",
                marginBottom: "10px",
                '&:hover': {
                  backgroundColor: `${getOfferColor(offer.type)}90`, // Slightly darker on hover
                },
                padding: "15px",
                display: "flex",
                alignItems: "center",
                boxShadow: 2, // Optional box shadow for a raised effect
              }}
            >
              <Box sx={{ marginRight: "10px" }}>
                {getOfferIcon(offer.type)} {/* Use icon directly */}
              </Box>
              <ListItemText
                primary={offer.text}
                primaryTypographyProps={{
                  style: { fontWeight: "bold", color: "#fff" },
                }}
                secondary={`Offer valid for a limited time only.`}
                secondaryTypographyProps={{
                  style: { color: "#fff", fontStyle: "italic" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Optional: Add a "See more" button to load more notifications */}
      <Button variant="contained" color="primary" sx={{ marginTop: "15px" }}>
        See more notifications
      </Button>
    </Box>
  );
      case "Contact Us":
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "#f4f6f8", padding: 3 }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                width: { xs: "90%", sm: "60%", md: "50%" },
                borderRadius: 2,
                backgroundColor: "#ffffff",
              }}
            >
              <Typography variant="body1" align="center" sx={{ marginBottom: 3 }}>
                We’d love to hear from you! Please reach out with any questions or feedback.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                {/* Name Input */}
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{ marginBottom: 2 }}
                  required
                />

                {/* Email Input */}
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{ marginBottom: 2 }}
                  required
                />

                {/* Message Input */}
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{ marginBottom: 2 }}
                  multiline
                  rows={4}
                  required
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                >
                  Send Message
                </Button>
              </Box>


              {/* Contact Information */}
              <Typography variant="h6" align="center" gutterBottom>
                Or reach us via:
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<EmailIcon />}
                    href="mailto:contact@company.com"
                    fullWidth
                    sx={{ maxWidth: "200px" }}
                  >
                    Email Us
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<PhoneIcon />}
                    href="tel:+123456789"
                    fullWidth
                    sx={{ maxWidth: "200px" }}
                  >
                    Call Us
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
      case "My Addresses":
        return (
        <Box>
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Add or Update Your Address
          </Typography>
          <form onSubmit={handleSubmitAddress} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <TextField
              label="Enter Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Submit Address
            </Button>
          </form>
          {addressSubmitted && (
            <Typography variant="body1" color="green" sx={{ marginTop: "10px" }}>
              Address submitted successfully!
            </Typography>
          )}
        </Box>
      );
      default:
        return <Typography>Select a menu option to view details.</Typography>;
    }
  };

  return (
    <Box display="flex">
      {/* Sidebar Menu */}
      <Box
        sx={{
          width: "250px", // Fixed width for the sidebar
          borderRight: "1px solid #ddd",
          paddingRight: "20px",
          paddingLeft: "20px",
          position: "fixed", // Sidebar is fixed
          left: 0, // Align to the left
          overflowY: "auto", // Make sidebar scrollable if necessary
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          My Profile
        </Typography>
        <List>
          {menuOptions.map((option, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton
                onClick={() => setSelectedOption(option)}
                selected={selectedOption === option}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#f0f0f0",
                    fontWeight: "bold",
                  },
                }}
              >
                <ListItemText primary={option} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content Area */}
      <Box
        flex={1}
        sx={{
          marginLeft: "20%", // Make space for the sidebar
          padding: "20px", // Padding for content
          overflowY: "auto", // Scroll content area independently
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          {selectedOption}
        </Typography>
        <Box>{renderContent()}</Box>
      </Box>
    </Box>
  );
};

export default MyProfilePage;
