import Register from "./components/Register";
import VerifyOTP from "./components/VerifyOTP";
import { Container, Typography, Box } from "@mui/material";

const App = () => {
  return (
    <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Blockchain 2FA System
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Register />

        <VerifyOTP />
      </Box>
    </Container>
  );
};

export default App;
