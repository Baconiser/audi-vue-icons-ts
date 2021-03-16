<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M6.4,11.5 L9.4,15.4 L5.3,18.4 M9.1,15.3 C4.7,14.8 1.5,13.3 1.5,11.5 C1.5,9.3 6.2,7.5 12,7.5 C17.8,7.5 22.5,9.3 22.5,11.5 C22.5,13.1 19.9,14.6 16.1,15.2" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class RotateLeftSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'rotate-left-small'}) title!:string;
                                }
                            </script> 