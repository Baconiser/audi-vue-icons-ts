<template>
                            <svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M4,33.5 L17,33.5 L4,33.5 Z M4,28.5 L17,28.5 L4,28.5 Z M4,23.5 L17,23.5 L4,23.5 Z M4,18.5 L17,18.5 L4,18.5 Z M4,13.5 L17,13.5 L4,13.5 Z M42.5,23.5 C42.5,17.7 30.9,12.6 24.2,9.8 C21.8,8.8 19.5,10 19.5,12.5 L19.5,34.4 C19.5,36.9 21.8,38.1 24.2,37.1 C30.9,34.4 42.5,29.3 42.5,23.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class LightsFullBeamLarge extends Vue {
                                    @Prop({default: 48}) width!:number;
                                    @Prop({default: 48}) height!:number;
                                    @Prop({default: 'lights-full-beam-large'}) title!:string;
                                }
                            </script> 