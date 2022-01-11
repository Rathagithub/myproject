import * as React from 'react';
import { connect } from 'react-redux'
import { updateFormData, createPlayer } from './store/actions/FormAction'
import {
 Box,
 Select,
 Button,
 MenuItem,
 TextField,
 InputLabel,
 FormControl,
} from '@material-ui/core';

const CreateForm = (props) => {
 const { updateFormData, createPlayer, formReducer } = props
 const { firstName, lastName, height, position } = formReducer.player
 const buttonDisable = !firstName || !lastName || !height

 const createPlayerHandler = () => {
  createPlayer(formReducer.player).then(() => console.log('suc')).catch(() => console.log('err'))
 }

 return (
  <Box className='form' >
   <Box>
    <TextField
     label="First Name"
     className='fullWidth'
     value={firstName}
     required
     error={!firstName}
     onChange={(e) => updateFormData({ firstName: e.target.value })}
    />
   </Box>
   <Box>
    <TextField
     label="Last Name"
     className='fullWidth'
     value={lastName}
     required
     error={!lastName}
     onChange={(e) => updateFormData({ lastName: e.target.value })}
    />
   </Box>
   <Box>
    <TextField
     type="number"
     label="Height"
     className='fullWidth'
     value={height}
     required
     error={!height}
     onChange={(e) => updateFormData({ height: e.target.value })}
    />
   </Box>
   <Box className='mt-10'>
    <FormControl className='fullWidth' variant="filled">
     <InputLabel className='fullWidth' id="position">Position</InputLabel>
     <Select
      labelId="Position"
      id="positions"
      value={position}
      onChange={(e) => updateFormData({ position: e.target.value })}
      className='fullWidth'
     >
      <MenuItem value="pg">
       <em>None</em>
      </MenuItem>
      <MenuItem value='pg'>Point Guard(PG)</MenuItem>
      <MenuItem value='sh'>Shooting Guard(SG)</MenuItem>
      <MenuItem value='sf'>Small Forward(SF)</MenuItem>
      <MenuItem value='pf'>Power Forward(PF)</MenuItem>
      <MenuItem value='c'>Center(C)</MenuItem>
     </Select>
    </FormControl>
   </Box>
   <div className='mt-10 flex-end'>
    <Button
     color="primary"
     variant="contained"
     sx={{ alignSelf: 'flex-end' }}
     disabled={buttonDisable}
     onClick={createPlayerHandler}
    >
     Save
    </Button>
   </div>
   {formReducer.createError !== '' && (
    <p style={{ color: "red" }}>{formReducer.createError}</p>
   )}
  </Box>
 );
}

const mapStateToProps = (formReducer) => ({ formReducer })

export default connect(mapStateToProps, {
 updateFormData,
 createPlayer
})(CreateForm);
