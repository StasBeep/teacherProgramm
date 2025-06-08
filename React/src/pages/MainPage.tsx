import React from "react";

import {
  Box,
  Button,
} from "@mui/material";

const MainPage = () => {
  const [data, setData] = React.useState(0);

  return <Box
    sx={{
      width: '1200px',
      m: '0 auto'
    }}
  >
    {data}
    <Button
      variant='contained'
      onClick={() => setData(data + 1)}
    >
      +1
    </Button>
  </Box>
};

export default MainPage;