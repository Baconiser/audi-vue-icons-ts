<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M6.5,24 L6.5,6.5 C6.5,3.7 8.7,1.5 11.5,1.5 C14.3,1.5 16.5,3.7 16.5,6.5 L16.5,12.5 M21,8 L16.5,12.5 L12,8" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class ArrowRightUTurnSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'arrow-right-u-turn-small'}) title!:string;
                                }
                            </script> 