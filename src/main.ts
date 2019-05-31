import Vue from 'vue'
import Sample from './index.vue'

// iOSの大枠のスクロール抑制のために入れる
// https://qiita.com/peutes/items/d74e5758a36478fbc039
document.addEventListener('touchstart', event => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, true);

// コンポーネントの登録
Vue.component('sample', Sample);

// vueの初期化
new Vue({el: '#app'})