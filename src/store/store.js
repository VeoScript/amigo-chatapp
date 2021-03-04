import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {

}

const mutations = {
  
}

const actions = {
  registerUser({}, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response)
      let userId = firebaseAuth.currentUser.uid
      firebaseDb.ref('users/' + userId).set({
        name: payload.name,
        email: payload.email,
        online: true
      })
    })
    .catch(error => {
      console.log(error.message)
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}