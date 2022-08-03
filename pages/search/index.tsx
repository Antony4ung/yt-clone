import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const Index = () => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter()
  return (
    <Box sx={{my:5,ml:2}}>
      <TextField
        label="Search"
        size="small"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ width: "70%", mr: 1,maxWidth:"400px" }}
      />
      <Button
        onClick={() => {
          searchText.length >= 1 && router.push(`/search/${searchText}`);
        }}
        variant="contained"
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default Index;
