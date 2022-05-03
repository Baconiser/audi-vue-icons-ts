import { defineComponent } from 'vue';export default defineComponent({name:"MyaudiDestinationsSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M13.5,10.5 L10.5,10.5 C9.4,10.5 8.5,9.6 8.5,8.5 L8.5,5.5 C8.5,4.4 9.4,3.5 10.5,3.5 L13.5,3.5 C14.6,3.5 15.5,4.4 15.5,5.5 L15.5,8.5 C15.5,9.6 14.6,10.5 13.5,10.5 Z M15,21.5 L5.5,21.5 L5.5,15 C5.5,15 5.4,13.5 6.7,13.5 L12,13.5 M19,23 C19,23 15,17.2 15,15 C15,12.8 16.8,11 19,11 C21.2,11 23,12.8 23,15 C23,17.2 19,23 19,23 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})