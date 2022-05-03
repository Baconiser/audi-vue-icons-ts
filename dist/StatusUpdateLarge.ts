import { defineComponent } from 'vue';export default defineComponent({name:"StatusUpdateLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M39.5,33.5 L28.5,33.5 L28.5,44.5 M31,15.5 L39.5,15.5 L39.5,33.5 L28.5,44.5 L8.5,44.5 L8.5,15.5 L23,15.5 M30.7,9 L23.7,21 M32.5,9.5 C34.4329966,9.5 36,7.93299662 36,6 C36,4.06700338 34.4329966,2.5 32.5,2.5 C30.5670034,2.5 29,4.06700338 29,6 C29,7.93299662 30.5670034,9.5 32.5,9.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})