<template>
                            <svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M33.5,22.5 L16.5,22.5 L16.5,42 M28,17 L33.5,22.5 L28,28" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class ArrowRightNormalLarge extends Vue {
                                    @Prop({default: 48}) width!:number;
                                    @Prop({default: 48}) height!:number;
                                    @Prop({default: 'arrow-right-normal-large'}) title!:string;
                                }
                            </script> 