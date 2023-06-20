import Vue from 'vue';

const Button = Vue.component('Btn-b', {
  render(createElement) {
    return createElement('button', this.$slots.default);
  },
});

export default Button;
