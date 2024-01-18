import { Box, Paper, Grid, Stack, Link, Typography } from "@mui/material";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CheckIcon from "@mui/icons-material/Check";
import AndroidIcon from "@mui/icons-material/Android";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const Footer = () => {
  return (
    <Box
      component={Paper}
      square
      elevation={0}
      sx={{ height: "20px", color: "white" }}
      display="flex"
    >
      <Grid container>
        <Grid
          item
          sx={{
            width: "35px",
            backgroundColor: "#2E8461",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#329171",
            },
          }}
          display="flex"
        >
          <SettingsEthernetIcon style={{ fontSize: "1rem" }} />
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "#3279CB", width: "200px" }}
          display="flex"
        >
          <Box
            component={Link}
            href="https://github.com/gurashish1000-coder"
            underline="none"
            color="white"
            target="_blank"
            display="flex"
            sx={{
              px: 0.5,
              pl: 1,
              justifyContent: "center",
              alignItems: "center",
              // cursor: "pointer",
              "&:hover": {
                background: "#1f8ad2",
              },
            }}
          >
            <AccountTreeIcon style={{ fontSize: "1rem" }} />
            <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem" }}>
              main
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          sx={{ backgroundColor: "#3279CB", minWidth: `calc(100% - 235px)` }}
          display="flex"
          justifyContent="flex-end"
        >
          <Box display="flex" justifyContent="flex-end">
            <Stack
              justifyContent="end"
              direction="row"
              spacing={0.8}
              sx={{ pr: 1.5 }}
            >
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <AndroidIcon style={{ fontSize: "1rem" }} />
              </Box>

              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <CheckIcon style={{ fontSize: "1rem" }} />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem" }}>
                  Spell
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <CheckIcon style={{ fontSize: "1rem" }} />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem" }}>
                  Prettier
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#1f8ad2",
                  },
                }}
              >
                <NotificationsNoneIcon style={{ fontSize: "1rem" }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
