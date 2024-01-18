import { Box, Avatar, Typography, Stack, Link, Tooltip } from "@mui/material";
import profile from "../assets/profile.png";
import { links } from "../components/Data";

export const About = () => {
  return (
    <Box textAlign={"center"} padding={10}>
      <Avatar
        src={"/profile.png"}
        sx={{
          width: 300,
          height: 300,
          margin: "auto",
        }}
      />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#CE9178" }}
      >
        Gurashish Arneja
      </Typography>
      {/* description */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: "100%", marginBottom: 2 }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            maxWidth: 400,
            textAlign: "center",
            color: "#bdc3cf",
          }}
        >
          Hello, I'm Gurashish Arneja, a University of Toronto grad turned
          full-stack wizard. Peek into my portfolio to see where code meets
          creativity and coffee spills turn into code!
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="center" spacing={2}>
        {links.map((link) => (
          <Tooltip title={link.title} arrow placement="bottom" key={link.index}>
            <Link
              aria-label={link.title}
              href={link.href}
              target="_blank"
              color="inherit"
              sx={{
                color: "#bdc3cf",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              {link.icon}
            </Link>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};
