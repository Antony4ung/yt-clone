import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { getSession, useSession ,signOut } from "next-auth/react";
import { Container,Box, Button } from "@mui/material";
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading...
    </Box>;
  }

  return (
    <Container sx={{marginTop:"30px"}}>
      {
        session && <>
        <Box sx={{my:3}}>
        <Image
            src={session?.user?.image as string}
            alt={session?.user?.name as string}
            style={{borderRadius:"50%"}}
            width={100}
            height={100}
          />
        </Box>
          <h2 style={{marginBottom:"20px"}}>{session?.user?.name}</h2>
          <p>{session?.user?.email}</p>
          <Button onClick={()=>signOut()} variant="contained" color="error" sx={{mt:5}}>LogOut</Button>
        </>
      }
    </Container>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
