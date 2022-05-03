import { defineComponent } from 'vue';export default defineComponent({name:"GasStationSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M18.9297498,23.673 C17.0882498,23.673 15.9499998,22.70875 15.9499998,20.9615 C15.9499998,19.27225 17.0954998,18.25 18.9659998,18.25 C19.5894998,18.25 20.3869998,18.337 20.8437498,18.53275 L20.8437498,19.178 C20.3217498,18.96775 19.5967498,18.888 19.0747498,18.888 C17.5522498,18.888 16.7112498,19.5695 16.7112498,20.9615 C16.7112498,22.4695 17.6609998,23.04225 19.0384998,23.04225 C19.7707498,23.04225 20.2999998,22.919 20.5392498,22.8465 L20.5392498,21.05575 L21.2787498,21.05575 L21.2787498,23.3395 C20.6914998,23.54975 19.9012498,23.673 18.9297498,23.673 Z M9,23.586 L9,18.337 L9.812,18.337 L13.48775,22.658 L13.48775,18.337 L14.22,18.337 L14.22,23.586 L13.408,23.586 L9.73225,19.27225 L9.73225,23.586 L9,23.586 Z M5.69999995,23.673 C4.03249995,23.673 2.79999995,22.7595 2.79999995,20.9615 C2.79999995,19.25775 4.03249995,18.25 5.63474995,18.25 C6.20749995,18.25 6.83099995,18.337 7.28774995,18.53275 L7.28774995,19.178 C6.76574995,18.96775 6.21474995,18.888 5.73624995,18.888 C4.42399995,18.888 3.56124995,19.5695 3.56124995,20.9615 C3.56124995,22.513 4.65599995,23.04225 5.71449995,23.04225 C6.55549995,23.04225 7.10649995,22.89725 7.40374995,22.7885 L7.40374995,23.412 C7.04124995,23.557 6.46849995,23.673 5.69999995,23.673 Z" fill="currentColor" fill-rule="nonzero"/><path d="M16,16.5 L5,16.5 M14.5,16.5 L14.5,3.5 C14.5,2.3954305 13.6045695,1.5 12.5,1.5 L8.5,1.5 C7.3954305,1.5 6.5,2.3954305 6.5,3.5 L6.5,16.5 L6.5,16.5 M13,7.5 L8,7.5 M17.5,1.5 C18.4275362,2.65942029 19.0942029,3.99275362 19.5,5.5 L19.5,12.0434783 C19.5,12.847893 18.847893,13.5 18.0434783,13.5 C17.2356717,13.5 16.5775558,12.8513529 16.5658497,12.0436312 L16.5142827,8.48550877 C16.5063613,7.93893234 16.0610216,7.5 15.5143877,7.5 L14.5,7.5 L14.5,7.5" stroke="currentColor"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})