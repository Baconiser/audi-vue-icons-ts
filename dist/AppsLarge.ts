import { defineComponent } from 'vue';export default defineComponent({name:"AppsLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M38.5,9.5 L41.5,9.5 C43.2,9.5 44.5,10.8 44.5,12.5 L44.5,41.5 C44.5,43.2 43.2,44.5 41.5,44.5 L12.5,44.5 C10.8,44.5 9.5,43.2 9.5,41.5 L9.5,38.5 M6.5,3.5 L35.5,3.5 C37.2,3.5 38.5,4.8 38.5,6.5 L38.5,35.5 C38.5,37.2 37.2,38.5 35.5,38.5 L6.5,38.5 C4.8,38.5 3.5,37.2 3.5,35.5 L3.5,6.5 C3.5,4.8 4.8,3.5 6.5,3.5 Z M30.9,18.7 C33.4405098,18.7 35.5,16.6405098 35.5,14.1 C35.5,11.5594902 33.4405098,9.5 30.9,9.5 C28.3594902,9.5 26.3,11.5594902 26.3,14.1 C26.3,16.6405098 28.3594902,18.7 30.9,18.7 Z M11.1,18.7 C13.6405098,18.7 15.7,16.6405098 15.7,14.1 C15.7,11.5594902 13.6405098,9.5 11.1,9.5 C8.55949015,9.5 6.5,11.5594902 6.5,14.1 C6.5,16.6405098 8.55949015,18.7 11.1,18.7 Z M17.7,18.7 C20.2405098,18.7 22.3,16.6405098 22.3,14.1 C22.3,11.5594902 20.2405098,9.5 17.7,9.5 C15.1594902,9.5 13.1,11.5594902 13.1,14.1 C13.1,16.6405098 15.1594902,18.7 17.7,18.7 Z M24.3,18.7 C26.8405098,18.7 28.9,16.6405098 28.9,14.1 C28.9,11.5594902 26.8405098,9.5 24.3,9.5 C21.7594902,9.5 19.7,11.5594902 19.7,14.1 C19.7,16.6405098 21.7594902,18.7 24.3,18.7 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})