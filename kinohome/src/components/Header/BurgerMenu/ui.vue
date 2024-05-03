<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import axiosApiInstance from '@/services/api'

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE

const authStore = useAuthStore()
const token = computed(() => authStore.userInfo.token)

const displayName = ref('Загрузка...')

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

const mobileMenuOpen = ref(false)
const bodyScrollLock = ref(false)

watch(mobileMenuOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('body-fade')
    bodyScrollLock.value = true
  } else if (bodyScrollLock.value) {
    document.body.style.overflow = ''
    document.body.classList.remove('body-fade')
    bodyScrollLock.value = false
  }
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = true
}
const onClickOutside = () => {
  if (
    mobileMenuOpen.value &&
    event.target instanceof Node &&
    !document.querySelector('.burger_block')?.contains(event.target)
  ) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onClickOutside)
})
</script>

<template>
  <!-- Меню бургера для мобильных устройств -->
  <div class="btn_burger">
    <button @click="toggleMobileMenu" v-show="!mobileMenuOpen">
      <svg class="icon_burger" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
      </svg>
    </button>
    <button class="btn_cross" v-show="mobileMenuOpen" @click="toggleMobileMenu">
      <svg
        class="icon_cross"
        id="Capa_1"
        enable-background="new 0 0 512.001 512.001"
        viewBox="0 0 512.001 512.001"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z"
          />
        </g>
      </svg>
    </button>
  </div>
  <!-- Панель бургер-меню -->
  <transition name="slide">
    <div
      :class="['burger_panel bg-[#1d1d1d]', { 'burger_panel--is-open': mobileMenuOpen.value }]"
      v-show="mobileMenuOpen"
    >
      <div class="burger_items">
        <nav class="py-2 px-5">
          <router-link to="/profile" class="flex items-center px-5 py-2 h-[48px]">
            <svg
              class="icon_burger-item"
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
            <span v-if="!token" class="burger_nav-item">Профиль</span>
            <span v-else class="burger_nav-item">{{ displayName }}</span>
          </router-link>
          <router-link to="/" class="flex items-center px-5 py-2 h-[48px]"
            ><svg
              class="icon_burger-item"
              id="light"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m19.5 24h-4c-.276 0-.5-.224-.5-.5v-7c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v7c0 .276-.224.5-.5.5h-4c-.827 0-1.5-.673-1.5-1.5v-9.5h-2c-.551 0-1-.449-1-1 0-.265.108-.525.296-.713l11.354-11.144c.194-.19.506-.19.7 0l11.35 11.14c.192.192.3.452.3.717 0 .551-.449 1-1 1h-2v9.5c0 .827-.673 1.5-1.5 1.5zm-3.5-1h3.5c.276 0 .5-.224.5-.5v-10c0-.276.224-.5.5-.5h2.5l-11-10.799-11 10.796 2.5.003c.276 0 .5.224.5.5v10c0 .276.224.5.5.5h3.5v-6.5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5z"
                />
              </g>
            </svg>
            <span class="burger_nav-item">Главная</span>
          </router-link>
          <router-link to="/movies" class="flex items-center px-5 py-2 h-[48px]">
            <svg
              class="icon_burger-item"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 434.391 434.391"
              style="enable-background: new 0 0 434.391 434.391"
              xml:space="preserve"
            >
              <g>
                <g id="Layer_8_24_">
                  <path
                    d="M405.725,0h-9.53v41.708h-30.251V0h-24.383v93.297H83.364V0H66.245v41.708H36.004v-41.7 C25.43,0.079,16.885,8.665,16.885,19.247V415.14c0,10.625,8.613,19.251,19.253,19.251H83.37V307.602h258.182v126.789h64.162 c10.633,0,11.792-8.618,11.792-19.251V19.247C417.514,8.618,416.352,0,405.725,0z M66.251,422.547H36.01v-47.485h30.242V422.547z M66.251,348.993H36.01v-47.486h30.242V348.993z M66.251,270.07H36.01v-47.48h30.242V270.07z M66.251,195.703H36.01V148.22h30.242 V195.703z M66.251,116.78H36.01V69.297h30.242V116.78z M341.538,278.098H83.364V122.815h258.174V278.098z M396.171,422.547 h-30.236v-47.485h30.236V422.547z M396.171,348.993h-30.236v-47.486h30.236V348.993z M396.171,270.07h-30.236v-47.48h30.236 V270.07z M396.171,195.703h-30.236V148.22h30.236V195.703z M396.171,116.78h-30.236V69.297h30.236V116.78z"
                  />
                </g>
              </g>
            </svg>
            <span class="burger_nav-item">Фильмы</span>
          </router-link>
          <router-link to="/serials" class="flex items-center px-5 py-2 h-[48px]">
            <svg
              class="icon_burger-item"
              id="Layer_1"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m255.86 61c5.51 0 9.99-4.49 9.99-10s-4.479-10-9.99-10c-5.52 0-10 4.49-10 10s4.48 10 10 10z"
                />
                <path
                  d="m500.28 52.72c-7.551-7.56-17.591-11.72-28.28-11.72h-171.141c-5.52 0-10.01 4.49-10.01 10s4.49 10 10.01 10h171.141c11.01.02 19.979 8.99 20 20v230h-472v-230c.02-11.01 8.99-19.98 20-20h170.86c5.51 0 10-4.49 10-10s-4.49-10-10-10h-170.86c-10.69 0-20.73 4.16-28.28 11.72-7.56 7.55-11.72 17.59-11.72 28.28v290c0 22.056 17.944 40 40 40h80.626l-15.613 46.838c-1.017 3.049-.505 6.401 1.375 9.009 1.879 2.607 4.898 4.153 8.112 4.153h40c4.304 0 8.125-2.754 9.487-6.838l17.721-53.162h145.916l20.539 53.58c1.483 3.867 5.196 6.42 9.338 6.42h40c3.293 0 6.374-1.621 8.24-4.334 1.865-2.713 2.275-6.171 1.098-9.246l-17.796-46.42h82.957c22.056 0 40-17.944 40-40v-290c0-10.69-4.16-20.73-11.72-28.28zm-352.988 398.28h-18.918l13.333-40h18.918zm235.665 0h-18.581l-15.333-40h18.581zm109.043-80c0 11.028-8.972 20-20 20h-432c-11.028 0-20-8.972-20-20v-40h472z"
                />
                <circle cx="300.62" cy="361" r="10" />
                <path
                  d="m210.62 371c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10c-5.52 0-9.99 4.48-9.99 10s4.47 10 9.99 10z"
                />
                <path
                  d="m255.63 371c5.52 0 9.99-4.48 9.99-10s-4.471-10-9.99-10c-5.53 0-10.01 4.48-10.01 10s4.48 10 10.01 10z"
                />
                <path
                  d="m231 241h50c5.522 0 10-4.477 10-10v-50c0-5.523-4.478-10-10-10h-50c-5.523 0-10 4.477-10 10v50c0 5.523 4.477 10 10 10zm10-50h30v30h-30z"
                />
                <path
                  d="m370 241c5.522 0 10-4.477 10-10v-50c0-5.523-4.478-10-10-10h-50c-5.522 0-10 4.477-10 10v50c0 5.523 4.478 10 10 10zm-40-50h30v30h-30z"
                />
                <path
                  d="m141 171c-5.523 0-10 4.477-10 10v50c0 5.523 4.477 10 10 10h50c5.523 0 10-4.477 10-10v-50c0-5.523-4.477-10-10-10zm40 50h-30v-30h30z"
                />
                <path
                  d="m101 196.319h-26.858l7.929-8.091c3.905-3.903 3.905-10.314 0-14.217s-10.237-3.945-14.143-.042l-25 24.964c-3.905 3.903-3.905 10.221 0 14.124l25 24.98c1.953 1.951 4.512 2.924 7.071 2.924s5.119-.977 7.071-2.928c3.905-3.903 3.905-10.065 0-13.968l-7.929-7.758h26.859c5.523 0 10-4.474 10-9.994s-4.477-9.994-10-9.994z"
                />
                <path
                  d="m469.071 198.912-25-24.985c-3.906-3.903-10.236-3.903-14.143 0-3.905 3.903-3.905 10.398 0 14.301l7.929 8.091h-26.857c-5.522 0-10 4.474-10 9.994s4.478 9.994 10 9.994h26.857l-7.929 7.757c-3.905 3.903-3.905 10.148 0 14.051 1.954 1.951 4.512 2.885 7.072 2.885s5.118-.996 7.071-2.948l25-24.995c3.905-3.903 3.905-10.242 0-14.145z"
                />
              </g>
            </svg>
            <span class="burger_nav-item">Сериалы</span>
          </router-link>
          <router-link to="/cartoons" class="flex items-center px-5 py-2 h-[48px]">
            <svg
              class="icon_burger-item"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 480 480"
              style="enable-background: new 0 0 480 480"
              xml:space="preserve"
            >
              <path
                id="XMLID_1550_"
                d="M430,90H262.269l65.206-73.356c3.669-4.128,3.297-10.448-0.831-14.117 c-4.128-3.67-10.449-3.298-14.118,0.83L239.572,85.43l-52.501-52.501c-3.905-3.904-10.237-3.904-14.143,0 c-3.905,3.905-3.905,10.237,0,14.143L215.858,90H50c-27.57,0-50,22.43-50,50v250c0,27.57,22.43,50,50,50h180v20H110 c-5.523,0-10,4.478-10,10s4.477,10,10,10h260c5.523,0,10-4.478,10-10s-4.477-10-10-10H250v-20h180c27.57,0,50-22.43,50-50V140 C480,112.43,457.57,90,430,90z M460,390c0,16.542-13.458,30-30,30H50c-16.542,0-30-13.458-30-30V140c0-16.542,13.458-30,30-30h380 c16.542,0,30,13.458,30,30V390z M316.667,173.667c-19.67,0-36.932,11.912-44.397,29.234c-10.217-4.101-21.179-6.234-32.269-6.234 s-22.052,2.134-32.269,6.234c-7.465-17.322-24.727-29.234-44.397-29.234C136.682,173.667,115,195.349,115,222 c0,23.612,17.02,43.324,39.436,47.512c-0.733,4.557-1.102,9.175-1.102,13.821C153.334,331.121,192.212,370,240,370 s86.666-38.879,86.666-86.667c0-4.646-0.369-9.266-1.103-13.821C347.981,265.324,365,245.612,365,222 C365,195.349,343.318,173.667,316.667,173.667z M316.667,250.333c-0.846,0-1.715-0.042-2.656-0.129 c-3.341-0.314-6.605,1.077-8.706,3.687c-2.102,2.609-2.756,6.098-1.745,9.291c2.061,6.508,3.106,13.288,3.106,20.151 C306.667,320.094,276.76,350,240,350s-66.667-29.906-66.667-66.667c0-6.863,1.045-13.644,3.106-20.151 c1.012-3.194,0.356-6.683-1.745-9.292c-1.908-2.369-4.778-3.728-7.788-3.728c-0.305,0-0.611,0.014-0.918,0.042 c-0.94,0.087-1.809,0.129-2.655,0.129C147.711,250.333,135,237.623,135,222s12.71-28.333,28.333-28.333 c14.229,0,26.307,10.629,28.094,24.724c0.422,3.331,2.489,6.229,5.502,7.712c3.012,1.484,6.569,1.356,9.468-0.34 c10.17-5.95,21.789-9.096,33.602-9.096c11.812,0,23.432,3.146,33.602,9.096c2.899,1.697,6.455,1.824,9.468,0.34 c3.013-1.483,5.08-4.381,5.502-7.712c1.788-14.095,13.866-24.724,28.094-24.724C332.29,193.667,345,206.377,345,222 S332.29,250.333,316.667,250.333z"
              />
            </svg>
            <span class="burger_nav-item">Мультфильмы</span>
          </router-link>
        </nav>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.btn_burger {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  fill: #fff;
  transition: opacity 0.3s;
}

