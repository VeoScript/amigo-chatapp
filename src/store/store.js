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
  },
  loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error.message)
    })
  },
  handleAuthStateChanged() {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        // User is logged in.
        let userId = firebaseAuth.currentUser.uid
        firebaseDb.ref("users/" + userId).once('value', snapshot => {
          console.log('snapshot: ', snapshot)
          let userDetails = snapshot.val()
          console.log('userDetails: ', userDetails)
        })
      }
      else {
        //User is logged out.
      }
    });
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