<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M22.5,19.5 L3.5,19.5 C2.4,19.5 1.5,18.6 1.5,17.5 L1.5,4.5 L20.5,4.5 C21.6,4.5 22.5,5.4 22.5,6.5 L22.5,19.5 Z M5,9.5 L12,15 L19,9.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class DirectMailSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'direct-mail-small'}) title!:string;
                                }
                            </script> 