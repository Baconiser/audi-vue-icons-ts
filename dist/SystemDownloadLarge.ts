import { defineComponent } from 'vue';export default defineComponent({name:"SystemDownloadLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M17,30.5 L30,30.5 M23.5,16 L23.5,27 M27.9,22.6 L23.5,27 L19.1,22.6 M23.5,45.5 C35.6502645,45.5 45.5,35.6502645 45.5,23.5 C45.5,11.3497355 35.6502645,1.5 23.5,1.5 C11.3497355,1.5 1.5,11.3497355 1.5,23.5 C1.5,35.6502645 11.3497355,45.5 23.5,45.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})