import { defineComponent } from 'vue';export default defineComponent({name:"RotateImageLeftSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M14.1,1.3 L11,4.5 L14.1,7.8 M22.5,14 C22.2,11.6 21.2,9 19.3,7.1 C17.2,5 14.7,4.5 11.9,4.5 L11,4.5 M2.5,12.5 L14.5,12.5 C15.6,12.5 16.5,13.4 16.5,14.5 L16.5,21.5 L4.5,21.5 C3.4,21.5 2.5,20.6 2.5,19.5 L2.5,12.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})