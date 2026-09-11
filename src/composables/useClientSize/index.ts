import { ref, computed, onMounted, onUnmounted } from 'vue';

export default (breakPoint: number = 640) => {
  const width = ref<number | null>(null);
  const height = ref<number | null>(null);

  const update = (): void => {
    const { clientWidth, clientHeight } = document.documentElement;

    width.value = clientWidth;
    height.value = clientHeight;
  };

  onMounted(() => {
    window.addEventListener('resize', update);
    update();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', update);
  });

  const isMobile = computed<boolean>(() => {
    return width.value ? width.value < breakPoint : false;
  });

  return {
    width,
    height,
    isMobile,
  };
};
