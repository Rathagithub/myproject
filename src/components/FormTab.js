import * as React from 'react';
import CreateForm from './CreateForm'
import { Tabs, Tab, Box } from '@material-ui/core';
import SelectPlayerContainer from './SelectPlayerCantainer'

const FormTab = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className='container' sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Compose Team" />
          <Tab label="First Quater" />
        </Tabs>
      </Box>
      {value === 1 ? <SelectPlayerContainer /> : <CreateForm />}
    </Box>
  );
}

export default FormTab;
