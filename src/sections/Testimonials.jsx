import testimonials from "../utils/testimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import Rating from "@mui/material/Rating";

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          What Our Customers Say
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          sx={{ mb: 6, maxWidth: "600px", mx: "auto", fontWeight: 500 }}
        >
          Join thousands of satisfied customers who have transformed their
          businesses with our platform.
        </Typography>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ p: 2 }}>
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Rating
                    value={testimonial.rate}
                    precision={0.5}
                    readOnly
                    sx={{ mb: 2, color: "#6366f1" }}
                  />
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    sx={{
                      mb: 3,
                      fontStyle: "italic",
                    }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={"bold"}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;
