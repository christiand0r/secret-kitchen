import { defineStore } from "pinia";
import { articlesApi } from "~~/api";
import type { Article } from "../interfaces";

export interface ArticleState {
  articles: Article[];
}

const state = (): ArticleState => ({
  articles: [],
});

const actions = {
  async getAllArticles(filter?: string) {
    const { data } = await articlesApi.get("/", {
      params: { filter },
    });
    console.log("data", data);

    this.articles = data;
  },
};

const getters = {
  getById: (state: ArticleState) => (id: number) => {
    return state.articles.find((article) => article.id === id);
  },
  getOrdered: (state: ArticleState) =>
    state.articles.sort((a: Article, b: Article) => {
      const obtainMilliseconds = (stamp: string) =>
        new Date(stamp).getMilliseconds();

      return obtainMilliseconds(a.createdAt) - obtainMilliseconds(b.createdAt);
    }),
};

export const useArticleStore = defineStore("articleStore", {
  state,
  actions,
  getters,
});
