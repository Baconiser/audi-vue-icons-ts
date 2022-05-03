import { defineComponent } from 'vue';export default defineComponent({name:"TransmissionLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M37.5,13 L37.5,36 M28.5,13 L28.5,36 M19.5,13 L19.5,36 M10.5,13 L10.5,24.5 L37.5,24.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})