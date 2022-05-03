import { defineComponent } from 'vue';export default defineComponent({name:"CrossTrafficAssistRearSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><path d="M14.5,19.5 L11.5,22.5 L8.5,19.5 M11.5,22.5 L11.5,16 M16.3405771,15.228981 C17.3464961,14.3781923 18.125325,13.2672559 18.5732357,12 M4.42676427,12 C4.87467497,13.2672559 5.6535039,14.3781923 6.65942294,15.228981 M5.12240053,17.8419191 C3.25121969,16.4091906 1.87612767,14.3611104 1.29944572,12 M21.7005543,12 C21.1238723,14.3611104 19.7487803,16.4091906 17.8775995,17.8419191 M8.85503187,1.93775186 L10.0164274,1.58590808 C10.2044497,1.52894688 10.3998388,1.5 10.5962999,1.5 L12.136289,1.5 C12.3051663,1.5 12.4733636,1.52138931 12.6368658,1.56365733 L14.1251442,1.94840201 C14.3458327,2.00545366 14.5,2.20454398 14.5,2.43248767 L14.5,12.5354669 C14.5,13.0877517 14.0522847,13.5354669 13.5,13.5354669 L9.5,13.5354669 C8.94771525,13.5354669 8.5,13.0877517 8.5,12.5354669 L8.5,2.41627484 C8.5,2.19597061 8.64419061,2.00162604 8.85503187,1.93775186 Z M9.75,11.5 L13.25,11.5 M9.75,6.5 L13.25,6.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})