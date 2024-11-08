import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faTwitch, faGithub, faLetterboxd, faLastfm } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitch, faGithub, faLetterboxd, faLastfm);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
