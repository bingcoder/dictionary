import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Dictionary from "./components/Dictionary.vue";
import DictionaryItem from "./components/DictionaryItem.vue";

import "./search.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Dictionary", Dictionary);
    app.component("DictionaryItem", DictionaryItem);
  },
} satisfies Theme;
