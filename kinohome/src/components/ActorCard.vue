<script setup></script>

<template>
  <a class="actor_card flex flex-col outline-none" href="/name/:id">
    <div class="actor_card-image">
      <img
        class="img-actor"
        src="./../assets/img/actor.jpg"
        alt="Постер актера или режиссера"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
      />
    </div>
    <span class="card_name">Мика Эбби</span>
    <span class="card_profession">Актёр</span>
  </a>
</template>

<style scoped>
.actor_card {
  color: #fff;
  padding: 0 10px;
  transition: transform 0.3s;
}

.actor_card-image {
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  margin: 0 auto 15px;
  border-radius: 100%;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  background-color: #111214;
}

.img-actor {
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
}

.card_name {
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 5px;
}

.card_profession {
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.6);
}

@media (max-width: 576px) {
  .card_name {
    font-size: 12px;
    line-height: 16px;
  }
  .card_profession {
    font-size: 10px;
  }
}
</style>
