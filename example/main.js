import { createApp } from 'vue';
import App from './App.vue';
// Uncomment imports if you want global Shimmer implementation
// import Shimmer from 'vue3-shimmer';

const app = createApp(App);
// app.use(Shimmer);

app.mount('#app');
