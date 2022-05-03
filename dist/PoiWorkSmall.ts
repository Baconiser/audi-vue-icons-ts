import { defineComponent } from 'vue';export default defineComponent({name:"PoiWorkSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M19.5,8.5 C19.5,4.6 16.4,1.5 12.5,1.5 C8.6,1.5 5.5,4.6 5.5,8.5 C5.5,12.4 12.5,22.5 12.5,22.5 C12.5,22.5 19.5,12.4 19.5,8.5 Z M9.5,4.5 L15.5,4.5 L15.5,13.5 L13.5,13.5 L13.5,10.5 L11.5,10.5 L11.5,13.5 L9.5,13.5 L9.5,4.5 Z M13,8.5 L14,8.5 L13,8.5 Z M11,8.5 L12,8.5 L11,8.5 Z M13,6.5 L14,6.5 L13,6.5 Z M11,6.5 L12,6.5 L11,6.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})