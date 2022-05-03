import { defineComponent } from 'vue';export default defineComponent({name:"AnnouncementsLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M23.5,12.5 L23.5,26.5 L17.5,26.5 L23,42.5 L15.5,42.5 L10.5,26.5 L3.5,26.5 L3.5,12.5 L23.5,12.5 Z M23.5,12.5 C30.8,12.5 41,6.5 41,6.5 C43,6.5 44.5,11.7 44.5,19.5 C44.5,27.3 43,32.5 41,32.5 C41,32.5 30.8,26.5 23.5,26.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})