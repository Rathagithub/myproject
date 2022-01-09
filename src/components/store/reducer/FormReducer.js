import {
  CREATE_PLAYER,
  UPDATE_FORM_DATA,
  FETCH_PLAYERS_LIST,
  UPDATE_TEAM_PLAYER
} from '../actions/types'

const INIT_STATE = {
  playersLists: [],
  player: {
    firstName: '',
    lastName: '',
    height: '',
    position: 'pg',
  },
  teamPlayers: {
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
  },
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA: {
      return { ...state, player: { ...state.player, ...action.payload } }
    }

    case UPDATE_TEAM_PLAYER: {
      return { ...state, teamPlayers: { ...state.teamPlayers, ...action.payload } }
    }

    case CREATE_PLAYER: {
      return {
        ...state, playersLists: [...state.playersLists, action.payload]
      }
    }

    case FETCH_PLAYERS_LIST: {
      return { ...state, playersLists: action.payload }
    }

    default:
      return { ...state }
  }
}
