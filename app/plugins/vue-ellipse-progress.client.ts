// plugins/vue-ellipse-progress.client.ts
import veProgress from "vue-ellipse-progress";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(veProgress);
});