<template>
  <figure class="rounded-hg drop-shadow-3xl overflow-hidden">
    <img :src="image" :alt="title" />
    <div class="group pt-8 px-6 pb-10 space-y-2 overflow-hidden bg-white">
      <figcaption class="font-bold text-charleston group-hover:text-gold">
        {{ title }}
      </figcaption>
      <p class="text-charleston">
        {{ content }}
      </p>

      <a
        class="block font-bold uppercase invisible opacity-0 absolute !mt-8 transition-all duration-300 group-hover:static group-hover:visible group-hover:opacity-100 text-gold"
        >Ver más</a
      >
    </div>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
  image: string;
  title: string;
}>();
</script>
