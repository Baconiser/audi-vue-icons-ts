<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M6,19.5 L19,19.5 M17,11 L12.5,15.5 L8,11 M12.5,4 C12.5,11.6666667 12.5,15.5 12.5,15.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class DownloadSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'download-small'}) title!:string;
                                }
                            </script> 