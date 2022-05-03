import { defineComponent } from 'vue';export default defineComponent({name:"RecommendedDestinationSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M8,11 L8,15 L3,15 L3,11 L8,11 Z M14,6 L14,11 L8,11 L8,6 L14,6 Z M8,1 L8,6 L3,6 L3,1 L8,1 Z M19,2 L19,6 L14,6 L14,2 L19,2 Z" fill="currentColor" fill-rule="nonzero"/><path d="M1.5,1 L1.5,23 M10.5,15.5 L9.5,14.5 L3.5,14.5 L3.5,1.5 L11.5,1.5 L12.5,2.5 L18.5,2.5 L18.5,8 M17,18 L16.5,16.5 C15.3,15.8 14.5,15 14.5,13.5 C14.5,11.3 16.3,9.5 18.5,9.5 C20.7,9.5 22.5,11.3 22.5,13.5 C22.5,14.9 21.6,15.8 20.5,16.5 L20,18 M20,19.5 L17,19.5 M20,21.5 L17,21.5 M18,23.5 L19,23.5" stroke="currentColor"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})