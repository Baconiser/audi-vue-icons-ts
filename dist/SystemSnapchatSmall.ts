import { defineComponent } from 'vue';export default defineComponent({name:"SystemSnapchatSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle stroke="currentColor" cx="11.5" cy="11.5" r="11"/><path d="M18.070322,14.7183712 C16.7036394,14.4129927 15.8894667,13.4883509 15.3481786,12.2683692 C15.2381822,12.0203881 15.3140154,11.8460502 15.5420895,11.6960048 C15.7190336,11.5796007 15.9198383,11.5160728 16.1202601,11.4536943 C16.3707777,11.3757213 16.6121034,11.2773258 16.8107251,11.1005357 C17.0980103,10.8447764 17.0636556,10.4877479 16.7323258,10.2910335 C16.4890085,10.1465438 16.2336269,10.1079213 15.9679043,10.2347473 C15.8005351,10.3145978 15.6258507,10.3749455 15.4396764,10.381306 C15.2961295,10.3862488 15.1986571,10.3680103 15.2146663,10.1591881 C15.2477571,9.72752 15.2927591,9.2945108 15.2705071,8.92970414 C15.2705071,8.71927264 15.2703539,8.57880617 15.2705071,8.43830137 C15.272154,7.18126819 14.6868979,6.24693241 13.6610434,5.57536779 C12.9142397,5.08649388 12.0711126,4.96208181 11.1942052,5.00928713 C10.3853561,5.05285243 9.64100355,5.2869249 9.0112051,5.80453581 C8.32548925,6.36808762 7.85218292,7.0663585 7.75769784,7.97801121 C7.68163485,8.71153281 7.732918,9.4442881 7.78083079,10.1757406 C7.79205257,10.3475496 7.72269201,10.3732979 7.59714596,10.3821106 C7.37535303,10.3976669 7.16842035,10.3372426 6.97194346,10.2421806 C6.73195823,10.1260448 6.50216069,10.1584984 6.27960177,10.2813395 C5.93111381,10.4736093 5.89852086,10.8544703 6.2023898,11.11318 C6.39538143,11.277479 6.6228044,11.3734989 6.85964906,11.4495562 C7.02912474,11.5040416 7.19814083,11.557684 7.35666283,11.6404466 C7.68967776,11.8142863 7.77416666,12.016135 7.61300199,12.3592931 C7.05080231,13.5560935 6.22039061,14.4485116 4.86887469,14.7391768 C4.59836469,14.7973405 4.51621207,15.0073889 4.65964403,15.2437603 C4.74949487,15.3918517 4.89204594,15.4777945 5.04164414,15.5502884 C5.40480085,15.7263504 5.79434597,15.8276579 6.19009563,15.8742885 C6.42280394,15.9017611 6.49258579,16.0105785 6.53536643,16.2111628 C6.67374285,16.8602742 6.71924276,16.8791257 7.36708032,16.7550968 C8.10852208,16.6130977 8.81266003,16.67061 9.42468745,17.1795615 C9.56605125,17.2970767 9.72376895,17.3963535 9.88014615,17.4941359 C10.9559434,18.1669267 12.0353024,18.1694555 13.1112911,17.4967031 C13.3809585,17.3281127 13.6382169,17.1398661 13.9033266,16.9638424 C14.1646447,16.7903475 14.4558365,16.7174705 14.7675186,16.6992321 C15.1594766,16.6762425 15.5420895,16.730268 15.9250854,16.8007695 C16.1833395,16.8482813 16.3258906,16.7565145 16.3950979,16.5054297 C16.4355423,16.3587177 16.4646117,16.2089022 16.4999622,16.0607725 C16.5220994,15.9680094 16.5648417,15.9123746 16.6752594,15.8950174 C16.931905,15.8547856 17.1881675,15.8043235 17.439183,15.7376536 C17.7277322,15.6610216 18.0134471,15.5660362 18.240985,15.3589382 C18.3590626,15.2515385 18.4337851,15.1175091 18.3897023,14.9499149 C18.3474578,14.7891792 18.2113028,14.7499053 18.070322,14.7183712 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})