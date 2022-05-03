import { defineComponent } from 'vue';export default defineComponent({name:"VehicleWiFi3Small",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M4.5,17.5 L4.5,22.5 C4.5,23.0522847 4.94771525,23.5 5.5,23.5 L7.5,23.5 C8.05228475,23.5 8.5,23.0522847 8.5,22.5 L8.5,22.5 L8.5,22.5 L16.5,22.5 C16.5,23.0522847 16.9477152,23.5 17.5,23.5 L19.5,23.5 C20.0522847,23.5 20.5,23.0522847 20.5,22.5 L20.5,17.5 L20.5,17.5 L16.5,13.5 L8.5,13.5 L4.5,17.5 Z M4.5,18.5 L8,18.5 M17,18.5 L20.5,18.5 M18,6.6 C16.5,5.1 14.4,4.5 12.5,4.5 C10.6,4.5 8.4,5.1 7,6.6 M15.2,9.4 C13.9,8 11,8 9.7,9.4" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})