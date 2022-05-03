import { defineComponent } from 'vue';export default defineComponent({name:"BrakePadAlertSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M19.588986,20.6631662 C21.986735,18.5555813 23.5,15.4657736 23.5,12.0225239 C23.5,9.11358262 22.4199401,6.45690288 20.6389594,4.4316238 M3.37305781,4.41797979 C1.58491957,6.444964 0.5,9.10704567 0.5,12.0225239 C0.5,15.397871 1.95416882,18.4335788 4.2701964,20.5373372 M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12.3,6.5 L12.3,13.5 M12.3,15 L12.3,17" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})