<script setup>
defineProps({
  icon: String,
  buttonLabel: String
})
</script>

<template>
  <button class="icon-button-container">
    <div class="icon-container">
      <svg
        v-if="icon === 'icon1'"
        aria-hidden="true"
        class="icon"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <path
          d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
        ></path>
      </svg>
      <svg
        v-else-if="icon === 'icon2'"
        aria-hidden="true"
        class="icon"
        focusable="false"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 487.222 487.222"
        style="enable-background: new 0 0 487.222 487.222"
        xml:space="preserve"
      >
        <g>
          <path
            d="M486.554,186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6l-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0,0c-5.1,0-9.8,2.9-12.1,7.6 l-67.5,137.9l-152,22.6c-5.1,0.8-9.3,4.3-10.9,9.2s-0.2,10.3,3.5,13.8l110.3,106.9l-25.5,151.4c-0.9,5.1,1.2,10.2,5.4,13.2 c2.3,1.7,5.1,2.6,7.9,2.6c2.2,0,4.3-0.5,6.3-1.6l135.7-71.9l136.1,71.1c2,1,4.1,1.5,6.2,1.5l0,0c7.4,0,13.5-6.1,13.5-13.5 c0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5l109.6-107.5C486.854,197.111,488.154,191.711,486.554,186.811z M349.554,293.911 c-3.2,3.1-4.6,7.6-3.8,12l22.9,131.3l-118.2-61.7c-3.9-2.1-8.6-2-12.6,0l-117.8,62.4l22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9 l-95.6-92.8l131.9-19.6c4.4-0.7,8.2-3.4,10.1-7.4l58.6-119.7l59.4,119.4c2,4,5.8,6.7,10.2,7.4l132,18.8L349.554,293.911z"
          />
        </g>
      </svg>
      <svg
        v-else-if="icon === 'icon3'"
        aria-hidden="true"
        class="icon"
        focusable="false"
        id="Capa_1"
        enable-background="new 0 0 482.239 482.239"
        viewBox="0 0 482.239 482.239"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m378.902 275.565c-34.183 0-64.306 16.874-83.127 42.521l-94.044-47.033c2.912-9.539 4.943-19.456 4.943-29.934s-2.031-20.397-4.943-29.934l94.044-47.033c18.821 25.647 48.944 42.521 83.127 42.521 56.983 0 103.337-46.354 103.337-103.337s-46.353-103.336-103.337-103.336-103.337 46.354-103.337 103.337c0 10.478 2.033 20.395 4.945 29.932l-94.047 47.035c-18.821-25.647-48.944-42.521-83.127-42.521-56.983 0-103.336 46.353-103.336 103.337s46.353 103.337 103.337 103.337c34.183 0 64.306-16.874 83.127-42.521l94.044 47.035c-2.912 9.536-4.943 19.453-4.943 29.932 0 56.983 46.353 103.337 103.337 103.337s103.337-46.354 103.337-103.337-46.354-103.338-103.337-103.338zm0-241.119c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.897 68.891-68.891 68.891-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891zm-275.565 275.565c-37.995 0-68.891-30.914-68.891-68.891 0-37.978 30.897-68.891 68.891-68.891 37.995 0 68.891 30.914 68.891 68.891s-30.896 68.891-68.891 68.891zm275.565 137.782c-37.995 0-68.891-30.914-68.891-68.891s30.897-68.891 68.891-68.891c37.995 0 68.891 30.914 68.891 68.891 0 37.978-30.896 68.891-68.891 68.891z"
        />
      </svg>
      <svg
        v-else-if="icon === 'icon4'"
        aria-hidden="true"
        class="icon"
        focusable="false"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Layer_115" data-name="Layer 115">
          <path
            d="m19.69 9.11-12.89-6.53a3.28 3.28 0 0 0 -3.24 0 3.32 3.32 0 0 0 -1.44 3v12.98a3.34 3.34 0 0 0 1.44 3 2.79 2.79 0 0 0 1.48.4 3.93 3.93 0 0 0 1.76-.45l12.89-6.51c1.91-1 2.19-2.24 2.19-2.92s-.28-2-2.19-2.97z"
          />
        </g>
      </svg>
      <svg
        v-else-if="icon === 'icon5'"
        aria-hidden="true"
        class="icon"
        focusable="false"
        id="svg1569"
        viewBox="0 0 6.3499999 6.3500002"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <g id="layer1" transform="translate(0 -290.65)">
          <path
            id="path2489"
            d="m1.0505789 290.64223a.52921961.52921961 0 0 0 -.52193028.53743v1.32189a.52942504.52942504 0 1 0 0 1.05885h1.05884928a.52942504.52942504 0 1 0 0-1.05885v-1.32189a.52921961.52921961 0 0 0 -.536919-.53743zm2.1171854 0a.52921961.52921961 0 0 0 -.521417.53743v2.64428a.52943.52943 0 0 0 0 1.05886h1.0583333a.52943.52943 0 0 0 0-1.05886v-2.64428a.52921961.52921961 0 0 0 -.5369163-.53743zm2.1151162 0a.52921961.52921961 0 0 0 -.5193479.53743v.52917a.52921961.52921961 0 1 0 1.0562643 0v-.52917a.52921961.52921961 0 0 0 -.5369164-.53743zm.5679229 2.12442a.52921961.52921961 0 0 0 -.031007.001h-1.0562638a.52921961.52921961 0 1 0 0 1.05626v2.64635a.52921961.52921961 0 1 0 1.0562643 0v-2.64635a.52921961.52921961 0 1 0 .031007-1.05729zm-4.8002245 1.31516a.52921961.52921961 0 0 0 -.52193028.53744v1.85105a.52942465.52942465 0 0 0 1.05884928 0v-1.85105a.52921961.52921961 0 0 0 -.536919-.53744zm2.1171854 1.3224a.52921961.52921961 0 0 0 -.521417.53692v.52917a.529297.529297 0 0 0 1.0583333 0v-.52917a.52921961.52921961 0 0 0 -.5369163-.53692z"
            font-variant-ligatures="normal"
            font-variant-position="normal"
            font-variant-caps="normal"
            font-variant-numeric="normal"
            font-variant-alternates="normal"
            font-feature-settings="normal"
            text-indent="0"
            text-align="start"
            text-decoration-line="none"
            text-decoration-style="solid"
            text-decoration-color="rgb(0,0,0)"
            text-transform="none"
            text-orientation="mixed"
            white-space="normal"
            shape-padding="0"
            isolation="auto"
            mix-blend-mode="normal"
            solid-color="rgb(0,0,0)"
            solid-opacity="1"
            vector-effect="none"
          />
        </g>
      </svg>
    </div>

    <span class="icon-text">{{ buttonLabel }}</span>
  </button>
</template>

<style scoped>
.icon-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 85px;
  width: 85px;
  margin-right: 15px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49px;
  height: 49px;
  background-color: rgba(153, 153, 191, 0.2);
  backdrop-filter: blur(16px);
  border-radius: 100%;
  margin-bottom: 7px;
}

.icon {
  width: 22px;
  height: 22px;
  fill: white;
  transition: fill var(--duration);
}

.icon-text {
  font-size: 11px;
  line-height: 18px;
  color: white;
}

@media (max-width: 450px) {
  .icon-button-container {
    margin-right: 5px;
  }
}
</style>
