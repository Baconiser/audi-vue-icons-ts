import { defineComponent } from 'vue';export default defineComponent({name:"ShoppingBasketLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M13.8,19.5 L43.8,19.5 M10.6,11.5 L46.5,11.5 L41,27.5 L16.9,27.5 M38.5,44.5 C40.1568542,44.5 41.5,43.1568542 41.5,41.5 C41.5,39.8431458 40.1568542,38.5 38.5,38.5 C36.8431458,38.5 35.5,39.8431458 35.5,41.5 C35.5,43.1568542 36.8431458,44.5 38.5,44.5 Z M22.5,44.5 C24.1568542,44.5 25.5,43.1568542 25.5,41.5 C25.5,39.8431458 24.1568542,38.5 22.5,38.5 C20.8431458,38.5 19.5,39.8431458 19.5,41.5 C19.5,43.1568542 20.8431458,44.5 22.5,44.5 Z M1,3.5 L7.5,3.5 L20,35.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})