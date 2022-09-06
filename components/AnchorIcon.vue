<template>
  <a
    :href="props.link"
    :target="props.target"
    class="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:h-12 lg:w-12 rounded-full border-2"
    :class="color"
  >
    <font-awesome-icon :icon="props.icon" class="w-1/2 h-1/2" />
  </a>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  link: string;
  color?: string;
  target?: string;
}

const props = withDefaults(defineProps<Props>(), {
  target: "_blank",
  color: "border-black color-black",
});
</script>
