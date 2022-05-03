import { defineComponent } from 'vue';export default defineComponent({name:"FavoriteSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M11.5 1.9L14.7 8.3 21.8 9.3 16.7 14.3 17.9 21.4 11.6 18.1 5.3 21.4 6.5 14.3 1.4 9.3 8.5 8.3z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})