import { Box, Paper, Tooltip, Link, Divider } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { links } from "./Data";

export const Sidebar = ({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: Function;
}) => {
  return (
    <Box
      sx={{
        height: `calc(100vh - 20px)`,
        backgroundColor: "#333333",
      }}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      component={Paper}
      square
      elevation={0}
    >
      <Box
        sx={{ flexGrow: 0 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          sx={{
            borderLeft: expanded
              ? "solid 0.12em white"
              : "solid 0.12em #333333",
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Box
            sx={{
              flexGrow: 0,
              my: 1.5,
              color: expanded ? "white" : "#858585",
              fontSize: 24,
              outline: "none",
              "&:hover": {
                color: "white",
              },
            }}
            display="flex"
            justifyContent="center"
          >
            <FileCopyIcon />
          </Box>
        </Box>
        <Tooltip title="Source of this project" arrow placement="right">
          <Link
            target="_blank"
            href={"https://github.com/gurashish1000-coder/Portfolio"}
            underline="none"
            color="inherit"
            sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
          >
            <Box
              sx={{
                flexGrow: 0,
                cursor: "pointer",
                color: "#858585",
                fontSize: 24,
                "&:hover": {
                  color: "white",
                },
              }}
              display="flex"
              justifyContent="center"
            >
              <Box mt={0.7}>
                <SearchIcon />
              </Box>
            </Box>
          </Link>
        </Tooltip>

        <Divider sx={{ m: 0.5 }} />

        {links.map((link) => (
          <Tooltip title={link.title} arrow placement="right" key={link.index}>
            <Link
              target="_blank"
              href={link.href}
              underline="none"
              color="inherit"
              sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  m: 0.5,
                  color: "#858585",
                  fontSize: 24,
                  "&:hover": {
                    color: "white",
                  },
                  cursor: "pointer",
                }}
                display="flex"
                justifyContent="center"
              >
                <Box mt={0.7}>{link.icon}</Box>
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Box>

      <Box
        sx={{ flexGrow: 0, pb: 0.5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Tooltip title={"Profile"} placement="right" arrow>
          <Box
            sx={{
              flexGrow: 0,
              fontSize: 24,
              color: "#858585",
              cursor: "pointer",
              "&:hover": {
                color: "white",
              },
              WebkitTapHighlightColor: "rgba(0,0,0,0)",
            }}
            display="flex"
            justifyContent="center"
          >
            <Box>
              <PersonOutlineIcon />
            </Box>
          </Box>
        </Tooltip>
        <Tooltip title="Settings" arrow placement="right">
          <Box
            sx={{
              flexGrow: 0,
              fontSize: 24,
              color: "#858585",
              cursor: "pointer",
              "&:hover": {
                color: "white",
              },
              WebkitTapHighlightColor: "rgba(0,0,0,0)",
            }}
            display="flex"
            justifyContent="center"
          >
            <Box mt={0.7}>
              <SettingsIcon />
            </Box>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};
