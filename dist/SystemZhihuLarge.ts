import { defineComponent } from 'vue';export default defineComponent({name:"SystemZhihuLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle stroke="currentColor" cx="23.5" cy="23.5" r="22"/><path d="M12,34.5 C13.2,34.9 14.6,34.8 15.7,34.2 C17.5,33.1 18.9,28.4 18.9,28.4 L23.2,33.7 C23.2,33.7 23.6,31.2 23.1,30.5 C22.6,29.8 20.1,26.9 20.1,26.9 L19,27.9 L19.8,24.8 L24.5,24.8 C24.5,24.8 24.5,23 23.6,22.9 C22.7,22.8 19.9,22.9 19.9,22.9 L19.9,17.2 L24,17.2 C24,17.2 24,15.3 23.1,15.3 L16.3,15.3 L17.4,12.2 C17.4,12.2 15.7,12.3 15.1,13.4 C14.5,14.5 12.5,20 12.5,20 C12.5,20 13.2,20.3 14.3,19.5 C15,18.9 15.5,18.1 15.8,17.2 L17.8,17.1 L17.8,22.9 C17.8,22.9 14.3,22.8 13.6,22.9 C12.9,23 12.5,24.8 12.5,24.8 L17.8,24.8 C17.5,26.7 16.9,28.6 16,30.4 C14.9,32 13.6,33.4 12,34.5 L12,34.5 Z M27.8,34.4 L30.8,32.2 L35,32.2 L35,15 L25.4,15 L25.4,32.2 L27.1,32.2 L27.8,34.4 Z M27.5,16.9 L33.1,16.9 L33.1,30.3 L31.1,30.3 L28.6,32.2 L28,30.3 L27.5,30.3 L27.5,16.9 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})