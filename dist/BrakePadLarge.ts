import { defineComponent } from 'vue';export default defineComponent({name:"BrakePadLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M38.8400002,41.8263323 C41.3314586,39.5897836 43.3352726,36.800182 44.6675024,33.6453811 M45.3664655,31.7670279 C46.1013548,29.4957874 46.4990693,27.0678514 46.4990693,24.5450477 C46.4990693,22.7211734 46.2911981,20.9468831 45.8983314,19.2455391 M45.3657041,17.3207148 C44.4058018,14.3551326 42.8710379,11.656759 40.8961982,9.36324761 M7.12640487,9.33595958 C4.97931831,11.8216224 3.34995861,14.7848079 2.41062977,18.0495461 M1.94045226,19.9958866 C1.65156487,21.4664237 1.5,22.9876592 1.5,24.5450477 C1.5,26.7930674 1.81579466,28.96576 2.40454977,31.0193798 M3.05651922,32.9640482 C4.33419939,36.2798171 6.34428942,39.2192984 8.88330128,41.5746744 M24,43 C33.9411255,43 42,34.9411255 42,25 C42,15.0588745 33.9411255,7 24,7 C14.0588745,7 6,15.0588745 6,25 C6,34.9411255 14.0588745,43 24,43 Z M31,25 C31,21.134 27.866,18 24,18 C20.134,18 17,21.134 17,25 C17,28.866 20.134,32 24,32 C27.866,32 31,28.866 31,25 L31,25 Z M27,25 C27,23.343 25.657,22 24,22 C22.343,22 21,23.343 21,25 C21,26.657 22.343,28 24,28 C25.657,28 27,26.657 27,25 L27,25 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})