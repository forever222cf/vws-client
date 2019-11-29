import api from './api'
import env from '@/utils/env'

const candidateAPI = {
  getAllCandidates: `${env.API_SERVER}${env.API.GET_CANDIDATES}`,
  createCandidate: `${env.API_SERVER}${env.API.CREATE_CANDIDATE}`,
  getRandomCandidate: `${env.API_SERVER}${env.API.GET_RANDOM_CANDIDATE}`
}

export const getAllCandidates = () => {
  return api.get({
    url: candidateAPI.getAllCandidates
  })
}

export const createCandidate = payload => {
  return api.post({
    url: candidateAPI.createCandidate,
    data: payload
  })
}

export const getRandomCandidate = () => {
  return api.get({
    url: candidateAPI.getRandomCandidate
  })
}
