<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M5,13 L12,18.5 L19,13 M22,9 L12,2 L2,9 M1.5,11 L1.5,21.5 C1.5,22.6 2.4,23.5 3.5,23.5 L22.5,23.5 L22.5,11" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class ReceiveEMailNotificationSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'receive-e-mail-notification-small'}) title!:string;
                                }
                            </script> 