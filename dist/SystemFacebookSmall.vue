<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M9.2,10.1 L7,10.1 L7,12.1 L9.2,12.1 L9.2,18 L11.8,18 L11.8,12.1 L14.4,12.1 L14.4,10.1 L11.8,10.1 L11.8,9.3 C11.8,8.7 12.4,7.5 13.3,7.5 L14.4,7.5 L14.4,5.5 L12.1,5.5 C9,5.9 9.2,10.1 9.2,10.1 L9.2,10.1 Z" fill="currentColor" fill-rule="nonzero"/>
        <circle stroke="currentColor" cx="11.5" cy="11.5" r="11"/>
    </g>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class SystemFacebookSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'system-facebook-small'}) title!:string;
                                }
                            </script> 