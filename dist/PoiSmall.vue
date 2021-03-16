<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M11.5,11.5 C13.1568542,11.5 14.5,10.1568542 14.5,8.5 C14.5,6.84314575 13.1568542,5.5 11.5,5.5 C9.84314575,5.5 8.5,6.84314575 8.5,8.5 C8.5,10.1568542 9.84314575,11.5 11.5,11.5 Z M18.5,8.5 C18.5,4.6 15.4,1.5 11.5,1.5 C7.6,1.5 4.5,4.6 4.5,8.5 C4.5,12.4 11.5,22.5 11.5,22.5 C11.5,22.5 18.5,12.4 18.5,8.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class PoiSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'poi-small'}) title!:string;
                                }
                            </script> 