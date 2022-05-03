import { defineComponent } from 'vue';export default defineComponent({name:"GeofenceLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M32.5,18.5 C32.5,12.4 27.6,7.5 21.5,7.5 C15.4,7.5 10.5,12.4 10.5,18.5 C10.5,24.6 21.5,39.8 21.5,39.8 C21.5,39.8 32.5,24.6 32.5,18.5 Z M21.5,24 C24.5375661,24 27,21.5375661 27,18.5 C27,15.4624339 24.5375661,13 21.5,13 C18.4624339,13 16,15.4624339 16,18.5 C16,21.5375661 18.4624339,24 21.5,24 Z M27.5,36.5 C35,37.1 40.4,38.9 40.4,40.9 C40.4,43.4 31.9,45.5 21.5,45.5 C11.1,45.5 2.6,43.5 2.6,40.9 C2.6,38.9 8,37.1 15.5,36.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})