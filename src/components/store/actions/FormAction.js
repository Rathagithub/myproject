import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import {
   CREATE_TEAM,
   CREATE_PLAYER,
   UPDATE_FORM_DATA,
   FETCH_TEAMS_LIST,
   FETCH_PLAYERS_LIST,
   UPDATE_TEAM_PLAYER,
   CREATE_ERROR,
   CREATE_TEAM_ERROR
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
      type: 'player',
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

            dispatch({
               type: CREATE_ERROR,
               payload: "Create player failed",
            })
            console.log('Create player failed')
         })
}

const createTeam = (value) => {
   const id = uuidv4()
   const team = {
      id,
      players: value,
      type: 'teams',
      created: moment().utc().valueOf(),
      updated: moment().utc().valueOf()
   }

   return (dispatch, getState, http) =>
      http
         .post(`/api/create`, team)
         .then((res) => {
            dispatch({
               type: CREATE_TEAM,
               payload: res.data,
            })
         })
         .catch((err) => {
            dispatch({
               type: CREATE_TEAM_ERROR,
               payload: 'Create team failed',
            })
            console.log('Create team failed')
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

const fetchAllTeams = () => {
   return (dispatch, getState, http) =>
      http
         .get(`/api/getteams`)
         .then((res) => {
            const data = Object.values(res.data)
            dispatch({
               type: FETCH_TEAMS_LIST,
               payload: data,
            })
         })
         .catch((err) => {
            console.log('Fetch player failuer')
         })
}

export {
   createTeam,
   createPlayer,
   fetchAllTeams,
   updateFormData,
   fetchAllPlayers,
   updateTeamPlayers,
}