import { defineComponent } from 'vue';export default defineComponent({name:"ArrowLeftLightLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M14.5,14 L14.5,6.5 L22,6.5 M30.5,42 L30.5,27.5 C30.5,24.3 29.2,21.3 27,19 L14.5,6.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})