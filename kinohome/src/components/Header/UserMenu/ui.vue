<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import axiosApiInstance from '@/services/api'

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE

const authStore = useAuthStore()
const token = computed(() => authStore.userInfo.token)

const displayName = ref('Загрузка')

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
</script>

<template>
  <div>
    <div v-if="!token">
      <router-link to="/signin">
        <button class="btn_profile">
          <svg
            class="icon_profile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512.001 512.001"
            style="enable-background: new 0 0 512.001 512.001"
            xml:space="preserve"
          >
            <g>
              <g id="object_37_">
                <g>
                  <path
                    d="M256.001,234.233c47.283,0,85.613-38.33,85.613-85.613c0-47.283-38.33-85.613-85.613-85.613s-85.613,38.33-85.613,85.613 c0,0,0,0.001,0,0.001C170.442,195.882,208.741,234.18,256.001,234.233z M256.001,98.402c27.735,0,50.219,22.484,50.219,50.219 s-22.484,50.219-50.219,50.219s-50.219-22.484-50.219-50.219l0,0C205.813,120.899,228.279,98.433,256.001,98.402z"
                  />
                </g>
                <g>
                  <path
                    d="M512.001,256.004c0-141.385-114.616-256-256.001-256c-67.895,0-133.01,26.971-181.019,74.98 c-96.039,96.039-100.36,250.363-9.845,351.625l0,0l0,0l0,0c5.484,6.135,11.358,12.092,17.45,17.697 c97.981,90.247,248.803,90.256,346.795,0.021c6.741-6.188,13.14-12.737,19.171-19.618l0.008-0.009 C489.478,378.03,512.026,318.071,512.001,256.004z M256.001,35.397c121.643,0,220.606,98.964,220.606,220.607 c0.011,38.163-9.883,75.675-28.713,108.868c-16.177-56.307-67.65-95.124-126.235-95.195H191.91 c-59.292,0.075-111.202,39.819-126.741,97.039c-19.521-33.629-29.794-71.827-29.775-110.712 C35.394,134.361,134.358,35.397,256.001,35.397z M417.541,406.248c-3.875,4.164-7.931,8.191-12.116,12.034 c-84.443,77.771-214.422,77.767-298.859-0.01c-3.623-3.337-7.151-6.805-10.539-10.368v-6.967 c0.065-52.925,42.958-95.81,95.883-95.866h129.749c52.925,0.056,95.817,42.941,95.882,95.866L417.541,406.248z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span class="title_profile">Профиль</span>
        </button>
      </router-link>
    </div>
    <div v-else class="relative">
      <router-link to="/profile">
        <div class="avatar_person px-1 cursor-pointer">
          <svg
            class="person_icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512.001 512.001"
            style="enable-background: new 0 0 512.001 512.001"
            xml:space="preserve"
          >
            <g>
              <g id="object_37_">
                <g>
                  <path
                    d="M256.001,234.233c47.283,0,85.613-38.33,85.613-85.613c0-47.283-38.33-85.613-85.613-85.613s-85.613,38.33-85.613,85.613 c0,0,0,0.001,0,0.001C170.442,195.882,208.741,234.18,256.001,234.233z M256.001,98.402c27.735,0,50.219,22.484,50.219,50.219 s-22.484,50.219-50.219,50.219s-50.219-22.484-50.219-50.219l0,0C205.813,120.899,228.279,98.433,256.001,98.402z"
                  />
                </g>
                <g>
                  <path
                    d="M512.001,256.004c0-141.385-114.616-256-256.001-256c-67.895,0-133.01,26.971-181.019,74.98 c-96.039,96.039-100.36,250.363-9.845,351.625l0,0l0,0l0,0c5.484,6.135,11.358,12.092,17.45,17.697 c97.981,90.247,248.803,90.256,346.795,0.021c6.741-6.188,13.14-12.737,19.171-19.618l0.008-0.009 C489.478,378.03,512.026,318.071,512.001,256.004z M256.001,35.397c121.643,0,220.606,98.964,220.606,220.607 c0.011,38.163-9.883,75.675-28.713,108.868c-16.177-56.307-67.65-95.124-126.235-95.195H191.91 c-59.292,0.075-111.202,39.819-126.741,97.039c-19.521-33.629-29.794-71.827-29.775-110.712 C35.394,134.361,134.358,35.397,256.001,35.397z M417.541,406.248c-3.875,4.164-7.931,8.191-12.116,12.034 c-84.443,77.771-214.422,77.767-298.859-0.01c-3.623-3.337-7.151-6.805-10.539-10.368v-6.967 c0.065-52.925,42.958-95.81,95.883-95.866h129.749c52.925,0.056,95.817,42.941,95.882,95.866L417.541,406.248z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span>{{ displayName }}</span>
        </div>
      </router-link>
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
  opacity: 0.5;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  transition: opacity 0.3s;
}

.person_icon {
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 6px;
  opacity: 0.5;
  fill: #fff;
}

.avatar_person:hover {
  opacity: 1;
}

.role_user {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-signin {
  transition: background-color 0.3s;
}

.icon_profile {
  display: block;
  width: 28px;
  height: 28px;
  margin-right: 6px;
  opacity: 0.5;
  fill: #fff;
}

.title_profile {
  font-size: 15px;
  line-height: 22px;
}

.btn_profile {
  display: flex;
  align-items: center;
  opacity: 0.5;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  transition: opacity 0.3s;
  margin-right: 10px;
}

.btn_profile:hover {
  opacity: 1;
}

@media (max-width: 1024px) {
  .popup {
    top: 140%;
  }
}
</style>
