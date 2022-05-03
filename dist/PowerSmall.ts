import { defineComponent } from 'vue';export default defineComponent({name:"PowerSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M11.5,13.5 L18,15.5 M22.5,13.5 L20,13.5 M19.3,5.7 L17.5,7.5 M11.5,2.5 L11.5,5 M5.5,7.5 L3.7,5.7 M3,13.5 L0.5,13.5 M5.5,19.5 L3.7,21.3 C1.6,19.2 0.5,16.4 0.5,13.5 C0.5,7.4 5.4,2.5 11.5,2.5 C17.6,2.5 22.5,7.4 22.5,13.5 C22.5,16.5 21.3,19.3 19.3,21.3 L17.5,19.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})