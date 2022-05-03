import { defineComponent } from 'vue';export default defineComponent({name:"SystemHelpSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M11.5,15 L11.5,16 M9.9,7.5 C9.9,7.5 14,5.9 14.5,8.5 C14.9,10.4 11.5,12.7 11.5,12.7 L11.5,14 M11.5,22.5 C17.5751322,22.5 22.5,17.5751322 22.5,11.5 C22.5,5.42486775 17.5751322,0.5 11.5,0.5 C5.42486775,0.5 0.5,5.42486775 0.5,11.5 C0.5,17.5751322 5.42486775,22.5 11.5,22.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})