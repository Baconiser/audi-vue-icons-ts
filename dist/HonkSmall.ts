import { defineComponent } from 'vue';export default defineComponent({name:"HonkSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M12,13.5 L15.6,13.5 C15.6,13.5 21.7,12.9 21.7,19.5 L23.5,19.5 L23.5,4.5 L21.7,4.5 C21.7,4.5 21.7,10.5 15.6,10.5 L7,10.5 C6,10.5 2,10 0.5,8 L0.5,15.5 C0.5,15.5 2,13.5 7,13.5 L13,13.5 M8.5,13.5 C6.3,13.8 4.7,14.6 4.6,16 C4.5,17.8 7,19.3 10.3,19.6 C13.6,19.9 16.4,18.8 16.5,17 C16.6,15.2 14.4,13.9 11.4,13.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})