<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M11.5,0 L11.5,2.5 L19.5,2.5 C20.6,2.5 21.5,3.4 21.5,4.5 L21.5,19.5 C21.5,20.6 20.6,21.5 19.5,21.5 L11.5,21.5 L11.5,24 M15.5,18 L15.5,14.5 C15.5,11.7 13.3,9.5 10.5,9.5 L9.5,9.5 C6.7,9.5 4.5,7.3 4.5,4.5 L4.5,1.5 M1,5 L4.5,1.5 L8,5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class ParkingOutLeftLongSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'parking-out-left-long-small'}) title!:string;
                                }
                            </script> 