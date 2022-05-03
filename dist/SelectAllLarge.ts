import { defineComponent } from 'vue';export default defineComponent({name:"SelectAllLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M22,7.5 L27,7.5 M14,7.5 L19,7.5 M30,7.5 L35,7.5 M22,41.5 L27,41.5 M14,41.5 L19,41.5 M30,41.5 L35,41.5 M41.5,27 L41.5,22 M41.5,35 L41.5,30 M41.5,19 L41.5,14 M7.5,27 L7.5,22 M7.5,35 L7.5,30 M7.5,19 L7.5,14 M11,7.5 L8,7.5 C8,7.5 7.5,7.5 7.5,8 L7.5,11 M38,7.5 L41,7.5 C41,7.5 41.5,7.5 41.5,8 L41.5,11 M11,41.5 L8,41.5 C8,41.5 7.5,41.5 7.5,41 L7.5,38 M38,41.5 L41,41.5 C41,41.5 41.5,41.5 41.5,41 L41.5,38 M14.5,14.5 L34.5,14.5 L34.5,34.5 L14.5,34.5 L14.5,14.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})