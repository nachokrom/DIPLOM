<script setup>
const copyToClipboard = () => {
  const urlToCopy = window.location.href // получаем URL текущей страницы

  const el = document.createElement('textarea')
  el.value = urlToCopy
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  // Вы можете заменить alert() на другой способ уведомления, если это необходимо
  alert('Ссылка скопирована в буфер обмена.')
}
</script>

<template>
  <button @click="copyToClipboard" class="copy-button">
    <div class="copy_icon-container">
      <svg
        class="copy-icon"
        id="svg2491"
        viewBox="0 0 6.3499999 6.3500002"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <g id="layer1" transform="translate(0 -290.65)">
          <path
            id="path2516"
            d="m1.5818148 290.91248a.26460982.26460982 0 0 0 -.1819011.0801l-1.05833333 1.05833a.26460982.26460982 0 0 0 0 .3731l1.05833333 1.05885a.26460982.26460982 0 1 0 .3751686-.3731l-.87126233-.87126.87126233-.87282a.26460982.26460982 0 0 0 -.1932675-.4532zm.269232 1.05627a.2648413.2648413 0 1 0 0 .52968h3.7052013v.78496a.2646485.2646485 0 0 0 .5291667 0v-.78496c0-.28859-.2405856-.52968-.5291667-.52968zm-1.32601493 2.11718a.26460982.26460982 0 0 0 -.25993461.26768v.78548c0 .28858.24110421.52917.52968531.52917h3.70261633a.264648.264648 0 0 0 0-.52917h-3.70261633v-.78548a.26460982.26460982 0 0 0 -.2697507-.26768zm4.23436533 0a.26460982.26460982 0 0 0 -.1834515.45527l.8707491.87126-.8707491.87075a.26460982.26460982 0 1 0 .3731049.37517l1.0583333-1.05833a.26460982.26460982 0 0 0 0-.37517l-1.0583333-1.05885a.26460982.26460982 0 0 0 -.1896534-.0801z"
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

    <span class="copy-text">Копировать ссылку</span>
  </button>
</template>

<style scoped>
.copy-button {
  display: flex;
  align-items: center;
  margin-top: 8px;
  cursor: pointer;
}

.copy_icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: hsla(0, 0%, 100%, 0.1);
  margin-right: 13px;
}

.copy-icon {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.copy-text {
  font-size: 15px;
  font-weight: 300;
}
</style>
