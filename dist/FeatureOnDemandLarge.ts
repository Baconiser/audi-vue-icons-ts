import { defineComponent } from 'vue';export default defineComponent({name:"FeatureOnDemandLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M26.5,26.5 L42.5,26.5 L42.5,42.5 L26.5,42.5 L26.5,26.5 Z M5.5,26.5 L21.5,26.5 L21.5,42.5 L5.5,42.5 L5.5,26.5 Z M27.5,2.5 L45.5,2.5 L45.5,20.5 L27.5,20.5 L27.5,2.5 Z M5.5,5.5 L21.5,5.5 L21.5,21.5 L5.5,21.5 L5.5,5.5 Z M32,11.5 L41,11.5 M36.5,7 L36.5,16" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})