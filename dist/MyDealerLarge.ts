import { defineComponent } from 'vue';export default defineComponent({name:"MyDealerLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M19,27.5 L7.5,27.5 M12.9,39.5 L9.5,39.5 C8.4,39.5 7.5,38.6 7.5,37.5 C7.5,37.5 7.5,37.5 7.5,37.5 L7.5,2.5 L23.5,2.5 L23.5,12.9 M15.5,45.5 L15.5,33.5 C15.5,31.8 16.8,30.5 18.5,30.5 L36.5,30.5 C38.2,30.5 39.5,31.8 39.5,33.5 L39.5,45.5 L15.5,45.5 Z M24.5,15.5 L30.5,15.5 C32.2,15.5 33.5,16.8 33.5,18.5 L33.5,24.5 C33.5,26.2 32.2,27.5 30.5,27.5 L24.5,27.5 C22.8,27.5 21.5,26.2 21.5,24.5 L21.5,18.5 C21.5,16.8 22.8,15.5 24.5,15.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})