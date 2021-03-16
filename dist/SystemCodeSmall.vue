<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M15.5,15.5 L16.5,15.5 L16.5,16.5 L15.5,16.5 L15.5,15.5 Z M12.5,15.5 L13.5,15.5 L13.5,16.5 L12.5,16.5 L12.5,15.5 Z M15.5,12.5 L16.5,12.5 L16.5,13.5 L15.5,13.5 L15.5,12.5 Z M12.5,12.5 L13.5,12.5 L13.5,13.5 L12.5,13.5 L12.5,12.5 Z M6.5,12.5 L10.5,12.5 L10.5,16.5 L6.5,16.5 L6.5,12.5 Z M12.5,6.5 L16.5,6.5 L16.5,10.5 L12.5,10.5 L12.5,6.5 Z M6.5,6.5 L10.5,6.5 L10.5,10.5 L6.5,10.5 L6.5,6.5 Z M11.5,22.5 C17.5751322,22.5 22.5,17.5751322 22.5,11.5 C22.5,5.42486775 17.5751322,0.5 11.5,0.5 C5.42486775,0.5 0.5,5.42486775 0.5,11.5 C0.5,17.5751322 5.42486775,22.5 11.5,22.5 Z" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class SystemCodeSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'system-code-small'}) title!:string;
                                }
                            </script> 