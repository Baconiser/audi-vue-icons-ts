import { defineComponent } from 'vue';export default defineComponent({name:"ClimateAutoSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M0,23.5 L24,23.5 M18,20.5 C20,20.5 22.5,18.6 22.5,15 C22.5,11.5 19.5,10 19.5,7 L19.5,0.7 M16,4.2 L19.5,0.7 L23,4.2 M10,20.5 C12,20.5 14.5,18.6 14.5,15 C14.5,11.5 11.5,10 11.5,7 L11.5,0.7 M9,3.3 L11.5,0.7 L14,3.3 M7,7.5 L4.5,7.5 L7,7.5 Z M7,5.5 L4.5,5.5 L7,5.5 Z M7,3.5 L4.5,3.5 L7,3.5 Z M4.5,10.5 L2.5,10.5 L4.5,10.5 Z M4.5,14.2 L4.5,1.5 C4.5,0.9 4.1,0.5 3.5,0.5 C2.9,0.5 2.5,0.9 2.5,1.5 L2.5,14.7 C1.3,15.1 0.5,16.3 0.5,17.5 C0.5,19.2 1.8,20.5 3.5,20.5 C5.2,20.5 6.5,19.2 6.5,17.5 C6.5,16.2 5.7,15.1 4.5,14.7 L4.5,14.2 L4.5,14.2 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})