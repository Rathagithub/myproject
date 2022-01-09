import * as React from 'react';
import {
 Select,
 MenuItem,
 InputLabel,
 FormControl,
} from '@material-ui/core';

const SelectPosition = (props) => {
 const { position } = props

 const positionOptions = [
  { value: 'pg', text: 'Point Guard(PG)' },
  { value: 'sh', text: 'Shooting Guard(SG)' },
  { value: 'sf', text: 'Small Forward(SF)' },
  { value: 'pf', text: 'Power Forward(PF)' },
  { value: 'c', text: 'Center(C)' },
 ]

 let optionsFilter = positionOptions
 if (position) {
  optionsFilter = positionOptions.filter(p => p.value === position)
 }

 return (
  <div>
   <FormControl className='fullWidth' variant="filled">
    <InputLabel className='fullWidth' id="position">Position</InputLabel>
    <Select
     labelId="Position"
     id="positions"
     value={position}
     className='fullWidth'
    >
     <MenuItem value=""></MenuItem>
     {optionsFilter.map(p => <MenuItem key={p.value} value={p.value}>{p.text})</MenuItem>)}
    </Select>
   </FormControl>
  </div>
 );
}

export default SelectPosition;
