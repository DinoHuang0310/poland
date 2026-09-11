<template>
  <header class="fixed flex justify-between items-center w-full top-0 px-4 py-2 z-40">
    <a
      class="block w-16 xl:w-20 can-hover:hover:opacity-60"
      href="https://www.businesstoday.com.tw/"
      target="blank"
    >
      <img src="./assets/images/businesstoday.svg" alt="businesstoday">
    </a>
  </header>

  <div
    class="w-full h-screen sticky top-0 overflow-hidden
      [@media(min-width:768px)_and_(orientation:portrait)]:h-auto
      [@media(min-width:768px)_and_(orientation:portrait)]:aspect-5/3"
  >
    <h1 class="sr-only">波蘭壯闊 - 歐洲野牛的復甦與自強之路</h1>
    <picture>
      <source
        srcset="./assets/images/kv.jpg"
        media="(min-width: 1024px), (min-width: 768px) and (orientation: portrait), (orientation: landscape)"
      >
      <img
        class="w-full h-full object-cover pointer-events-none"
        :style="{
          'transform': `scale(${setProgress(1, 1.2)})`,
          'filter': `blur(${setProgress(0, 3)}px) brightness(${setProgress(100, 30)}%)`,
        }"
        src="./assets/images/kv_m.jpg"
        alt="復古歐洲地圖中 聚光燈聚焦在一頭站在波蘭上的歐洲野牛"
      >
    </picture>
  </div>

  <main class="relative bg-bgcolor">
    <Introduction />
    <PolandAtAGlance />
    <FullCoverage />
  </main>
  
  <BtFooter :showFloat="true" />

  <!-- lightbox container -->
  <ModalsContainer />

</template>

<script setup>
import Introduction from './components/Introduction.vue'
import PolandAtAGlance from './components/PolandAtAGlance.vue'
import FullCoverage from './components/FullCoverage.vue'
import BtFooter from './components/BtFooter.vue';
import { ModalsContainer } from 'vue-final-modal';

import useWindowScroll from './composables/useWindowScroll';
import useClientSize from './composables/useClientSize';

const { scrollTop } = useWindowScroll();
const { height } = useClientSize();

const setProgress = (start, end) => {
  const maxScroll = height.value ?? 0;
  if (maxScroll <= 0) {
    return start;
  }

  const progress = Math.min(
    Math.max(scrollTop.value / maxScroll, 0),
    1
  );
  return start + (end - start) * progress;
}
</script>