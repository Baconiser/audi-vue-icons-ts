import { defineComponent } from 'vue';export default defineComponent({name:"ParkingOutStraightLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M45,10.5 L36.5,10.5 L36.5,41.5 C36.5,43.7 34.7,45.5 32.5,45.5 L16.5,45.5 C14.3,45.5 12.5,43.7 12.5,41.5 L12.5,10.5 L4,10.5 M19,7 L24.5,1.5 L30,7 M24.5,37 L24.5,1.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})