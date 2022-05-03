import { defineComponent } from 'vue';export default defineComponent({name:"CommuteSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M9.5,14.5 L5.5,14.5 L5.5,18.5 L2.5,18.5 L2.5,2.5 L12.4990198,2.5 L12.5,11.75 M8.5,9.5 L10.5,9.5 L10.5,11.5 L8.5,11.5 L8.5,9.5 Z M4.5,9.5 L6.5,9.5 L6.5,11.5 L4.5,11.5 L4.5,9.5 Z M8.5,4.5 L10.5,4.5 L10.5,6.5 L8.5,6.5 L8.5,4.5 Z M4.5,4.5 L6.5,4.5 L6.5,6.5 L4.5,6.5 L4.5,4.5 Z M20.5,14 L20.5,21.5 C14.5,21.5 11.5,21.5 11.5,21.5 C10.5,21.5 9.5,20.5 9.5,19.5 C9.5,19.5 9.5,17.8333333 9.5,14.5 L15,9.5 L22.5,15.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})