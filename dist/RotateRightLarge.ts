import { defineComponent } from 'vue';export default defineComponent({name:"RotateRightLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M32.3,22 L27.9,27.7 L33.9,32.1 M28.3,28 C34.8,27.3 39.5,25 39.5,22.3 C39.5,19 32.6,16.4 24,16.4 C15.4,16.4 8.5,19.1 8.5,22.4 C8.5,24.8 12.4,26.9 17.9,27.8" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})