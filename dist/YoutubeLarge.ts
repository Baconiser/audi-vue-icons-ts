import { defineComponent } from 'vue';export default defineComponent({name:"YoutubeLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M38.7,18 C38.7,18 38.4,15.9 37.5,15 C36.4,13.8 35.1,13.8 34.5,13.7 C30.3,13.5 24,13.5 24,13.5 L24,13.5 C24,13.5 17.7,13.5 13.5,13.8 C12.9,13.9 11.6,13.9 10.5,15.1 C9.6,16 9.3,18.1 9.3,18.1 C9.3,18.1 9,20.4 9,22.9 L9,25.2 C9,27.6 9.3,30 9.3,30 C9.3,30 9.6,32.1 10.5,33 C11.6,34.2 13.1,34.2 13.8,34.3 C16.2,34.5 24,34.6 24,34.6 C24,34.6 30.3,34.6 34.5,34.3 C35.1,34.2 36.4,34.2 37.5,33 C38.4,32.1 38.7,30 38.7,30 C38.7,30 39,27.6 39,25.1 L39,22.8 C39,20.4 38.7,18 38.7,18 Z M20.9,27.9 L20.9,19.5 L29,23.7 L20.9,27.9 Z" fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})