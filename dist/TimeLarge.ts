import { defineComponent } from 'vue';export default defineComponent({name:"TimeLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M23.5,26.5 C25.1568542,26.5 26.5,25.1568542 26.5,23.5 C26.5,21.8431458 25.1568542,20.5 23.5,20.5 C21.8431458,20.5 20.5,21.8431458 20.5,23.5 C20.5,25.1568542 21.8431458,26.5 23.5,26.5 Z M41.5,23.5 C41.5,33.4 33.4,41.5 23.5,41.5 C13.6,41.5 5.5,33.4 5.5,23.5 C5.5,13.6 13.6,5.5 23.5,5.5 C33.4,5.5 41.5,13.6 41.5,23.5 Z M23.5,20.5 L23.5,9 M26.5,23.5 L34,23.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})