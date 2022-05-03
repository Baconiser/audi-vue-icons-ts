import { defineComponent } from 'vue';export default defineComponent({name:"MyaudiDestinationsLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M38.5,19.6 C34.6,19.6 31.5,22.6 31.5,26.5 C31.5,30.4 38.5,40.5 38.5,40.5 C38.5,40.5 45.5,30.4 45.5,26.5 C45.5,22.6 42.4,19.6 38.5,19.6 Z M38.5,23.5 C40.2,23.5 41.5,24.8 41.6,26.4 C41.6,28.1 40.3,29.4 38.7,29.5 C38.7,29.5 38.6,29.5 38.6,29.5 C36.9,29.5 35.6,28.1 35.7,26.4 C35.6,24.8 36.9,23.5 38.5,23.5 Z M27.5,20.5 L20.5,20.5 C18.9,20.5 17.5,19.1 17.5,17.5 L17.5,10.5 C17.5,8.9 18.9,7.5 20.5,7.5 L27.5,7.5 C29.1,7.5 30.5,8.9 30.5,10.5 L30.5,17.5 C30.5,19.1 29.1,20.5 27.5,20.5 Z M33,40.5 L11.5,40.5 L11.5,27.2 C11.5,27.2 11.7,24.4 15,24.4 L27,24.4" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})