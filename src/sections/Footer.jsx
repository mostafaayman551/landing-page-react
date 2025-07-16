import { Box, Container, Grid, Typography, Link, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        pt: 10,
        bgcolor: "#1A202C",
        textAlign: "center",
        color: "white",
        pb: 4,
      }}
    >
      <Container>
        <Grid
          container
          spacing={6}
          sx={{ textAlign: { xs: "center" }, justifyContent: { xs: "center", md: "space-between" } }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              textAlign: { xs: "center", md: "left" },
              width: "100%",
              maxWidth: { md: "25%" },
              flexBasis: { md: "25%" },
              minWidth: 0,
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Digital Platform
            </Typography>
            <Typography variant="body2" color="grey.400" sx={{ mb: 2 }}>
              Building the future of digital experiences with innovative
              solutions and cutting-edge technology.
            </Typography>
            <Typography variant="body2" color="grey.400">
              contact@digitalplatform.com
            </Typography>
            <Typography variant="body2" color="grey.400">
              +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" color="grey.400">
              Cairo, Egypt
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  gutterBottom
                >
                  Product
                </Typography>
                <Stack spacing={1}>
                  {[
                    "Features",
                    "Pricing",
                    "Documentation",
                    "API Reference",
                  ].map((text) => (
                    <Link
                      key={text}
                      href="#"
                      underline="none"
                      color="grey.400"
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  gutterBottom
                >
                  Company
                </Typography>
                <Stack spacing={1}>
                  {["About Us", "Careers", "Blog", "Contact"].map((text) => (
                    <Link
                      key={text}
                      href="#"
                      underline="none"
                      color="grey.400"
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  gutterBottom
                >
                  Support
                </Typography>
                <Stack spacing={1}>
                  {["Help Center", "Community", "Status Page"].map((text) => (
                    <Link
                      key={text}
                      href="#"
                      underline="none"
                      color="grey.400"
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  gutterBottom
                >
                  Legal
                </Typography>
                <Stack spacing={1}>
                  {[
                    "Terms of Service",
                    "Privacy Policy",
                    "Cookie Policy",
                    "GDPR",
                    "Security",
                  ].map((text) => (
                    <Link
                      key={text}
                      href="#"
                      underline="none"
                      color="grey.400"
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box
          mt={8}
          pt={4}
          borderTop={"1px solid rgba(255, 255, 255, 0.1)"}
          textAlign={"center"}
        >
          <Typography variant="body2" color="grey.500">
            {`© ${new Date().getFullYear()} Digital Platform. All rights reserved.`}
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>
            made with ❤️ by mostafa ayman
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
