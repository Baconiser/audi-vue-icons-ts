<template>
                            <svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M16.5,42 L16.5,27.5 C16.5,24.3 17.8,21.3 20,19 L32.5,6.5 M25,6.5 L32.5,6.5 L32.5,14" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class ArrowRightLightLarge extends Vue {
                                    @Prop({default: 48}) width!:number;
                                    @Prop({default: 48}) height!:number;
                                    @Prop({default: 'arrow-right-light-large'}) title!:string;
                                }
                            </script> 