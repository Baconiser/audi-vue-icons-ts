import { defineComponent } from 'vue';export default defineComponent({name:"ListLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M16,30.5 L21,30.5 M12,30.5 L14,30.5 M16,24.5 L28,24.5 M12,24.5 L14,24.5 M16,18.5 L34,18.5 M12,18.5 L14,18.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})