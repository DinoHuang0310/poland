<template>
  <div class="container mx-auto">

    <SliderExample id="slider" class="py-20" />

    <ClientSizeExample id="client-size" class="py-20" />
    
    <LightBoxExample id="light-box" class="py-20" />

    <WindowScrollExample id="window-scroll" class="py-20" />

    <ScrollToExample id="scroll-to" class="py-20" />

    <YoutubeExample id="youtube" class="py-20" />

    <DownloadFileExample id="download-file" class="py-20" />

  </div>
</template>

<script setup>
import SliderExample from './examples/SliderExample.vue';
import ClientSizeExample from '../components/examples/ClientSizeExample.vue';
import WindowScrollExample from '../components/examples/WindowScrollExample.vue';
import LightBoxExample from '../components/examples/LightBoxExample.vue';
import ScrollToExample from '../components/examples/ScrollToExample.vue';
import YoutubeExample from '../components/examples/YoutubeExample.vue';
import DownloadFileExample from '../components/examples/DownloadFileExample.vue';

</script>
