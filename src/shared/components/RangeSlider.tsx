import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log("newValue : " , newValue);
    
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        size="small"
      />
    </Box>
  );
}