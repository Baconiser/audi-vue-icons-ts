import { defineComponent } from 'vue';export default defineComponent({name:"TimeMiddleLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M25.6,21.4 L31.5,14.5 M27,46 L22.5,41.5 L26.9,37.1 M7,14 L9,16 M13,40 L15,38 M14.5,7.5 L16,10 M6,33 L8,31.5 M4,23.5 L7,23.5 M22.5,41.5 L23.5,41.5 C33.4,41.5 41.5,33.4 41.5,23.5 C41.5,13.6 33.4,5.5 23.5,5.5 L23,5.5 M23.5,26.5 C25.1568542,26.5 26.5,25.1568542 26.5,23.5 C26.5,21.8431458 25.1568542,20.5 23.5,20.5 C21.8431458,20.5 20.5,21.8431458 20.5,23.5 C20.5,25.1568542 21.8431458,26.5 23.5,26.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})