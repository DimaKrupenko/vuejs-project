// import { Vue } from 'vue';

// const Button = Vue.component('Btn-b', {
//   render(createElement) {
//     return createElement('button', this.$slots.default);
//   },
// });

// export default Button;

import { h } from 'vue';

const Button = {
  render() {
    return h('button', this.$slots.default());
  },
};

export default Button;
