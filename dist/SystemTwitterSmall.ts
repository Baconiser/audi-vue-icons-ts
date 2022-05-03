import { defineComponent } from 'vue';export default defineComponent({name:"SystemTwitterSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16.8,8.2 C17.4,8.3 18,8.3 18.6,8.1 C17.9,8.5 17.3,8.9 16.7,9.5 C17,13.1 14.5,16.3 11,16.9 C9,17 7.1,16.5 5.5,15.4 C5.5,15.4 8,16.1 9.3,14.6 C9.3,14.6 7,14.8 6.4,13 C7,13 7.5,12.9 8,12.8 C6.8,12.6 5.9,11.5 5.9,10.2 C6.3,10.4 6.7,10.5 7.1,10.5 C7.1,10.5 5.3,8.9 6.4,7 C6.4,7 8.8,9.9 11.8,9.8 C11.4,8.4 12.3,7 13.6,6.7 C14.5,6.5 15.4,6.7 16.1,7.4 C16.7,7.3 17.3,7 17.8,6.6 C17.7,7.2 17.4,7.8 16.8,8.2 L16.8,8.2 Z" fill="currentColor" fill-rule="nonzero"/><circle stroke="currentColor" cx="11.5" cy="11.5" r="11"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})