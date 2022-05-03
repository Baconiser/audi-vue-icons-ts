import { defineComponent } from 'vue';export default defineComponent({name:"WechatSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M11.6,11 C14.4,8.4 20,9.1 21.3,13 C21.6,13.9 21.6,14.8 21.4,15.5 C21.2,16 20.9,16.5 20.5,16.9 C20.3,17.2 20,17.4 19.8,17.6 C19.6,17.8 19.3,18 19.3,18.2 C19.3,18.5 19.4,18.8 19.5,19 L19.5,19 L19.7,19.8 C19.2,19.5 18.2,18.8 17.6,18.9 C15.6,19.5 13.3,19.1 11.7,17.7 C10.5,16.7 9.9,15.1 10.2,13.5 C10.4,12.5 10.9,11.7 11.6,11 Z M8.3,4.5 C11.3,4.2 14.9,5.7 15.9,8.7 L15.9,8.7 L15.8,8.7 C14,8.7 12.3,9.3 11,10.5 C10.1,11.3 9.5,12.3 9.3,13.4 C9.2,14.2 9.2,15.1 9.5,15.9 C8.8,15.9 8,15.9 7.3,15.7 C7,15.6 6.8,15.6 6.6,15.7 L6.6,15.7 L6.2,15.9 L4.5,16.7 L5,15.3 L5.1,14.9 C5.2,14.7 5.1,14.7 4.9,14.5 C4.4,14.1 3.9,13.6 3.5,13.1 C2.2,11.4 2.1,9.2 3.2,7.5 C4.4,5.8 6.2,4.7 8.3,4.5 Z M13.4,12 C12.2,12 12.5,14 13.7,13.6 C14.7,13.3 14.3,12.1 13.4,12 Z M17.7,12 C16.5,12 16.8,13.9 18,13.6 C19,13.3 18.6,12.1 17.7,12 Z M11.8,7.2 C11.2,7.1 10.6,7.6 10.6,8.2 C10.7,8.8 11.2,9.2 11.8,9.2 C12.4,9.2 12.8,8.8 12.8,8.2 C12.8,7.6 12.4,7.2 11.8,7.2 Z M7.1,7.1 C6.4,7 5.9,7.5 5.8,8.1 C5.9,8.8 6.5,9.2 7.1,9.2 C7.6,9.2 8.1,8.6 8.1,8.1 C8.1,7.6 7.7,7.1 7.1,7.1 Z" fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})