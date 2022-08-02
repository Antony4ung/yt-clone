import { Container, Chip, IconButton, Box } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { DataArr } from "../public/data/categoryBar";

type Props = {
  activeChip : string,
  setActiveChip:  Dispatch<SetStateAction<string>>
}

export default function CategoryBar({activeChip,setActiveChip}:Props) {

  return (
    <>
      
      <Container maxWidth="xl" sx={{ display: "flex", overflowX: "scroll", alignItems: "center",my:2 }}>
        {DataArr.map(({ id, text }) => (
          <Chip
            sx={{ mx: 1 }}
            key={id}
            label={text}
            color={"primary"}
            variant={activeChip === text ? "filled" : "outlined"}
            onClick={() => setActiveChip(text)}
          />
        ))}
      </Container>
      
    </>
  );
}
