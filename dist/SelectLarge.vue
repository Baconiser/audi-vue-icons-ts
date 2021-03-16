<template>
                            <svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M12.5 25.5L20.7 33.7 35.2 14.4" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class SelectLarge extends Vue {
                                    @Prop({default: 48}) width!:number;
                                    @Prop({default: 48}) height!:number;
                                    @Prop({default: 'select-large'}) title!:string;
                                }
                            </script> 