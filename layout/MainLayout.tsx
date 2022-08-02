import { onAuthStateChanged } from "firebase/auth";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import ContextProvider, {
  AppContext,
  ContextType,
} from "../components/ContextProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Box } from "@mui/material";
import { SessionProvider } from "next-auth/react";
interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <ContextProvider>
        <Header>
          <Box sx={{ minHeight: "88vh", maxWidth: "100vw" }}>{children}</Box>
        </Header>
        <Footer />
      </ContextProvider>
    </SessionProvider>
  );
};

export default MainLayout;
