import { defineComponent } from 'vue';export default defineComponent({name:"VelocityAlertLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M45.5,21.5 L25.5,21.5 L35.5,3.5 L45.5,21.5 Z M26.5,10.5 C17.1,7.2 6.8,12.1 3.5,21.5 C0.2,30.9 5.1,41.2 14.5,44.5 C23.9,47.8 34.2,42.9 37.5,33.5 C38.5,30.7 38.8,27.6 38.3,24.6 M23.3,28.5 L31.8,31.6 M18.5,9.6 L18.5,7 M22.5,9.6 L22.5,7 M35.5,9 L35.5,15 M35.5,17 L35.5,19 M20.5,30.5 C22.1568542,30.5 23.5,29.1568542 23.5,27.5 C23.5,25.8431458 22.1568542,24.5 20.5,24.5 C18.8431458,24.5 17.5,25.8431458 17.5,27.5 C17.5,29.1568542 18.8431458,30.5 20.5,30.5 Z M13.5,3.5 L27.5,3.5 L27.5,6.5 L13.5,6.5 L13.5,3.5 Z M9.3,13.4 L6.4,10.5 L3.6,13.3 L6.5,16.2" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})