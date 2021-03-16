<template>
                            <svg :width="width" :height="height" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>
        {{title}}
    </title>
    <path d="M12.5,14 L12.5,18 L12.5,14 Z M20.5,21.5 L20.5,11.5 L4.5,11.5 L4.5,21.5 L20.5,21.5 Z M6.5,7.5 C6.5,4.73857625 8.41877964,2.5 10.7857143,2.5 L14.2142857,2.5 C16.5812204,2.5 18.5,4.73857625 18.5,7.5 L18.5,11.5" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"/>
</svg>
</template>
                            <script lang="ts">
                                import { Component, Prop, Vue } from "vue-property-decorator";
                                
                                @Component
                                export default class LockUnlockSmall extends Vue {
                                    @Prop({default: 24}) width!:number;
                                    @Prop({default: 24}) height!:number;
                                    @Prop({default: 'lock-unlock-small'}) title!:string;
                                }
                            </script> 