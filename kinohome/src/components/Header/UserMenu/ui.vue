<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import axiosApiInstance from '@/services/api'

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE

const authStore = useAuthStore()
const token = computed(() => authStore.userInfo.token)
const router = useRouter()
const showPopup = ref(false)

const displayName = ref('Loading...')

const getDisplayName = async () => {
  if (token.value) {
    try {
      const bodyPayload = {
        idToken: token.value
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await axiosApiInstance.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
        bodyPayload,
        config
      )
      if (response.data && response.data.users && response.data.users.length > 0) {
        displayName.value = response.data.users[0].displayName
      } else {
        displayName.value = 'No Name'
      }
    } catch (err) {
      console.error(err.response)
    }
  }
}

onMounted(() => {
  getDisplayName()
})

const togglePopup = () => {
  showPopup.value = !showPopup.value
}

const onClickOutside = (event) => {
  if (
    showPopup.value &&
    event.target instanceof Node &&
    !document.querySelector('.popup')?.contains(event.target)
  ) {
    showPopup.value = false
  }
}
onMounted(() => {
  document.addEventListener('mousedown', onClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onClickOutside)
})
const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/signin')
}
</script>

<template>
  <div>
    <div v-if="!token">
      <router-link to="/signin">
        <button class="btn-signin bg-blue-500 text-white rounded px-4 py-2 hover:bg-[#2563eb]">
          Войти
        </button>
      </router-link>
    </div>
    <div v-else class="relative">
      <div class="avatar_person px-1 cursor-pointer">
        <img
          class="avatar-image rounded-full"
          src="./../../../assets/icons/user_icon.png"
          alt="Avatar"
          @click="togglePopup"
        />
      </div>
      <div
        v-if="showPopup"
        v-show="showPopup"
        @click.self="showPopup = false"
        class="popup absolute z-10 w-full bg-[#292929] mt-1 rounded shadow-2xl"
      >
        <div class="flex flex-col px-1 py-1 border-b">
          <div class="flex items-center py-1">
            <img
              class="avatar-image-popup rounded-full"
              src="./../../../assets/icons/user_icon.png"
              alt="Avatar"
            />
            <div class="user-name px-1 text-lg">
              <p>{{ displayName }}</p>
            </div>
          </div>
          <div class="flex items-center text-gray-400">
            <p class="role_user">Пользователь</p>
          </div>
        </div>

        <div class="flex flex-col py-3 w-full">
          <router-link
            v-if="token"
            to="/profile"
            class="popup-item cursor-pointer py-2 rounded hover:bg-[#2563eb] hover:text-white px-2"
          >
            Профиль
          </router-link>
          <router-link
            to="/favorite"
            class="popup-item cursor-pointer py-2 rounded hover:bg-[#2563eb] hover:text-white px-2"
          >
            Избранное
          </router-link>
          <a
            v-if="token"
            @click.prevent="logout"
            class="popup-item cursor-pointer py-2 rounded hover:bg-[#2563eb] hover:text-white px-2"
            >Выйти</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: absolute;
  border-radius: 8px;
  padding: 1rem;
  width: 160px;
  right: 0;
  top: 150%;
  z-index: 10;
}

.avatar-image {
  width: 32px;
  height: 32px;
}

.avatar-image-popup {
  margin-right: 15px;
}

.avatar_person {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.avatar_person:hover {
  border-radius: 8px;
}

.role_user {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-signin {
  transition: background-color 0.3s;
}

@media (max-width: 1024px) {
  .popup {
    top: 140%;
  }
}
</style>
