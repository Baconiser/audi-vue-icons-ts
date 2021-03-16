<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M15,11.4 L8,11.4 M11.5,22.5 C17.5751322,22.5 22.5,17.5751322 22.5,11.5 C22.5,5.42486775 17.5751322,0.5 11.5,0.5 C5.42486775,0.5 0.5,5.42486775 0.5,11.5 C0.5,17.5751322 5.42486775,22.5 11.5,22.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class SystemRemoveSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'system-remove-small'}) title!:string;
                                }
                            </script> 