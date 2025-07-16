import { Box, Container, Typography, Paper } from "@mui/material";
import features from "../utils/featuresData";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaletteIcon from "@mui/icons-material/Palette";
import CodeIcon from "@mui/icons-material/Code";

const getIcon = (iconName) => {
  switch (iconName) {
    case "SpeedIcon":
      return <SpeedIcon sx={{ fontSize: "4rem", color: "primary.main" }} />;
    case "SecurityIcon":
      return <SecurityIcon sx={{ fontSize: "4rem", color: "primary.main" }} />;
    case "CloudQueueIcon":
      return (
        <CloudQueueIcon sx={{ fontSize: "4rem", color: "primary.main" }} />
      );
    case "SupportAgentIcon":
      return (
        <SupportAgentIcon sx={{ fontSize: "4rem", color: "primary.main" }} />
      );
    case "PaletteIcon":
      return <PaletteIcon sx={{ fontSize: "4rem", color: "primary.main" }} />;
    case "CodeIcon":
      return <CodeIcon sx={{ fontSize: "4rem", color: "primary.main" }} />;
    default:
      return null;
  }
};

const Features = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#f9f9f9" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          gutterBottom
        >
          Why Choose Our Platform?
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ mb: 6, maxWidth: 600, mx: "auto", fontWeight: 500 }}
        >
          Discover the features that make us the preferred choice for thousands
          of developers and businesses worldwide.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                flexGrow: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 12px 40px",
                },
              }}
            >
              <Box mb={2}>{getIcon(feature.iconName)}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="textSecondary">{feature.desc}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
