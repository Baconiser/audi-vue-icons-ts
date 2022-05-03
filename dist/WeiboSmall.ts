import { defineComponent } from 'vue';export default defineComponent({name:"WeiboSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M5.1,9.3 C7.6,6.8 10.4,5.7 11.5,6.8 C12,7.5 12.1,8.4 11.7,9.1 C11.6,9.6 12.2,9.3 12.2,9.3 C14.2,8.4 16,8.4 16.6,9.3 C16.9,9.9 16.9,10.6 16.6,11.2 C16.4,11.6 16.6,11.6 16.9,11.7 C18.2,12 19.2,13.1 19.2,14.5 C19.2,16.9 15.7,20 10.4,20 C6.3,20 2.2,18 2.2,14.8 C2.2,13.1 3.3,11.1 5.1,9.3 Z M15.9,14.3 C15.7,12.1 13,10.7 9.7,11 C6.4,11.3 4,13.2 4.2,15.4 C4.4,17.6 7.2,19 10.4,18.7 C13.7,18.4 16.1,16.4 15.9,14.3 Z M6.9,14.4 C7.6,13 9.2,12.3 10.7,12.7 C10.9,12.7 11.1,12.8 11.2,12.9 C12.4,13.4 12.9,14.8 12.4,16 C11.7,17.5 10,18.2 8.4,17.7 C8.2,17.6 8.1,17.6 7.9,17.5 C6.8,16.9 6.3,15.5 6.9,14.4 Z M9.3,14.8 C8.8,14.6 8.2,14.8 7.9,15.3 C7.9,15.4 7.8,15.4 7.8,15.5 C7.6,15.9 7.8,16.4 8.2,16.6 C8.7,16.8 9.3,16.6 9.6,16.1 C9.6,16.1 9.7,16 9.7,16 C9.9,15.5 9.7,15 9.3,14.8 Z M10.4,14.3 C10.2,14.2 10,14.3 9.9,14.5 L9.9,14.5 L9.9,14.6 C9.9,14.7 9.9,14.9 10.1,15 C10.3,15.1 10.5,15 10.6,14.8 C10.7,14.6 10.6,14.4 10.4,14.3 Z M15.735284,4.15348073 C17.4638941,3.8536862 19.2521739,4.46086957 20.4,5.8 C21.7,7.2 22.1,9.1 21.6,10.8 L21.6,10.8 L21.5689236,10.8957755 C21.4333333,11.23125 21.0666667,11.3916667 20.7,11.3 C20.3,11.2 20.1,10.8 20.2,10.4 C20.4,9.8 20.4,9.1 20.3,8.5 C19.8,6.5 17.9,5.3 15.9,5.7 C15.5,5.7 15.1,5.5 15,5.1 C14.9,4.7 15.1,4.3 15.5,4.2 L15.5,4.2 Z M16.1,6.8 C17,6.6 17.9,6.9 18.5,7.6 C19.1,8.2 19.3,9.2 19,10 L19,10 L18.9614,10.0868 C18.821,10.337 18.47,10.49 18.2,10.4 C17.9,10.3 17.7,9.9 17.8,9.6 L17.8,9.6 L17.8,9 C17.6,8.3 17,7.9 16.4,8.1 L16.4,8.1 L16.2934636,8.1176559 C15.9471074,8.14545455 15.6909091,7.87272727 15.6,7.6 C15.5,7.2 15.8,6.9 16.1,6.8 Z" fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})