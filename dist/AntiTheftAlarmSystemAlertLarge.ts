import { defineComponent } from 'vue';export default defineComponent({name:"AntiTheftAlarmSystemAlertLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M12.5,36.5 L36.5,36.5 C37.1,36.5 37.5,36.9 37.5,37.5 L37.5,41.5 C37.5,42.1 37.1,42.5 36.5,42.5 L12.5,42.5 C11.9,42.5 11.5,42.1 11.5,41.5 L11.5,37.5 C11.5,36.9 11.9,36.5 12.5,36.5 Z M14.9,36.5 L18.7,16.5 C18.7,15.9 19,15.5 19.5,15.5 L26,15.5 M32.5,24.5 L34.4,36.5 L32.5,24.5 Z M24.5,2 L24.5,12 M16,14 L9,7 M4,23.5 L14,23.5 M45.5,21.5 L25.5,21.5 L35.5,3.5 L45.5,21.5 Z M35.5,9 L35.5,15 M35.5,17 L35.5,19" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})