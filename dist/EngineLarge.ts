import { defineComponent } from 'vue';export default defineComponent({name:"EngineLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M18,9.5 L29,9.5 L18,9.5 Z M23.5,9.5 L23.5,13.5 L23.5,9.5 Z M8.5,24.5 L3.5,24.5 L8.5,24.5 Z M3.5,19 L3.5,31 L3.5,19 Z M39.5,30.5 L36.5,30.5 L36.5,33.8 C36.5,36.5 34.3,36.5 34.3,36.5 L20.3,36.5 L15.5,30.5 L8.5,30.5 L8.5,18.4 L14.5,13.5 L29.6,13.5 L36.5,19.5 L36.5,22.4 L39.5,22.4 L39.5,18.5 L41.5,18.5 C43.2,18.5 44.5,19.7 44.5,21.4 L44.5,30.5 C44.5,32.2 43.2,33.5 41.5,33.5 L39.5,33.5 L39.5,30.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})