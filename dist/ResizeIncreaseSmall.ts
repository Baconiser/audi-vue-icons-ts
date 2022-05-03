import { defineComponent } from 'vue';export default defineComponent({name:"ResizeIncreaseSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M15,2.5 L21.4919,2.5 L21.4919,9 M13.5,10.5 L21.5,2.5 M10.5,13.5 L2.5,21.5 M2.5,15 L2.5,21.5 L8.9919,21.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})