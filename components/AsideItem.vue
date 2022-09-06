<template>
  <li
    class="uppercase cursor-pointer transition-all hover:text-gold hover:font-bold active:text-gold"
  >
    <NuxtLink :to="routePath">
      {{ route }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  route: string;
  routePath: string;
}>();
</script>
