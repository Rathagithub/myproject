import {
  CREATE_TEAM,
  CREATE_PLAYER,
  UPDATE_FORM_DATA,
  FETCH_TEAMS_LIST,
  FETCH_PLAYERS_LIST,
  UPDATE_TEAM_PLAYER
} from '../actions/types'

const INIT_STATE = {
  playersLists: [],
  teamLists: [],
  player: {
    firstName: '',
    lastName: '',
    height: '',
    position: '',
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
        ...state,
        player: {
          firstName: '',
          lastName: '',
          height: '',
          position: '',
        },
        playersLists: [...state.playersLists, action.payload]
      }
    }

    case CREATE_TEAM: {
      return {
        ...state,
        teamPlayers: {
          player1: '',
          player2: '',
          player3: '',
          player4: '',
          player5: '',
        },
        teamLists: [...state.teamLists, action.payload]
      }
    }

    case FETCH_PLAYERS_LIST: {
      return { ...state, playersLists: action.payload }
    }

    case FETCH_TEAMS_LIST: {
      return { ...state, teamLists: action.payload }
    }

    default:
      return { ...state }
  }
}
