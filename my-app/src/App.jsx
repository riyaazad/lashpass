import React from "react";
import { Container, Grid, Card, CardContent, Typography, CardMedia, Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

  
// Custom styles using styled
const Root = styled("div")({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#f1f8f6", 
});

const DrawerContainer = styled(Drawer)({
  width: 240,
  flexShrink: 0,
});

const Content = styled("main")({
  flexGrow: 1,
  padding: 16,
});

const ServiceCard = styled(Card)({
  maxWidth: 345,
  backgroundColor: "#d7ebd0 ",
  borderRadius: 10,
  margin: "16px",
});

const Media = styled(CardMedia)({
  height: 200,
  backgroundSize: "cover",
  borderRadius: "10px 10px 0 0",
});

const TypographyStyled = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
  fontFamily: "'Playfair Display', sans-serif !important",
});

const Price = styled(Typography)({
  fontSize: "1.1rem",
  color: "#607958",
});

const BookButton = styled(Button)({
    backgroundColor: "#607958",
    color: "white",
    fontSize: "0.9rem",
    marginTop: "5px",
    //marginTop: "10px",
    //marginLeft: "100px",
    "&:hover": {
      backgroundColor: "#4a5e40",
    },
  });

  const GalleryButton = styled(Button)({
    backgroundColor: "#607958",
    color: "white",
    fontSize: "0.9rem",
    marginTop: "5px",
    //marginTop: "10px",
    //marginLeft: "100px",
    "&:hover": {
      backgroundColor: "#4a5e40",
    },
  });

const services = [
  { name: "Lash Extension", location: "Vancouver", price: "$80", imageUrl: "https://skindamsel.com/wp-content/uploads/2023/07/Are-Lash-Extensions-at-Skin-Damsel-Aesthetics-in-Dallas-TX-Worth-It-scaled-1-1024x684.jpeg" },
  { name: "Brow Waxing", location: "West End", price: "$20", imageUrl: "https://images.squarespace-cdn.com/content/v1/5cf69c7fcac4970001bda903/1601677413558-L4495O598HU8FVA4DHJI/brow+shaping+2.jpg?format=1500w" },
  { name: "At-Home Haircut", location: "Kitsilano", price: "$50", imageUrl: "https://media.istockphoto.com/id/692999494/photo/hairdresser-cutting-some-hair-tips.jpg?s=612x612&w=0&k=20&c=5bC0fdICk914P5JWYDOi6N3CirJV4IBMTxYJh32vi8o=" },
  { name: "Acrylic nails", location: "Downtown", price: "$65", imageUrl: "https://images.fresha.com/locations/location-profile-images/1326919/2011409/91fae8b7-cc37-430d-8f13-e16a4c13fd44-MeliBeautyLounge-CA-BritishColumbia-Vancouver-EastVancouver-Fresha.jpg?class=width-small" },
  { name: "Facial Treatment", location: "Broadway", price: "$90", imageUrl: "https://s33929.pcdn.co/wp-content/uploads/sites/486/2021/08/Facial-Treatments.jpg" },
  { name: "Massage Therapy", location: "Yaletown", price: "$100", imageUrl: "https://www.granvillephysio.ca/uploads/3/1/0/6/31060771/massagetherapy-1-orig_orig.jpg" },
  { name: "Brow Lamination", location: "Mount Pleasant", price: "$65", imageUrl: "https://www.thelist.com/img/gallery/what-the-eyebrow-lamination-process-is-really-like/intro-1628267562.jpg" },
  { name: "Hair Coloring", location: "Vancouver", price: "$200+", imageUrl: "https://www.styleseat.com/blog/wp-content/uploads/2022/04/balayage-hair-salon-scaled-1.jpg" },
  { name: "Event Makeup", location: "Coal Harbour", price: "$150+", imageUrl: "https://images.squarespace-cdn.com/content/v1/5f09ee48afd11c21960e53fb/a138b70a-95b9-46e3-ad44-0c631e47d3e9/Wedding+Day+Bridal+Makeup" },
  { name: "Pedicure", location: "Gastown", price: "$45", imageUrl: "https://cosmeticclinic.net.au/wp-content/uploads/2024/11/reduced_image_smaller.jpg" },
  { name: "Hair Styling", location: "Kitsilano", price: "$45", imageUrl: "https://img.freepik.com/premium-photo/process-cutting-styling-women-hair-salon_133138-14.jpg" },
  { name: "Lash Lift", location: "Vancouver", price: "$55", imageUrl: "https://www.dreamlash.com.sg/wp-content/uploads/2021/01/Lash-lift-singapore.png" },
];

const App = () => {
  return (
    <Root>
      {/* Left Navigation Bar */}
      <DrawerContainer
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Bookings" />
          </ListItem>
        </List>
      </DrawerContainer>

      {/* Main Content */}
      <Content>
        <Container maxWidth="lg">
          <TypographyStyled variant="h4" gutterBottom style={{ fontFamily: "'Playfair Display', sans-serif", fontWeight: 600 }}>
            At-Home Beauty Services in Vancouver
          </TypographyStyled>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard>
                  <Media
                    image={service.imageUrl}
                    title={service.name}
                  />
                  <CardContent>
                    <Typography variant="h6" textAlign="center">
                      {service.name}
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                      Location: {service.location}
                    </Typography>
                    <Price variant="body2" textAlign="center">
                      {service.price}
                    </Price>
                    <div style={{ display: "flex", justifyContent: "space-evenly", align: "center", gap: "10px" }}>
                <BookButton variant="contained">Book Now</BookButton>
                <GalleryButton variant="contained">View Gallery</GalleryButton>
                     </div>
                   
                  </CardContent>

             
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Content>
    </Root>
  );
};

export default App;
