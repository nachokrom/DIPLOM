<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()
const token = computed(() => authStore.userInfo.token)


const showPopup = ref(false);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

// eslint-disable-next-line no-unused-vars
const onClickOutside = (MouseEvent) => {
  if (showPopup.value && event.target instanceof Node && !document.querySelector('.popup')?.contains(event.target)) {
   showPopup.value = false;
  }
};

/*const logout = () => {
  user.isAuthenticated = false;
  showPopup.value = false;
  // Дополнительная логика для выхода
};*/


onMounted(() => {
  document.addEventListener('mousedown', onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onClickOutside);
});
</script>

<template>
    <div>
        <div v-if="!token">
            <router-link to="/signin">
                <button
                class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
                
            >
                Войти
            </button>
            </router-link>
        </div>
        <div v-else class="relative">
            <div class="px-1 cursor-pointer">
                <img
                class="avatar-image rounded-full"
                src="./../../../assets/icons/user_icon.png"
                alt="Avatar"
                @click="togglePopup"
            />
            </div>
            <div v-if="showPopup" v-show="showPopup" @click.self="showPopup = false" class="popup absolute z-10 w-full bg-[#292929] mt-1 rounded shadow-2xl">
                <div class="flex flex-col px-1 py-1 border-b">
                    <div class="flex items-center justify-between py-1">
                        <img
                            class="avatar-image rounded-full"
                            src="./../../../assets/icons/user_icon.png"
                            alt="Avatar"
                        />
                        <div class="user-name px-1">
                            <p>Тестовое имя</p>
                        </div>
                    </div>
                    <div class="flex items-center text-gray-400">
                        <p>Пользователь</p> 
                    </div>         
                </div>


                <div class="flex flex-col py-3 w-full">
                    <router-link v-if="token" to="/profile" class="popup-item cursor-pointer py-2 rounded hover:bg-blue-700 hover:text-white px-2">
                        Профиль
                    </router-link>
                    <router-link to="/favorite" class="popup-item cursor-pointer py-2 rounded hover:bg-blue-700 hover:text-white px-2">
                        Избранное
                    </router-link>
                    <a class="popup-item cursor-pointer py-2 rounded hover:bg-blue-700 hover:text-white px-2">Выйти</a>
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
    top: 170%;
    z-index: 10;
}

.avatar-image {
    width: 32px;
    height: 32px;
}

@media (max-width: 1024px) {
    .popup {
        top: 140%;
    }
}
</style>