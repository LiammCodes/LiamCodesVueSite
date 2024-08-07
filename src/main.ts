import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
// import './assets/fonts.css' // Import the font CSS here
import './assets/fonts/FraguaPro-BoldItalic/style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitch, faGithub);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
