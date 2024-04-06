import { ref } from 'vue'
import { defineStore } from 'pinia'
import axiosApiInstance from '@/services/api'

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;

export const useAuthStore = defineStore('auth', () => {

  const userInfo = ref({
      token: '',
      displayName: '',
      email: '',
      userId: '',
      refreshToken: ''
  })
  const error = ref('');
  const loader = ref(false);

  const auth = async (payload, type) => {
    const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword';
    error.value = '';
    loader.value = true;
    try {
      let response = await axiosApiInstance.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      userInfo.value = {
        token: response.data.idToken,
        displayName: response.data.displayName,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken
      }
      localStorage.setItem('userTokens', JSON.stringify({
        token: userInfo.value.token, 
        refreshToken: userInfo.value.refreshToken
      }))    
      //loader.value = false;
    } catch(err) {
      loader.value = false; 
      if (err.response && err.response.data && err.response.data.error && err.response.data.error.message) {
        console.error('Error response: ', err.response.data);
        const errorMessage = err.response.data.error.message;
        switch (errorMessage) {
          case 'EMAIL_EXISTS':
            error.value = 'Email exists';
            break;
          case 'OPERATION_NOT_ALLOWED':
            error.value = 'Operation not allowed';
            break;
          case 'EMAIL_NOT_FOUND':
            error.value = 'Email not found';
            break;
          case 'INVALID_PASSWORD':
            error.value = 'Invalid password';
            break;
          default:
            error.value = 'Unexpected error occurred';
            break;
          }
      } else {
        console.error('Error without response: ', err);
        error.value = 'An error occurred. Please try again later.';
      }
      throw new Error(error.value);
    }  
  }

  const logout = () => {
    userInfo.value = {
      token: '',
      displayName: '',
      email: '',
      userId: '',
      refreshToken: ''
    }
  }

  return { auth, userInfo, error, loader, logout }
})