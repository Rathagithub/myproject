import * as React from 'react';
import { connect } from 'react-redux'
import SelectPlayers from './SelectPlayers'
import SelectPosition from './SelectPosition'
import { Box, Button } from '@material-ui/core';
import { fetchAllPlayers, fetchAllTeams, createTeam, updateTeamPlayers } from './store/actions/FormAction'

const SelectPlayerContainer = (props) => {
 const { playersLists, teamPlayers } = props.formReducer
 React.useEffect(() => {
  props.fetchAllPlayers()
  props.fetchAllTeams()
 }, [])

 const changePlayer = (key, id) => {
  const player = playersLists.filter(p => p.id === id)[0]
  props.updateTeamPlayers({ [key]: player })
 }
 const selectedPlayers = Object.values(teamPlayers).filter(t => t.id !== undefined).map(p => p.id)

 return (
  <div style={{ width: '100%' }}>
   <Box
    sx={{
     display: 'flex',
     flexDirection: 'row',
     p: 1,
     m: 1,
     bgcolor: 'background.paper',
    }}
   >
    <Box style={{ width: 300 }}>
     <SelectPlayers
      playersList={playersLists}
      selectedPlayers={selectedPlayers}
      playerId={teamPlayers.player1.id || ''}
      changePlayer={(e) => changePlayer('player1', e)}
     />
    </Box>
    <Box style={{ width: 300, marginLeft: 40 }}>
     <SelectPosition position={teamPlayers.player1.position || ''} />
    </Box>
   </Box>

   <Box
    sx={{
     display: 'flex',
     flexDirection: 'row',
     p: 1,
     m: 1,
     bgcolor: 'background.paper',
    }}
   >
    <Box style={{ width: 300 }}>
     <SelectPlayers
      playersList={playersLists}
      selectedPlayers={selectedPlayers}
      playerId={teamPlayers.player2.id || ''}
      changePlayer={(e) => changePlayer('player2', e)}
     />
    </Box>
    <Box style={{ width: 300, marginLeft: 40 }}>
     <SelectPosition position={teamPlayers.player2.position || ''} />
    </Box>
   </Box>

   <Box
    sx={{
     display: 'flex',
     flexDirection: 'row',
     p: 1,
     m: 1,
     bgcolor: 'background.paper',
    }}
   >
    <Box style={{ width: 300 }}>
     <SelectPlayers
      playersList={playersLists}
      selectedPlayers={selectedPlayers}
      playerId={teamPlayers.player3.id || ''}
      changePlayer={(e) => changePlayer('player3', e)}
     />
    </Box>
    <Box style={{ width: 300, marginLeft: 40 }}>
     <SelectPosition position={teamPlayers.player3.position || ''} />
    </Box>
   </Box>

   <Box
    sx={{
     display: 'flex',
     flexDirection: 'row',
     p: 1,
     m: 1,
     bgcolor: 'background.paper',
    }}
   >
    <Box style={{ width: 300 }}>
     <SelectPlayers
      playersList={playersLists}
      selectedPlayers={selectedPlayers}
      playerId={teamPlayers.player4.id || ''}
      changePlayer={(e) => changePlayer('player4', e)}
     />
    </Box>
    <Box style={{ width: 300, marginLeft: 40 }}>
     <SelectPosition position={teamPlayers.player4.position || ''} />
    </Box>
   </Box>

   <Box
    sx={{
     display: 'flex',
     flexDirection: 'row',
     p: 1,
     m: 1,
     bgcolor: 'background.paper',
    }}
   >
    <Box style={{ width: 300 }}>
     <SelectPlayers
      playersList={playersLists}
      selectedPlayers={selectedPlayers}
      playerId={teamPlayers.player5.id || ''}
      changePlayer={(e) => changePlayer('player5', e)}
     />
    </Box>
    <Box style={{ width: 300, marginLeft: 40 }}>
     <SelectPosition position={teamPlayers.player5.position || ''} />
    </Box>
   </Box>

   <div className='mt-10 flex-end' style={{ width: 655 }}>
    <Button
     color="primary"
     variant="contained"
     sx={{ alignSelf: 'flex-end' }}
     onClick={() => props.createTeam(teamPlayers)}
    >
     Save
    </Button>
   </div>
  </div>
 );
}

const mapStateToProps = (formReducer) => ({ formReducer })

export default connect(mapStateToProps, {
 createTeam,
 fetchAllPlayers,
 fetchAllTeams,
 updateTeamPlayers
})(SelectPlayerContainer);
