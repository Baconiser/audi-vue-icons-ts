import { defineComponent } from 'vue';export default defineComponent({name:"PublicTransportSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M2.5,9.5 L2.5,3.5 L21.5,3.5 L21.5,9.5 M6,16 C7,16 8,17 8,18 C8,19 7,20 6,20 C5,20 4,19 4,18 C4,17 5,16 6,16 M18,16 C19,16 20,17 20,18 C20,19 19,20 18,20 C17,20 16,19 16,18 C16,17 17,16 18,16 M16.5,22.5 L16.5,21.5 L7.5,21.5 L7.5,22.5 C7.5,23.1 7.1,23.5 6.5,23.5 L4.5,23.5 C3.9,23.5 3.5,23.1 3.5,22.5 L3.5,21.5 L2.5,21.5 L2.5,9.5 L1.5,9.5 C0.9,9.5 0.5,9.1 0.5,8.5 L0.5,3.5 L2.5,3.5 L2.5,2.2 C2.5,1.3 3.2,0.5 4.1,0.5 L19.9,0.5 C20.8,0.5 21.5,1.2 21.5,2.1 L21.5,3.5 L23.5,3.5 L23.5,8.5 C23.5,9.1 23.1,9.5 22.5,9.5 L21.5,9.5 L21.5,21.5 L20.5,21.5 L20.5,22.5 C20.5,23.1 20.1,23.5 19.5,23.5 L17.5,23.5 C16.9,23.5 16.5,23.1 16.5,22.5 Z M21.5,13.5 L2.5,13.5 L21.5,13.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})