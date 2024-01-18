import { Box, Grid, Typography } from "@mui/material";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import { technologies } from "../components/Data";

export const Skills = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", marginTop: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#CE9178",
        }}
      >
        <Typography variant="h5">
          // Few Technologies that I have been working with recently
        </Typography>
        <OutdoorGrillIcon fontSize="large" />
      </Box>
      <Grid container spacing={4} padding={5}>
        {technologies.map((tech, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box display="flex" alignItems="center" gap={1}>
              {tech.icon}
              <Typography variant="body1" color={"#bdc3cf"}>
                {tech.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
