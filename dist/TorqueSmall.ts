import { defineComponent } from 'vue';export default defineComponent({name:"TorqueSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M12.7,6.7 C13.6,6.9 14.4,7.4 15,8 L16.9,7 L18.2,9.1 L16.3,10.3 C16.5,11.1 16.5,12 16.3,12.8 L18.3,14 L17,16.1 L15,14.9 C14.4,15.5 13.6,16 12.7,16.2 L12.7,18.5 L10.2,18.5 L10.2,16.2 C9.4,16 8.6,15.6 8,14.9 L6.1,16 L4.8,14 L6.8,12.8 C6.6,11.9 6.6,11 6.8,10.2 L4.8,9.1 L6.2,7 L8,8 C8.6,7.4 9.4,7 10.2,6.8 L10.2,4.5 L12.7,4.5 C12.7,4.5 12.7,6.7 12.7,6.7 Z M11.5,11 L11.5,12 L11.5,11 Z M2.7,4.9 C4.7,2.3 7.9,0.5 11.5,0.5 C17.6,0.5 22.5,5.4 22.5,11.5 C22.5,17.6 17.6,22.5 11.5,22.5 C8.1,22.5 5.6,20.9 3.6,18.5 M8,18.5 L3.5,18.5 L3.5,23" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})