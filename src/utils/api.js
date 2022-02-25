import { useLinkStore } from '../stores/link'

const BASE_URL = import.meta.env.VITE_API_URL
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

const api = {
  auth (code) {
    const form = new URLSearchParams({
      client_id: CLIENT_ID,
      code: code,
      redirect_uri: REDIRECT_URL,
      grant_type: 'authorization_code'
    })
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + '/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form
      }).then(j => {
        console.log(j)
        return j.text()
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  getBSDs () {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + '/v4/bsds', {
        headers: getHeaders()
      }).then(j => j.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  },

  getGroups () {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + '/v4/groups', {
        headers: getHeaders()
      }).then(j => j.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  },

  getOrganizations () {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + '/v4/organizations', {
        headers: getHeaders()
      }).then(j => j.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  },

  getGroupLinks (GROUP_ID) {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + `/v4/groups/${GROUP_ID}/bitlinks`, {
        headers: getHeaders()
      }).then(j => j.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  }
}

const getHeaders = () => {
  const store = useLinkStore()
  return {
    Authorization: `Bearer ` + store.token
  }
}

export default api