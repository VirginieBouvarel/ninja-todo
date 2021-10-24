import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  // iconfont: 'mdi', //by default
  theme: {
    themes: {
      light: {
        // only when the "color" props is used for bg
        //ok with primary--text for texts
        primary: '#9652ff',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70',
      }
    }

  }
});
