import { defineComponent } from 'vue';export default defineComponent({name:"ClimateAutoLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M6,44.5 L42,44.5 M36.5,4.5 L36.5,12.5 C36.5,12.5 36.2,16.3 38.2,19.9 C40.2,23.5 42,26 42,30 C42,34 40.3,40.5 34,40.5 M32,10 L36.5,4.5 L41,10 M24.5,4.5 L24.5,12.5 C24.5,12.5 24.2,16.3 26.2,19.9 C28.2,23.5 30,26 30,30 C30,34 28.3,40.5 22,40.5 M20,10 L24.5,4.5 L29,10 M18,13.5 L14.5,13.5 L18,13.5 Z M18,10.5 L14.5,10.5 L18,10.5 Z M18,7.5 L14.5,7.5 L18,7.5 Z M14.5,20.5 L10.5,20.5 L14.5,20.5 Z M14.5,28 L14.5,5.5 C14.5,4.4 13.6,3.5 12.5,3.5 C11.4,3.5 10.5,4.4 10.5,5.5 L10.5,28.8 C8.2,29.6 6.5,31.8 6.5,34.5 C6.5,37.8 9.2,40.5 12.5,40.5 C15.8,40.5 18.5,37.8 18.5,34.5 C18.5,31.9 16.8,29.7 14.5,28.8 L14.5,28 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})