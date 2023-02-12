import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NutUI from '@/components/packages/nutui.vue';
import '@/components/packages/utils/touchEmulator';
createApp(App).use(router).use(NutUI).mount('#app');
