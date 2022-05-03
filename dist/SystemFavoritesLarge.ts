import { defineComponent } from 'vue';export default defineComponent({name:"SystemFavoritesLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M23.5,15.3 L25.8,20 L31,20.8 L27.2,24.5 L28.1,29.7 L23.4,27.2 L18.7,29.7 L19.6,24.5 L15.8,20.8 L21,20 L23.5,15.3 Z M23.5,45.5 C35.6502645,45.5 45.5,35.6502645 45.5,23.5 C45.5,11.3497355 35.6502645,1.5 23.5,1.5 C11.3497355,1.5 1.5,11.3497355 1.5,23.5 C1.5,35.6502645 11.3497355,45.5 23.5,45.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})