<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M6.8,11.8 C6.8,15 9.4,17.6 12.6,17.6 C15.8,17.6 18.4,15 18.4,11.8 C18.4,8.6 15.7,6 12.5,6 C10.4,6 8.3,7.4 7.5,8.9 C6.7,10.4 6.8,11.8 6.8,11.8 Z M12.5,23 L12.5,17.5 L12.5,23 Z M19.5,19.5 L16.2,16.2 L19.5,19.5 Z M19.5,16 L19.5,19.5 L16,19.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class RoundaboutSharpRightSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'roundabout-sharp-right-small'}) title!:string;
                                }
                            </script> 