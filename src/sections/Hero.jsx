import { Box, Typography, Button, Container } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Hero = () => {
  return (
    <Box
      sx={{
        py: { xs: "2rem", md: "4rem" },
        bgcolor: "primary.main",
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "3rem", md: "5rem" },
            mb: 3,
          }}
        >
          Build Amazing <br />
          Digital Experiences
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "white", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6", fontWeight: 400, mb: 3 }}
        >
          Create stunning websites and applications with our cutting-edge
          platform. Turn your ideas into reality with powerful tools and
          seamless workflows.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            startIcon={<RocketLaunchIcon />}
            sx={{
              color: "white",
              background:
                "linear-gradient(45deg, rgb(254, 107, 139) 30%, rgb(255, 142, 83) 90%)",
              borderRadius: "50px",
              padding: "16px 32px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "rgba(254, 107, 139, 0.4) 0px 12px 40px",
              },
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            startIcon={<PlayArrowIcon />}
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: "50px",
              padding: "16px 32px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Watch Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
