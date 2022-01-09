import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import {
   CREATE_PLAYER,
   UPDATE_FORM_DATA,
   FETCH_PLAYERS_LIST,
   UPDATE_TEAM_PLAYER
} from './types'

const updateFormData = (value) => ({
   type: UPDATE_FORM_DATA,
   payload: value,
})

const updateTeamPlayers = (value) => ({
   type: UPDATE_TEAM_PLAYER,
   payload: value,
})

const createPlayer = (value) => {

   const { firstName, lastName, height, position } = value
   const id = uuidv4()
   const player = {
      id,
      height,
      position,
      name: `${firstName} ${lastName}`,
      created: moment().utc().valueOf(),
      updated: moment().utc().valueOf()
   }

   return (dispatch, getState, http) =>
      http
         .post(`/api/create`, player)
         .then((res) => {
            dispatch({
               type: CREATE_PLAYER,
               payload: res.data,
            })
         })
         .catch((err) => {
            console.log('Create player failed')
         })
}

const fetchAllPlayers = () => {
   return (dispatch, getState, http) =>
      http
         .get(`/api/getplayers`)
         .then((res) => {
            const data = Object.values(res.data)
            dispatch({
               type: FETCH_PLAYERS_LIST,
               payload: data,
            })
         })
         .catch((err) => {
            console.log('Fetch player failuer')
         })
}

export {
   createPlayer,
   updateFormData,
   fetchAllPlayers,
   updateTeamPlayers
}