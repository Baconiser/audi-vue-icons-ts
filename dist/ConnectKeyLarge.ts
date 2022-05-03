import { defineComponent } from 'vue';export default defineComponent({name:"ConnectKeyLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M17.5,33.5 L19.5,35.5 L21.5,33.5 L20.5,30.5 L21.5,28.5 L20.5,26.5 L21.5,24.5 L20.5,22.5 L20.5,20.5 C22.5,19.75 23.5,18.5 23.5,16 C23.5,13.5 21.4990158,11.5 18.9990158,11.5 C16.4990158,11.5 14.5,13.5 14.5,16 C14.5,18.5 15.5,19.75 17.5,20.5 L17.5,33.5 Z M19,15.5 C19.2761424,15.5 19.5,15.2761424 19.5,15 C19.5,14.7238576 19.2761424,14.5 19,14.5 C18.7238576,14.5 18.5,14.7238576 18.5,15 C18.5,15.2761424 18.7238576,15.5 19,15.5 Z M35,28.5 C36.1,27.3 36.5,25.5 36.5,24 C36.5,22.5 36.1,20.7 35,19.5 M37.8,33.5 C40.2,30.9 41.5,27.5 41.5,24 C41.5,20.5 40.3,17 37.8,14.5 M9.5,3.5 L28.5,3.5 C29.6,3.5 30.5,4.4 30.5,5.5 L30.5,42.5 C30.5,43.6 29.6,44.5 28.5,44.5 L9.5,44.5 C8.4,44.5 7.5,43.6 7.5,42.5 L7.5,5.5 C7.5,4.4 8.4,3.5 9.5,3.5 Z M7.5,38.5 L30.5,38.5 M19,42.4 C19.4970563,42.4 19.9,41.9970563 19.9,41.5 C19.9,41.0029437 19.4970563,40.6 19,40.6 C18.5029437,40.6 18.1,41.0029437 18.1,41.5 C18.1,41.9970563 18.5029437,42.4 19,42.4 Z M16,7.5 L22,7.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})