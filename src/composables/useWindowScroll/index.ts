import { ref, computed, onMounted, onUnmounted } from 'vue';

export default (breakPoint: number = 0) => {
  const scrollTop = ref<number>(0);

  const update = (): void => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop.value = y;
  };

  const overY = computed<boolean>(() => {
    return scrollTop.value > breakPoint;
  });

  onMounted(() => {
    update();
    window.addEventListener('scroll', update);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', update);
  });

  return {
    scrollTop,
    overY,
  };
};
