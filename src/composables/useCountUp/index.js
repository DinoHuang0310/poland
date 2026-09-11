import { ref, onMounted, onUnmounted } from 'vue'

export function useCountUp(target, duration = 1000, el) {
  const count = ref(0)

  let observer = null
  let animationFrame = null

  const hasDecimal = target % 1 !== 0;

  const countUp = () => {
    const startTime = performance.now()

    const update = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      )

      count.value = Number((target * progress).toFixed(hasDecimal ? 1 : 0))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update)
      } else {
        count.value = target
      }
    }

    animationFrame = requestAnimationFrame(update)
  }

  onMounted(() => {
    if (!el?.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        countUp()
        observer.disconnect()
      },
      {
        threshold: 0.5
      }
    )

    observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()

    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  })

  return {
    count,
    countUp
  }
}
