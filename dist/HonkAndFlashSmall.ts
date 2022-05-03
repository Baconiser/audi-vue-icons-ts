import { defineComponent } from 'vue';export default defineComponent({name:"HonkAndFlashSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M12.5,18.5 L15.5,18.5 C15.5,18.5 20.5,18.5 20.5,23.5 L22.5,23.5 L22.5,10.5 L20.5,10.5 C20.5,10.5 20.5,15.6 15.6,15.6 L6,15.6 C6,15.6 3.3,15.7 2.5,14.5 L2.5,19.5 C2.5,19.5 3.4,18.5 6,18.5 L12.8,18.5 M9.5,18.5 C7.5,18.8 6.6,19.3 6.5,20.5 C6.4,22 8.1,23.3 11,23.5 C13.9,23.7 16.4,22.5 16.5,21 C16.6,19.5 14.6,18.9 12,18.5 M8.5,8.5 L8.5,4.5 L5.5,4.5 L5.5,1.5 L0.7,6.5 L5.5,11.5 L5.5,8.5 L8.5,8.5 Z M11.5,8.5 L11.5,4.5 L14.5,4.5 L14.5,1.5 L19.5,6.5 L14.5,11.5 L14.5,8.5 L11.5,8.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})