.btn_cross {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  fill: #fff;
  transition: opacity 0.3s;
}

.icons_cross {
  width: 28px;
  height: 28px;
}

.icon_burger {
  width: 28px;
  height: 28px;
}

.burger_panel {
  position: fixed;
  width: 85%;
  max-width: 295px;
  right: 0;
  top: 82px;
  margin: 0;
  height: calc(100% + 82px);
  padding-bottom: 140px;
  background-color: #171717;
  z-index: 50;
  overflow-y: auto;
  will-change: transform;
  transform: translateX(0%);
  backface-visibility: hidden;
  padding-left: 0;
  border-top: 1px solid hsla(0, 0%, 59%, 0.1);
  transition: all 0.35s ease-in-out;
}

.burger_panel--is-open {
  transform: translateX(-105%);
}

.body-fade {
  overflow: hidden;
  position: relative;
}

.body-fade::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.753);
}

.icon_burger-item {
  width: 20px;
  height: 20px;
  fill: #fff;
  margin-right: 12px;
}

.burger_nav-item {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.burger_nav-item:hover {
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

@media (max-width: 1024px) {
  .search_burger-popup {
    max-width: 235px;
  }
}

@media (max-width: 450px) {
  .burger_block {
    max-width: 250px;
  }

  .search_burger {
    max-width: 200px;
  }

  .search_burger-popup {
    max-width: 200px;
  }
}

@media (min-width: 320px) {
  .burger_panel {
    top: 75px;
  }
}
</style>
