<template>
  <div id="my-markdown" class="markdown-body">
    <VMarkdownView :content="md"></VMarkdownView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { VMarkdownView } from 'vue3-markdown';
import axios from 'axios';
import 'vue3-markdown/dist/style.css';

const md = ref('');

onMounted(async () => {
  // Fetch README.md from the backend
  try {
    const response = await axios.get("/api/public/docs/README.md");
    md.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
@import "../assets/css/github-markdown.css";
.markdown-body {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 40px;
}
</style>
