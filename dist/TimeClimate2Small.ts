import { defineComponent } from 'vue';export default defineComponent({name:"TimeClimate2Small",template: `<svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>{{title}}</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16,22.6 C14.6,23.2 13.1,23.5 11.5,23.5 C5.4,23.5 0.5,18.6 0.5,12.5 C0.5,6.4 5.4,1.5 11.5,1.5 C17.6,1.5 22.5,6.4 22.5,12.5 C22.5,13.7 22.3,14.9 21.9,16 M16,13.5 L11.5,13.5 L11.5,5.5" stroke="currentColor"/><path d="M18,23 L18,22.2668457 L19.1740723,21.3132324 C19.3358569,21.179931 19.4831129,21.0548915 19.6158447,20.9381104 C19.7485765,20.8213292 19.8673497,20.7102463 19.972168,20.6048584 C20.0769862,20.4994705 20.1672766,20.3989263 20.243042,20.3032227 C20.3188073,20.2075191 20.3817543,20.1135259 20.4318848,20.0212402 C20.4820152,19.9289546 20.5193277,19.8380945 20.5438232,19.7486572 C20.5683188,19.6592199 20.5805664,19.5677902 20.5805664,19.4743652 C20.5805664,19.3547357 20.5614829,19.2447922 20.5233154,19.1445312 C20.4851479,19.0442703 20.4250492,18.9582523 20.3430176,18.8864746 C20.2609859,18.8146969 20.1564541,18.7588706 20.0294189,18.7189941 C19.9023838,18.6791176 19.7500009,18.6591797 19.5722656,18.6591797 C19.4412428,18.6591797 19.308513,18.6688638 19.1740723,18.6882324 C19.0396315,18.707601 18.9094651,18.7332355 18.7835693,18.7651367 C18.6576735,18.7970379 18.5386155,18.8334959 18.4263916,18.8745117 C18.3141677,18.9155275 18.2147628,18.9565428 18.1281738,18.9975586 L18.1281738,18.1772461 C18.2067875,18.1328123 18.2985021,18.0889488 18.4033203,18.0456543 C18.5081385,18.0023598 18.6246331,17.963908 18.7528076,17.9302979 C18.8809821,17.8966877 19.0208326,17.8699138 19.1723633,17.8499756 C19.323894,17.8300373 19.4856762,17.8200684 19.6577148,17.8200684 C19.8946952,17.8200684 20.1080313,17.8391518 20.2977295,17.8773193 C20.4874277,17.9154868 20.6551913,17.9696041 20.8010254,18.0396729 C20.9468595,18.1097416 21.0716141,18.1937658 21.175293,18.291748 C21.2789719,18.3897303 21.3644202,18.4982497 21.4316406,18.6173096 C21.498861,18.7363694 21.5478514,18.8642571 21.5786133,19.0009766 C21.6093752,19.137696 21.6247559,19.2795403 21.6247559,19.4265137 C21.6247559,19.5951343 21.6014,19.7563469 21.5546875,19.9101562 C21.507975,20.0639656 21.4427494,20.2123609 21.3590088,20.3553467 C21.2752681,20.4983324 21.1764329,20.6364739 21.0625,20.7697754 C20.9485671,20.9030768 20.824667,21.0326735 20.6907959,21.1585693 C20.5569248,21.2844651 20.4156502,21.4075108 20.2669678,21.52771 C20.1182854,21.6479091 19.9681811,21.7666824 19.8166504,21.8840332 L19.4150391,22.1865234 L21.8896484,22.1865234 L21.8896484,23 L18,23 Z" fill="currentColor" fill-rule="nonzero"/></g></svg>`, props: {width: {type: Number, default: 24},height: {type: Number, default: 24},filename: {type: String, default: 24}}})