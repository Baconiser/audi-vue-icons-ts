import { defineComponent } from 'vue';export default defineComponent({name:"DocumentsLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M12,38.5 L35,38.5 M12,32.5 L35,32.5 M12,26.5 L35,26.5 M29.5,2.5 L29.5,13.5 L40.5,13.5 M40.5,13.5 L40.5,45.5 L6.5,45.5 L6.5,2.5 L29.5,2.5 L40.5,13.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})