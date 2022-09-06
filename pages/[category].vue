<template>
  <div class="space-y-24">
    <div class="grid grid-cols-card gap-8">
      <Card
        v-for="article of articles"
        :key="article.id"
        :title="article.title"
        :image="article.image"
        :content="article.content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useArticleStore } from "~~/stores/article";
import { TextBrush } from "../.nuxt/components";
const route = useRoute();
const store = useArticleStore();
const { articles } = storeToRefs(store);

onMounted(async () => {
  const category = route.params.category;

  store.getAllArticles(category);
});
</script>
