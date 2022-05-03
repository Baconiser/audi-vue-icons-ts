import { defineComponent } from 'vue';export default defineComponent({name:"CarDimensionsLarge",template: `<svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M7.5,28 L7.5,37 M40.5,32.5 L7.5,32.5 M40.5,28 L40.5,37 M18.0029764,21.5005139 C18.0029764,23.1573682 16.6598307,24.5005139 15.0029764,24.5005139 C13.3461222,24.5005139 12.0029764,23.1573682 12.0029764,21.5005139 L12.0029764,21.5005139 L12.0029764,21.5005139 L10.0441045,21.3585747 C9.21970265,21.2988388 8.44586482,20.583442 8.50297645,19.7588541 L8.9069608,16.136805 C8.96657593,15.2760711 9.57144914,14.5505935 10.407428,14.3371546 C10.9392775,14.2013691 11.4711269,14.0891555 12.0029764,14.0005139 C13.5029764,13.7505139 16.5029764,11.7505139 18.5029764,11.0005139 C19.5281216,10.6160845 21.5510324,10.4908474 23.5029764,10.5005139 C25.3591642,10.5097063 27.1499785,10.6349434 28.0029764,11.0005139 C28.7397836,11.3162884 30.1564503,12.4829551 32.2529764,14.5005139 C34.7529764,14.8338472 36.5029764,15.1671806 37.5029764,15.5005139 C39.0029764,16.0005139 40.0029764,17.0005139 40.2529764,17.7505139 C40.4196431,18.2505139 40.5029764,19.0005139 40.5029764,20.0005139 L40.5029764,20.2505139 C40.5029764,20.9408699 39.9433324,21.5005139 39.2529764,21.5005139 L37.0029764,21.5005139 C37.0029764,23.1573682 35.6598307,24.5005139 34.0029764,24.5005139 C32.3461222,24.5005139 31.0029764,23.1573682 31.0029764,21.5005139 L31.0029764,21.5005139 L31.0029764,21.5005139 L18.0029764,21.5005139 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 48},height: {type: Number, default: 48},filename: {type: String, default: 48}}})