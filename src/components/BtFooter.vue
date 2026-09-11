<template>
  <footer class="relative text-center px-4 py-18 bg-bgcolor">
    <div class="space-y-1 text-sm">
      <p>內容監製｜今周刊</p>
      <p>專題製作｜今周刊 數位內容部</p>
      <p>{{ copyright }}</p>
    </div>

    <div class="flex items-center justify-center space-x-2 pt-4">
      <a class="w-7 can-hover:hover:opacity-60" href="https://www.facebook.com/BToday/" target="blank">
        <img class="aspect-square" src="../assets/images/ico-facebook.svg" alt="businesstoday-facebook" loading="lazy">
      </a>
      <a class="w-7 can-hover:hover:opacity-60" href="https://page.line.me/btoday?openQrModal=true" target="blank">
        <img class="aspect-square" src="../assets/images/ico-line.svg" alt="businesstoday-line" loading="lazy">
      </a>
      <a class="w-7 can-hover:hover:opacity-60" href="https://www.instagram.com/btoday_ig/" target="blank">
        <img class="aspect-square" src="../assets/images/ico-instagram.svg" alt="businesstoday-instagram" loading="lazy">
      </a>
    </div>
    
    <div v-if="showFloatButton" class="fixed right-2 bottom-0 -translate-y-1/2 z-50">
      <div
        class="w-12 h-12 rounded-full bg-primary cursor-pointer border border-bg-light
          flex items-center justify-center can-hover:hover:bg-[#7d8582] transition"
        @click="useScrollTo(0)"
      >
        <span class="w-3 h-3 border-l-2 border-t-2 border-white rotate-45 translate-y-1" />
      </div>
    </div>
    
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import useClientSize from '../composables/useClientSize';
import useWindowScroll from '../composables/useWindowScroll';
import useScrollTo from '../composables/useScrollTo';

const props = defineProps({
  showFloat: {
    type: Boolean,
    default: true
  }
})

const year = new Date().getFullYear();
const { height } = useClientSize();
const { scrollTop } = useWindowScroll();
const copyright = import.meta.env.VITE_COPYRIGHT

const showFloatButton = computed(() => {
  return props.showFloat &&
    height.value !== null &&
    scrollTop.value > height.value / 2;
});
</script>


