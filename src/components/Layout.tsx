import { Grid, Stack, Typography } from "@mui/material";
import { FileTree } from "./FileTree";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export const Layout = ({ expanded, setExpanded, children }: any) => {
  return (
    <Grid container sx={{ overflow: "auto", overflowY: "hidden" }}>
      <Grid container sx={{ overflow: "auto" }}>
        {/* Sidebar and File Tree */}
        <Grid item sx={{ width: 50 }}>
          <Sidebar setExpanded={setExpanded} expanded={expanded} />
        </Grid>
        {expanded && (
          <Grid item sx={{ backgroundColor: "#252527", width: 220 }}>
            <Stack sx={{ mt: 1 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 4 }}
              >
                EXPLORER
              </Typography>
              <FileTree />
            </Stack>
          </Grid>
        )}

        {/* Content */}
        <Grid item xs zeroMinWidth>
          <Grid
            sx={{
              height: "33px",
            }}
          ></Grid>
          <Grid
            sx={{
              scrollBehavior: "smooth",
              overflowY: "auto",
              height: `calc(100vh - 20px - 33px)`,
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};
