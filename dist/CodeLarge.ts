import { defineComponent } from 'vue';export default defineComponent({name:"CodeLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M36.5,36.5 L42.5,36.5 L42.5,42.5 L36.5,42.5 L36.5,36.5 Z M26.5,36.5 L32.5,36.5 L32.5,42.5 L26.5,42.5 L26.5,36.5 Z M36.5,26.5 L42.5,26.5 L42.5,32.5 L36.5,32.5 L36.5,26.5 Z M26.5,26.5 L32.5,26.5 L32.5,32.5 L26.5,32.5 L26.5,26.5 Z M9.5,30.5 L17.5,30.5 L17.5,38.5 L9.5,38.5 L9.5,30.5 Z M21.5,42.5 L5.5,42.5 L5.5,26.5 L18.5,26.5 C20.2,26.5 21.5,27.8 21.5,29.5 L21.5,42.5 Z M30.5,9.5 L38.5,9.5 L38.5,17.5 L30.5,17.5 L30.5,9.5 Z M42.5,21.5 L29.5,21.5 C27.8,21.5 26.5,20.2 26.5,18.5 L26.5,5.5 L42.5,5.5 L42.5,21.5 Z M9.5,9.5 L17.5,9.5 L17.5,17.5 L9.5,17.5 L9.5,9.5 Z M18.5,21.5 L5.5,21.5 L5.5,5.5 L21.5,5.5 L21.5,18.5 C21.5,20.2 20.2,21.5 18.5,21.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})