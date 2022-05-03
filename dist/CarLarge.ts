import { defineComponent } from 'vue';export default defineComponent({name:"CarLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M2.5,23 L2.5,37 C2.5,37.8284271 3.17157288,38.5 4,38.5 L9,38.5 C9.82842712,38.5 10.5,37.8284271 10.5,37 L10.5,35.5 L10.5,35.5 L37.5,35.5 L37.5,37 C37.5,37.8284271 38.1715729,38.5 39,38.5 L44,38.5 C44.8284271,38.5 45.5,37.8284271 45.5,37 L45.5,23 L45.5,23 L41,18.5 C40.0666656,16.6666667 39.2333323,15.1666667 38.5,14 C37.7666677,12.8333333 36.7666677,11.5 35.5,10 C31.7608696,9.66666667 27.9347826,9.5 24.0217391,9.5 C20.1086957,9.5 16.2681159,9.66666667 12.5,10 C11.2333336,11.5 10.2333336,12.8333333 9.5,14 C8.76666641,15.1666667 7.93333308,16.6666667 7,18.5 L2.5,23 Z M15,27 L17,24.5 L31,24.5 L33,27 C31.6666667,30.6666667 30.6666667,32.5 30,32.5 C29,32.5 19,32.5 18,32.5 C17.3333333,32.5 16.3333333,30.6666667 15,27 Z M6.75,18.5 L24,18.5 L41.25,18.5 M43.5,23.5749239 C43.5,24.5459384 43.4166667,25.2053587 43.25,25.5531847 C43,26.0749239 42.5,26.5749239 42,26.5749239 L40,26.5749239 C39.5,26.5749239 35.75,25.5749239 35.25,25.0749239 C34.9166667,24.7415905 34.6666667,24.4082572 34.5,24.0749239 C36.2683726,23.841489 37.7683726,23.6748224 39,23.5749239 C40.2316274,23.4750254 41.7316274,23.4750254 43.5,23.5749239 Z M4.5,23.5749239 C6.26837257,23.4750254 7.76837257,23.4750254 9,23.5749239 C10.2316274,23.6748224 11.7316274,23.841489 13.5,24.0749239 C13.3333333,24.4082572 13.0833333,24.7415905 12.75,25.0749239 C12.25,25.5749239 8.5,26.5749239 8,26.5749239 C7.5,26.5749239 6.5,26.5749239 6,26.5749239 C5.5,26.5749239 5,26.0749239 4.75,25.5531847 C4.58333333,25.2053587 4.5,24.5459384 4.5,23.5749239 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})