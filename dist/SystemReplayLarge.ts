import { defineComponent } from 'vue';export default defineComponent({name:"SystemReplayLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M16.4,27.2 C18.4,31.1 23.2,32.7 27.2,30.7 C31.2,28.7 32.7,23.9 30.7,19.9 C28.7,15.9 23.9,14.4 19.9,16.4 C18.2,17.3 16.8,18.7 16.1,20.5 M20,20.5 L15.5,20.5 L15.5,16 M23.5,45.5 C35.6502645,45.5 45.5,35.6502645 45.5,23.5 C45.5,11.3497355 35.6502645,1.5 23.5,1.5 C11.3497355,1.5 1.5,11.3497355 1.5,23.5 C1.5,35.6502645 11.3497355,45.5 23.5,45.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})