import { defineComponent } from 'vue';export default defineComponent({name:"SystemSearchSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M15.8,15.8 L11.8,11.8 L15.8,15.8 Z M12.5,10 C12.6,11.3 11.5,12.5 10.2,12.5 C10.1,12.5 10.1,12.5 10,12.5 C8.6,12.5 7.5,11.4 7.5,10 C7.5,8.6 8.6,7.5 10,7.5 C11.4,7.5 12.5,8.6 12.5,10 L12.5,10 Z M11.5,22.5 C17.5751322,22.5 22.5,17.5751322 22.5,11.5 C22.5,5.42486775 17.5751322,0.5 11.5,0.5 C5.42486775,0.5 0.5,5.42486775 0.5,11.5 C0.5,17.5751322 5.42486775,22.5 11.5,22.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})