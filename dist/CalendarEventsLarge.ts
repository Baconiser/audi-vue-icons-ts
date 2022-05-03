import { defineComponent } from 'vue';export default defineComponent({name:"CalendarEventsLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M12.5,38.5 L12.5,43.6 C12.5,44.6 13.3,45.5 14.4,45.5 L42.6,45.5 C43.6,45.5 44.5,44.7 44.5,43.6 L44.5,13 M3.5,7 L3.5,36.6 C3.5,37.6 4.3,38.5 5.4,38.5 L27.6,38.5 L37.5,28.6 L37.5,7 M37.5,28.5 L27.5,28.5 L27.5,38.5 M3,2.5 L38,2.5" stroke="currentColor"/><path d="M13,11.9 L9.1,12.8 L9.1,13.6 L12.7,12.8 L12.7,23.8 L9.1,23.8 L9.1,24.6 L17.6,24.6 L17.6,23.8 L14,23.8 L14,11.8 L13,11.8 L13,11.9 Z M22.3,17.2 L21.9,17.2 L22.1,12.8 L29.8,12.8 L29.8,12 L21.1,12 L20.9,18 C26.5,18.1 29.3,19.2 29.3,21.2 C29.3,22.5 28.5,24 24.7,24 C23.2,24 21.8,23.8 20.4,23.4 L20.4,24.3 C21.8,24.7 23.2,24.9 24.7,24.9 C28.5,24.9 30.6,23.6 30.6,21.2 C30.6,18.8 27.8,17.5 22.3,17.2 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})