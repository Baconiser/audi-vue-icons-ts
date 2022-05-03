import { defineComponent } from 'vue';export default defineComponent({name:"XingSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M15.2,5 C14.9,5 14.8,5.2 14.7,5.4 L10.2,13.4 L13.1,18.7 C13.2,18.9 13.4,19.1 13.7,19.1 L15.7,19.1 C15.8,19.1 15.9,19.1 16,19 C16.1,18.9 16.1,18.8 16,18.7 L13,13.4 C13,13.4 13,13.4 13,13.4 L17.5,5.5 C17.6,5.4 17.6,5.3 17.5,5.2 C17.4,5 17.3,5 17.2,5 L15.2,5 L15.2,5 Z M6.7,7.8 C6.6,7.8 6.5,7.8 6.4,7.9 C6.3,8 6.4,8.1 6.4,8.2 L7.8,10.6 C7.8,10.6 7.8,10.6 7.8,10.6 L5.7,14.4 C5.6,14.5 5.6,14.6 5.7,14.7 C5.8,14.8 5.9,14.8 6,14.8 L8,14.8 C8.3,14.8 8.4,14.6 8.6,14.4 L10.8,10.5 L9.3,8.1 C9.2,8 9,7.8 8.7,7.8 L6.7,7.8 L6.7,7.8 Z" fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})