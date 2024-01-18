import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const Experience = () => {
  const bulletIcon = (
    <CircleIcon style={{ fontSize: "10px", color: "#3279CB" }} />
  );

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        marginTop: 5,
        padding: 5,
        // "@media (max-width:400px)": {
        //   // Adjusts padding for screens wider than 600px
        //   paddingX: 3,
        // },
      }}
    >
      {/* Shoelace Learning Experience */}
      <Typography variant="h6" style={{ color: "#CE9178" }}>
        {" "}
        Shoelace Learning (builders of Dreamscape) | Full Stack Developer
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#3279CB" }}>
        {" "}
        April 2021 – September 2022
      </Typography>
      <List>
        {[
          "Led a comprehensive overhaul of the front-end platform by implementing new features and components within the core product dashboard, directly resulting in an enhanced user experience and a significant boost in teacher subscriptions and sign-ups.",
          "Led the implementation of critical backend logic and middleware enhancements to the company’s Node.js infrastructure. Expertly integrated new API endpoints, guaranteeing a seamless integration of additional features to the front-end platform.",
          "Refactored legacy React.js, Electron, and Node.js code, leading the migration of internal core company applications to Typescript. These efforts significantly improved performance and decreased development time.",
          "Resolved bugs and critical issues across the entire software stack, including front-end, middleware, and back-end code, ensuring seamless system operations and an optimal user experience.",
          "Integrated Mixpanel to the front-end and back end of the core company applications to implement event tracking to enhance data analytics capabilities for better decision making.",
        ].map((item) => (
          <ListItem key={item}>
            <ListItemIcon>{bulletIcon}</ListItemIcon>
            <Typography variant="body2" color="#bdc3cf">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>

      {/* BrainBox Experience */}
      <Typography variant="h6" style={{ color: "#CE9178" }}>
        {" "}
        BrainBox | Frontend Developer
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#3279CB" }}>
        {" "}
        May 2020 – October 2020
      </Typography>
      <List>
        {[
          "Led the transformation of the company’s core product with a mobile-first design approach, involving the creation of new mobile-friendly components and a comprehensive UI overhaul using React.",
          "Developed and implemented Python scripts and SQL queries to extract data from the database, providing valuable insights to improve decision-making processes.",
          "Actively Resolved errors and anomalies throughout the web application, resulting in a smoother user experience.",
          "Enhanced team efficiency by creating and maintaining detailed documentation for front-end code and processes.",
          "Implemented front-end testing strategies using Cypress.io, ensuring the reliability and functionality of critical user-facing features.",
        ].map((item) => (
          <ListItem key={item}>
            <ListItemIcon>{bulletIcon}</ListItemIcon>
            <Typography variant="body2" color="#bdc3cf">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
