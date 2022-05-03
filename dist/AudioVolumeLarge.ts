import { defineComponent } from 'vue';export default defineComponent({name:"AudioVolumeLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M14.5,30.5 L6.5,30.5 L6.5,17.5 L14.5,17.5 L14.5,30.5 Z M14.7,30.2 L23.5,36.5 L23.5,11.5 L14.7,17.8 M35.3,11.3 C35.3,11.3 49.1,23.4 35.4,36.7 M30.3,16.7 C30.3,16.7 37.1,23.8 30.3,31.3" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})