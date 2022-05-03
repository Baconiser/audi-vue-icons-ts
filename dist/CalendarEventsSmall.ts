import { defineComponent } from 'vue';export default defineComponent({name:"CalendarEventsSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M5.5,19.5 L5.5,22.5 C5.5,23.1 5.9,23.5 6.5,23.5 L21.5,23.5 C22.1,23.5 22.5,23.1 22.5,22.5 L22.5,6 M0.5,3 L0.5,18.5 C0.5,19 0.9,19.5 1.5,19.5 L13.5,19.5 L18.5,14.5 L18.5,3 M18.5,14.5 L13.5,14.5 L13.5,19.5 M0,0.5 L19,0.5" stroke="currentColor"/><path d="M4,5.9 L6.1,5.4 L6.7,5.4 L6.7,11.2 L8.5,11.2 L8.5,12 L4,12 L4,11.2 L5.8,11.2 L5.8,6.3 L4,6.7 L4,5.9 L4,5.9 Z M9.7,11.7 L9.7,10.9 C10.4,11.1 11.2,11.2 12,11.3 C13.4,11.3 14,10.8 14,10.1 C14,8.9 11.3,8.7 9.9,8.7 L10.1,5.4 L14.6,5.4 L14.6,6.2 L10.9,6.2 L10.8,8 C12.7,8.1 14.9,8.5 14.9,10.1 C14.9,11.2 14,12.1 11.9,12.1 C11.1,12.1 10.4,11.9 9.7,11.7 L9.7,11.7 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})