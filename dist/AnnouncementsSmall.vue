<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M11.5,5.5 L11.5,13.5 L8.5,13.5 L11.5,22.5 L7.5,22.5 L4.5,13.5 L0.5,13.5 L0.5,5.5 L11.5,5.5 Z M11.5,5.5 C15.4,5.5 21.5,2.5 21.5,2.5 C22.7,2.5 23.5,5 23.5,9.5 C23.5,14 22.7,16.5 21.5,16.5 C21.5,16.5 15.4,13.5 11.5,13.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class AnnouncementsSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'announcements-small'}) title!:string;
                                }
                            </script> 