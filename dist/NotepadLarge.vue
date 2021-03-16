<template>
                            <svg :width="width" :height="height" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M16,26.5 L33,26.5 L16,26.5 Z M24.5,18 L24.5,35 L24.5,18 Z M41.5,13 L41.5,45.5 L7.5,45.5 L7.5,2.5 L31,2.5 L41.5,13 Z M30.5,2.5 L30.5,13.5 L41.5,13.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class NotepadLarge extends Vue {
                                    @Prop({default: 48}) width!:number;
                                    @Prop({default: 48}) height!:number;
                                    @Prop({default: 'notepad-large'}) title!:string;
                                }
                            </script> 