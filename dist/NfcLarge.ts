import { defineComponent } from 'vue';export default defineComponent({name:"NfcLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M30.1,24.9 C33.5,19.2 33.4,12.1 30,6.4 M36.1,29.4 C40.8,20.8 40.8,10.3 35.9,1.7 M23.2,8.7 C25,13.1 25.1,18 23.2,22.5 L10.5,12 C9.9,15.5 10.3,19.1 11.5,22.5 M22.5,46 L22.5,36.5 L29,36.5 M28,41.5 L23,41.5 M10.5,46 L10.5,37 L18.5,45 L18.5,36 M38.5,44.4 C37.7,45 36.8,45.4 35.8,45.4 C33.4,45.4 31.5,43.5 31.5,41.1 C31.5,38.7 33.4,36.8 35.8,36.8 C36.5,36.8 37.2,37 37.8,37.3" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})