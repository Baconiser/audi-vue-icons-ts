import { defineComponent } from 'vue';export default defineComponent({name:"SystemFollowLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M21.4,25.6 L16,31 L21.4,25.6 Z M31.3,21.4 L30.6,22.1 L28.1,21.8 L26.7,23.2 L25.8,26.9 L24.3,28.4 L18.6,22.7 L20.1,21.2 L23.8,20.3 L25.2,18.9 L24.9,16.4 L25.6,15.7 L31.3,21.4 Z M23.5,45.5 C35.6502645,45.5 45.5,35.6502645 45.5,23.5 C45.5,11.3497355 35.6502645,1.5 23.5,1.5 C11.3497355,1.5 1.5,11.3497355 1.5,23.5 C1.5,35.6502645 11.3497355,45.5 23.5,45.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})