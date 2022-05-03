import { defineComponent } from 'vue';export default defineComponent({name:"SideAssistLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M8.49997904,44 L8.49997904,31.848122 C8.49997904,31.0096818 9.02299261,30.2602448 9.80994597,29.9709587 C10.5098897,29.7136575 11.0732411,29.5566713 11.5,29.5 C12.5,29.3672053 14.605679,29.3793538 15.5,29.5 C15.8897468,29.5525778 16.4520423,29.7132278 17.1868867,29.98195 C17.9754976,30.2703356 18.5,31.0206109 18.5,31.8602974 L18.5,44 L18.5,44 M10.5,38.5 L16.4545455,38.5 L16.4545455,36.5 C16.4545455,35.9477153 16.0068302,35.5 15.4545455,35.5 L11.5304178,35.5 C10.9840404,35.5 10.5388101,35.9385355 10.5305326,36.4848502 L10.5,38.5 L10.5,38.5 Z M29.96326,30.220142 C26.8108422,29.3326652 24.5,26.4361957 24.5,23 C24.5,22.6609412 24.5224991,22.3271374 24.5660857,22 M28.1804688,33.8504965 C23.7066898,32.2756939 20.5,28.0123282 20.5,23 C20.5,22.6630864 20.5144882,22.3295567 20.5428756,22 M30.8099114,4.97096575 C31.5098743,4.71366042 32.0732371,4.55667183 32.5,4.5 C33.5,4.36720533 35.605679,4.37935384 36.5,4.5 C36.8897468,4.55257782 37.4520423,4.71322782 38.1868867,4.98195 C38.9754976,5.27033557 39.5,6.02061091 39.5,6.8602974 L39.5,23.500168 C39.5,24.6047375 38.6045695,25.500168 37.5,25.500168 L31.4999625,25.500168 C30.395393,25.500168 29.4999625,24.6047375 29.4999625,23.500168 L29.4999625,6.84815254 C29.4999623,6.0097006 30.022946,5.26025306 30.8099114,4.97096575 Z M31.5,13.5 L37.4545455,13.5 L37.4545455,11.5 C37.4545455,10.9477153 37.0068302,10.5 36.4545455,10.5 L32.5304178,10.5 C31.9840404,10.5 31.5388101,10.9385355 31.5305326,11.4848502 L31.5,13.5 L31.5,13.5 Z M31.5,19.5 L37.4545455,19.5 L37.4545455,21.5 C37.4545455,22.0522847 37.0068302,22.5 36.4545455,22.5 L32.5304178,22.5 C31.9840404,22.5 31.5388101,22.0614645 31.5305326,21.5151498 L31.5,19.5 L31.5,19.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})