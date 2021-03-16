<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M23.5,11.5 L21.5,9.5 L13.5,12 L12.5,10.5 L4.5,10.5 L4.5,16.5 L15,16.5 L20,10 M9.5,10.5 L9.5,7.5 M7.5,7.5 L11.5,7.5 M0,8.5 L3,8.5 L5,10.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class OilChangeSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'oil-change-small'}) title!:string;
                                }
                            </script> 