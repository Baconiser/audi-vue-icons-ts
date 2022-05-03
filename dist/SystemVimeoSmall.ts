import { defineComponent } from 'vue';export default defineComponent({name:"SystemVimeoSmall",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle stroke="currentColor" cx="11.5" cy="11.5" r="11"/><path d="M16.9941975,9.41348796 C16.9407971,10.5388415 16.1249119,12.0798131 14.5469017,14.0355952 C12.9153711,16.0786086 11.5350022,17.0999999 10.4057949,17.0999999 C9.7065504,17.0999999 9.11434658,16.4780727 8.63098346,15.2337569 C8.30794137,14.0931725 7.98525928,12.9527035 7.6623372,11.8121191 C7.30317488,10.5684955 6.91809239,9.94587607 6.50636973,9.94587607 C6.41660915,9.94587607 6.10244712,10.1278388 5.56460365,10.4903796 L5,9.78964427 C5.59220383,9.28829483 6.1764876,8.78706077 6.75129131,8.28513441 C7.54113642,7.62755317 8.13406025,7.28174321 8.5292228,7.24678144 C9.46318883,7.1603578 10.0379925,7.77536183 10.2537539,9.09190893 C10.4869154,10.5123029 10.6481965,11.3958087 10.7389171,11.7416186 C11.0080788,12.9200494 11.3042407,13.5085148 11.6278828,13.5085148 C11.8790444,13.5085148 12.2563269,13.1263585 12.7593701,12.3620458 C13.2619334,11.5975023 13.5310951,11.0158446 13.5674553,10.6162651 C13.6389758,9.95649152 13.3696941,9.62579704 12.7593701,9.62579704 C12.4720883,9.62579704 12.1759264,9.68948977 11.8712444,9.81537521 C12.4609282,7.95432454 13.5877355,7.05051093 15.2509462,7.10208819 C16.4839542,7.13693457 17.0652379,7.9073627 16.9941975,9.41348796" fill="currentColor" fill-rule="nonzero"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})