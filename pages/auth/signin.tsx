import { Box, Button, Container } from "@mui/material";
import { GetServerSideProps } from "next";
import { signIn, getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import logo from "../../public/img/logo.png";

const Login = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={logo} alt="logo" width={100} height={100} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
          width: "350px",
          pt: 5,
        }}
      >
        <Button
          fullWidth
          sx={{ my: 1 }}
          onClick={() => {
            signIn("google");
          }}
          variant="contained"
          color="error"
        >
          Login with Google
        </Button>
      </Container>
    </Box>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
