import { Box, Button, Container, Typography } from "@mui/material";

const CTA = () => {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "#283140",
        textAlign: "center",
        color: "white",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
        >
          Ready to Get Started?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: "600px",
            mx: "auto",
            fontWeight: 400,
          }}
        >
          Join thousands of developers and businesses who are already building
          amazing experiences with our platform.
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
            size="large"
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
            size="large"
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
            Contact Sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
