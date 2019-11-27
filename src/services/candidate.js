import api from './api'
import env from '@/utils/env'

const candidateAPI = {
  getAllCandidates: `${env.API_SERVER}${env.API.GET_CANDIDATES}`,
  createCandidate: `${env.API_SERVER}${env.API.CREATE_CANDIDATE}`
}

export const getCandidate = () => {
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
