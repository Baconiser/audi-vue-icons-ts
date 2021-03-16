<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M22.5,12.5 C22.5,18.6 17.6,23.5 11.5,23.5 C5.4,23.5 0.5,18.6 0.5,12.5 C0.5,6.4 5.4,1.5 11.5,1.5 C17.6,1.5 22.5,6.4 22.5,12.5 Z M11.5,13 L11.5,5 L11.5,13 Z M16,12.5 L11.5,12.5 L16,12.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class TimeSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'time-small'}) title!:string;
                                }
                            </script> 