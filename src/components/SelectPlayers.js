import * as React from 'react';
import {
 Select,
 MenuItem,
 InputLabel,
 FormControl,
} from '@material-ui/core';

const SelectPlayers = (props) => {
 const { playerId, changePlayer, playersList } = props

 return (
  <div>
   <FormControl className='fullWidth' variant="filled">
    <InputLabel className='fullWidth' id="players">Player</InputLabel>
    <Select
     labelId="Name"
     value={playerId}
     className='fullWidth'
     onChange={(e) => changePlayer(e.target.value)}
    >
     <MenuItem value=""></MenuItem>
     {playersList.map(p => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)}
    </Select>
   </FormControl>
  </div>
 );
}

export default SelectPlayers;

