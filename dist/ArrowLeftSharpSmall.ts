import { defineComponent } from 'vue';export default defineComponent({name:"ArrowLeftSharpSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M17.5,24 L17.5,1.5 L7.5,11.5 M14,11.5 L7.5,11.5 L7.5,5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})