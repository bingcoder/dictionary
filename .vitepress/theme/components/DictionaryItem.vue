<template>
  <div class="section" :data-id="source?.name">
    <div class="word-title">{{ source?.name }}</div>
    <div class="pronounce-container">
      <div class="pronounce-item">
        英：
        <span class="phonetic">{{ source?.ukphone }}</span>
        <button class="pronounce-btn" @click="play(source.name, 1)">
          <svg
            focusable="false"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="icon"
          >
            <path
              d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
            ></path>
            <path
              d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="pronounce-item">
        美：
        <span class="phonetic">{{ source?.usphone }}</span>
        <button class="pronounce-btn" @click="play(source.name, 0)">
          <svg
            focusable="false"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="icon"
          >
            <path
              d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
            ></path>
            <path
              d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <p class="part-of-speech">{{ source?.trans?.join() }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["source"]);

function play(word, type = 0) {
  const audio = new Audio(
    `http://dict.youdao.com/dictvoice?type=${type}&audio=${word}`
  );
  audio.play();
}
</script>
<style scoped>
.section {
  padding: 16px;
  margin-bottom: 32px;
  line-height: normal;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
}

.word-title {
  font-size: 36px;
  margin-bottom: 8px;
  word-wrap: break-word;
}

.phonetic {
  font-size: 18px;
  word-wrap: break-word;
}

.pronounce-container,
.pronounce-item {
  display: flex;
  align-items: center;
}

.pronounce-container {
  flex-wrap: wrap;
}

.pronounce-item {
  margin-right: 16px;
}

.pronounce-btn {
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  margin-left: 8px;
  padding: 8px;
  border-radius: 20px;
  transition: all 0.3s;
}

.pronounce-btn:hover {
  background-color: var(--vp-c-gray-2);
}

.icon {
  fill: currentColor;
}

/* .example {
  color: #666;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 3px solid #4a90e2;
} */

.dark .pronounce-btn {
  color: #dfdfd6;
}
</style>
