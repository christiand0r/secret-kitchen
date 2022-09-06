<template>
  <div class="grid grid-cols-card gap-8">
    <Card
      v-for="article of articles"
      :key="article.id"
      :title="article.title"
      :image="article.image"
      :content="article.content"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useArticleStore } from "~~/stores/article";

const store = useArticleStore();
const { articles } = storeToRefs(store);

store.getAllArticles();
</script>
