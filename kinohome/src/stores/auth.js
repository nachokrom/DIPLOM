import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;

export const useAuthStore = defineStore('auth', () => {

  const userInfo = ref({
      token: '',
      displayName: '',
      email: '',
      userId: '',
      refreshToken: '',
      expiresIn: ''
  })
  const error = ref('');
  const loader = ref(false);

  const auth = async (payload, type) => {
    const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword';
    error.value = '';
    loader.value = true;
    try {
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      console.log(response.data)
      userInfo.value = {
        token: response.data.idToken,
        displayName: response.data.displayName,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn
      }

      loader.value = false;
        
    } catch(err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email exists'
          break;
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Operation not allowed'
          break;
        case 'EMAIL_NOT_FOUND':
          error.value = 'Email not found'
          break;
        case 'INVALID_PASSWORD':
          error.value = 'Invalid password'
          break;
        default:
          error.value = 'Error'
          break;
      }
      loader.value = false;
      throw error.value;
    }
  }

  return { auth, userInfo, error, loader }
})