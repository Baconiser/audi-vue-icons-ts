import { defineComponent } from 'vue';export default defineComponent({name:"LightsFullBeamSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M0,15.5 L7,15.5 L0,15.5 Z M0,11.5 L7,11.5 L0,11.5 Z M0,7.5 L7,7.5 L0,7.5 Z M23.5,11.5 C23.5,8.1 16.5,5.1 12.4,3.5 C10.9,2.9 9.5,3.6 9.5,5.1 L9.5,18 C9.5,19.5 10.9,20.2 12.4,19.6 C16.5,17.9 23.5,14.9 23.5,11.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})