import { createApp } from 'vue'
import App from './App.vue'
/*import router from './router/index'*/
import router from './router'

import './assets/main.css';



/* import the fontawesome core */
import {
    library
} from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

/* import specific icons */
// definir iconos que voy a usar
import {
    faUserSecret,
    faBars,
    faHouseUser,
    faScrewdriverWrench,
    faFire,
    faInfo,
    faBook,
    faHeadphones,
    faEye,
    faComment,
    faArrowLeft,
    faPowerOff

} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faBars, faHouseUser, faScrewdriverWrench, faFire, faInfo,faBook,faHeadphones,faEye,faComment,faArrowLeft,faPowerOff);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
