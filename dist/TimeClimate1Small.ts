import { defineComponent } from 'vue';export default defineComponent({name:"TimeClimate1Small",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16,22.6 C14.6,23.2 13.1,23.5 11.5,23.5 C5.4,23.5 0.5,18.6 0.5,12.5 C0.5,6.4 5.4,1.5 11.5,1.5 C17.6,1.5 22.5,6.4 22.5,12.5 C22.5,13.7 22.3,14.9 21.9,16 M16,13.5 L11.5,13.5 L11.5,5.5" stroke="currentColor"/><path fill="currentColor" fill-rule="nonzero" d="M18.9706059 22.8188477L18.9706059 18.6762695 17.6000004 18.9291992 17.6000004 18.0866699 19.3192387 17.75 19.9823246 17.75 19.9823246 22.8188477z"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})