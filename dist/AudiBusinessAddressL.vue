<template><svg :width="width" :height="height" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.69 2h3.81A4.5 4.5 0 0 1 20 6.71V12h24.5a2.5 2.5 0 0 1 2.5 2.5V46H3.5A2.5 2.5 0 0 1 1 43.5V12h6V6.7A4.8 4.8 0 0 1 11.68 2ZM8 12h3V7h1v5h7V6.68A3.5 3.5 0 0 0 15.5 3h-3.79A3.8 3.8 0 0 0 8 6.7V12Zm11 1h-7v8.59a3.67 3.67 0 0 0 3.6 3.51c1.9 0 3.4-1.56 3.4-3.5V13Zm-8 0H2v30.5c0 .82.68 1.5 1.5 1.5H46V14.5c0-.82-.68-1.5-1.5-1.5H20v8.6c0 2.46-1.9 4.5-4.4 4.5a4.67 4.67 0 0 1-4.6-4.48V13ZM8 32h28v1H8v-1Zm0 5h20v1H8v-1Z"/></svg></template><script lang="ts" setup>import { defineProps } from "vue";defineProps({width: { type: Number, default: 48 },height: { type: Number, default: 48 },title: { type: String, default: "" }});</script>