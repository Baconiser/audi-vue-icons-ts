import { defineComponent } from 'vue';export default defineComponent({name:"TorqueLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M27.1,15.5 L27.1,18.2 C27.7,18.4 28.3,18.6 28.8,18.9 L30.7,17 L33,19.3 L31.1,21.2 C31.4,21.7 31.6,22.3 31.8,22.9 L34.5,22.9 L34.5,26.2 L31.8,26.2 C31.6,26.8 31.4,27.4 31.1,27.9 L33,29.8 L30.7,32 L28.8,30.1 C28.3,30.4 27.7,30.6 27.1,30.8 L27.1,33.5 L23.8,33.5 L23.8,30.8 C23.2,30.6 22.6,30.4 22.1,30.1 L20.3,32 L18,29.7 L19.9,27.8 C19.6,27.3 19.4,26.7 19.2,26.1 L16.5,26.1 L16.5,22.8 L19.2,22.8 C19.4,22.2 19.6,21.6 19.9,21.1 L18,19.3 L20.3,17 L22.2,18.9 C22.7,18.6 23.3,18.4 23.9,18.2 L23.9,15.5 L27.1,15.5 Z M25.5,24 L25.5,25 L25.5,24 Z M16.7,5.7 C17.6,5.9 18.4,6.4 19,7 L20.9,6 L22.2,8.1 L20.3,9.3 C20.5,10.1 20.5,11 20.3,11.8 L22.3,13 L21,15.1 L19,13.9 C18.4,14.5 17.6,15 16.7,15.2 L16.7,17.5 L14.2,17.5 L14.2,15.2 C13.4,15 12.6,14.5 12,13.9 L10.1,15 L8.8,13 L10.8,11.8 C10.6,11 10.6,10.1 10.8,9.2 L8.8,8.1 L10.2,6 L12,7 C12.6,6.4 13.4,5.9 14.2,5.7 L14.2,3.5 L16.7,3.5 L16.7,5.7 Z M15.5,10 L15.5,11 L15.5,10 Z M8.5,22.6 L8.5,24.5 C8.5,33.9 16.1,41.5 25.5,41.5 C34.9,41.5 42.5,33.9 42.5,24.5 C42.5,15.1 34.9,7.5 25.5,7.5 M12.7,26.7 L8.5,22.5 L4.3,26.7" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})