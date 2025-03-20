<template>
  <h1>
    {{ dictionary.name }}
  </h1>
  <h2 v-if="dictionary.name !== dictionary.description">
    {{ dictionary.description }}
  </h2>
  <hr style="margin-bottom: 48px" />
  <DictionaryItem v-for="item in data" :key="item.name" :source="item" />
</template>
<script setup>
import { useData } from "vitepress";
import { onMounted, nextTick, ref } from "vue";
import catalogue from "../../../src/public/catalogue";
const { params } = useData();
const data = ref();

const dictionary = catalogue.find((item) => item.url === params.value.dict);

onMounted(() => {
  fetch(`/dictionary/dicts/${params.value.dict}.json`)
    .then((res) => res.json())
    .then((res) => {
      data.value = res;
      window.localSearchFile = res;
      nextTick(() => {
        window.dispatchEvent(new Event("hashchange"));
      });
    });
});

// watchEffect(() => {
//   if (dictionary) {

//   }
// })
</script>
<style scoped></style>
