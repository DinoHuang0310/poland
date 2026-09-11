<template>
  <div class="relative bg-primary">
    <div class="absolute w-full h-12 bottom-0 left-0 bg-primary translate-y-full z-10"></div>
    <div class="relative w-11/12 lg:w-[51%] lg:min-w-[910px] mx-auto py-18 border-x border-bg-light/50 text-white">
      <section class="flex">
        <div class="block flex-1 text-center sm:text-right sm:pr-6 pt-10">
          <img
            class="inline-block w-3/4 sm:w-3/4 lg:w-5/12 max-w-[66px] -translate-x-1/4 pointer-events-none"
            src="../assets/images/poland-ico.png"
            alt=""
          >
        </div>
        <article class="w-5/6 sm:w-4/5 2xl:w-3/4">
          <div class="mb-3">
            <span
              class="text-xs font-medium font-montserrat text-primary italic bg-white px-2.5 py-1.5"
            >POLAND AT A GLANCE</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl mb-6 font-black font-serif">
            從休克療法到國家自強，波蘭如何重振起來
          </h2>
          <div class="space-y-4">
            <p>三十多年前，波蘭才剛走出共產體制，以激烈的「休克療法」走向市場經濟；如今，它不僅成為歐洲成長最快的經濟體之一，更在俄烏戰爭後大幅強化國防，從歐洲邊陲走向區域關鍵角色。從經濟改革、安全戰略到面對俄羅斯的歷史經驗，波蘭的重生之路，也為同樣身處地緣政治前線的台灣帶來值得思考的啟示。</p>
          </div>
        </article>
      </section>
    </div>
  </div>

  <div
    class="relative sm:bg-fixed sm:bg-no-repeat sm:bg-position-[right_5rem] sm:bg-size-[35%_auto] sm:[background-image:var(--bg-img)]"
    :style="{ '--bg-img': `url(${bgImg})` }"
  >
    <div class="sticky top-0 w-full lg:w-[51%] lg:min-w-[910px] mx-auto z-50">
      <ul class="flex" ref="nav">
        <li
          class="flex justify-center items-center w-1/3 text-white text-center sm:text-left
            border border-r-0 border-bg-light px-1 py-2 sm:px-2 sm:py-4 cursor-pointer shadow-md"
          :class="active === 'article1' ? 'bg-[#7d8582]' : 'bg-primary'"
          @click="scrollTo(1)"
        >
          <span class="hidden sm:block text-5xl font-extralight font-montserrat italic pr-3">01</span>
          <div>
            <h5 class="text-xl font-bold">野牛復甦</h5>
            <p class="text-xs ">從休克到雄起</p>
          </div>
        </li>
        <li
          class="flex justify-center items-center w-1/3 text-white text-center sm:text-left
            border border-r-0 border-bg-light px-1 py-2 sm:px-2 sm:py-4 cursor-pointer shadow-md"
          :class="active === 'article2' ? 'bg-[#7d8582]' : 'bg-primary'"
          @click="scrollTo(2)"
        >
          <span class="hidden sm:block text-5xl font-extralight font-montserrat italic pr-3">02</span>
          <div>
            <h5 class="text-xl font-bold">野牛自強</h5>
            <p class="text-xs tracking-normal whitespace-nowrap">邁向歐洲最強軍火庫</p>
          </div>
        </li>
        <li
          class="flex justify-center items-center w-1/3 text-white text-center sm:text-left
            border border-bg-light px-1 py-2 sm:px-2 sm:py-4 cursor-pointer shadow-md"
          :class="active === 'article3' ? 'bg-[#7d8582]' : 'bg-primary'"
          @click="scrollTo(3)"
        >
          <span class="hidden sm:block text-5xl font-extralight font-montserrat italic pr-3">03</span>
          <div>
            <h5 class="text-xl font-bold">野牛渡河</h5>
            <p class="text-xs">給台灣的啟示</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="relative">
      <div class="relative w-11/12 lg:w-[51%] lg:min-w-[910px] mx-auto pb-3 sm:pb-18 py-18 border-x border-bg-light">
        <div class="absolute h-full -left-12 top-0 -translate-x-full">
          <span
            class="sticky top-0 text-[300px] text-bg-light/50 font-montserrat font-light italic pointer-events-none"
          >01</span>
        </div>
        <article class="w-full sm:w-4/5 2xl:w-3/4" ref="article1">
          <span class="inline-block text-white text-sm bg-secondary px-2.5 py-1.5">
            <span class="inline-block font-montserrat italic pr-1 scale-90">Act 1</span>
            <span>野牛復甦</span>
          </span>
          <p class="text-sm opacity-80 mt-1 mb-4">從休克到雄起</p>
          <h3 class="text-3xl sm:text-4xl lg:text-5xl mb-6 font-black font-serif text-primary">從休克療法，到兆美元經濟體</h3>
          <p>從共產體制瓦解後的經濟重整，到加入歐盟、承接市場與供應鏈，波蘭花了三十多年重新堆疊製造、科技與服務能力，讓一頭瀕死的野牛重新站起來。</p>
        </article>
        <ul class="relative flex justify-between scale-105 space-x-2 sm:space-x-6 lg:space-x-12 mt-10 sm:mt-16">
          <ArticleList1 />
          <ArticleList2 />
        </ul>
      </div>
    </div>

    <div class="relative">
      <div class="absolute w-1/2 h-px top-18 left-0 bg-bg-light"></div>
      <div class="relative w-11/12 lg:w-[51%] lg:min-w-[910px] mx-auto pb-3 sm:pb-18 py-18 border-x border-bg-light">
        <div class="absolute w-full h-px left-0 top-18 bg-bg-light"></div>
        <div class="absolute h-full -left-12 top-0 -translate-x-full">
          <span
            class="sticky top-0 text-[300px] text-bg-light/50 font-montserrat font-light italic pointer-events-none"
          >02</span>
        </div>
        <article class="w-full sm:w-4/5 2xl:w-3/4" ref="article2">
          <span class="inline-block text-white text-sm bg-secondary px-2.5 py-1.5">
            <span class="inline-block font-montserrat italic pr-1 scale-90">Act 2</span>
            <span>野牛自強</span>
          </span>
          <p class="text-sm opacity-80 mt-1 mb-4">邁向歐洲最強軍火庫</p>
          <h3 class="text-3xl sm:text-4xl lg:text-5xl mb-6 font-black font-serif text-primary">把國防預算，<br>煉成國家第二經濟引擎</h3>
          <p>俄烏戰爭後，波蘭將國防支出推向GDP近5%，大舉採購美韓軍武，卻不只追求快速補充戰力；透過技術移轉、在地生產與彈藥產線擴張，軍購被轉化為本土軍工升級的槓桿。</p>
        </article>
        <ul class="relative flex justify-between scale-105 space-x-2 sm:space-x-6 lg:space-x-12 mt-10 sm:mt-16">
          <ArticleList3 />
        </ul>
      </div>
    </div>

    <div class="relative">
      <div class="absolute w-1/2 h-px top-18 right-0 bg-bg-light"></div>
      <div class="relative w-11/12 lg:w-[51%] lg:min-w-[910px] mx-auto py-18 border-x border-bg-light">
        <div class="absolute w-full h-px left-0 top-18 bg-bg-light"></div>
        <div class="absolute h-full -left-12 top-0 -translate-x-full">
          <span
            class="sticky top-0 text-[300px] text-bg-light/50 font-montserrat font-light italic pointer-events-none"
          >03</span>
        </div>
        <article class="w-full sm:w-4/5 2xl:w-3/4" ref="article3">
          <span class="inline-block text-white text-sm bg-secondary px-2.5 py-1.5">
            <span class="inline-block font-montserrat italic pr-1 scale-90">Act 3</span>
            <span>野牛渡河</span>
          </span>
          <p class="text-sm opacity-80 mt-1 mb-4">給台灣的啟示</p>
          <h3 class="text-3xl sm:text-4xl lg:text-5xl mb-6 font-black font-serif text-primary">一個國家為什麼不會消失？</h3>
          <p>波蘭曾有123年從世界地圖上消失，語言、文化與民族認同卻沒有消失。 這段歷史形塑了今天的安全共識，也映照出台灣最難回答的問題： 國家該如何凝聚共同記憶，並在強鄰之間取得行動空間？</p>
        </article>
        <ul class="relative flex justify-between scale-105 space-x-2 sm:space-x-6 lg:space-x-12 mt-10 sm:mt-16 pb-10">
          <ArticleList4 />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import useScrollTo from '../composables/useScrollTo';

import ArticleList1 from './articles/ArticleList1.vue';
import ArticleList2 from './articles/ArticleList2.vue';
import ArticleList3 from './articles/ArticleList3.vue';
import ArticleList4 from './articles/ArticleList4.vue';

import bgImg from '../assets/images/poland-map.png'

const active = ref(null)

const nav = ref(null)
const article1 = ref(null)
const article2 = ref(null)
const article3 = ref(null)

const getOffsetTop = (element) => {
  let offsetTop = 0;
  let target = element
  while(target) {
    offsetTop += target.offsetTop;
    target = target.offsetParent;
  }
  return offsetTop;
}

const scrollTo = function(target) {
  const articles = {
    1: article1,
    2: article2,
    3: article3,
  }
  const el = articles[target]?.value;
  const offset = nav.value.offsetHeight;
  if (el) {
    useScrollTo(getOffsetTop(el) - offset)
  }
}

let observer = null

onMounted(() => {
  const articles = [
    { el: article1.value, key: 'article1' },
    { el: article2.value, key: 'article2' },
    { el: article3.value, key: 'article3' },
  ]

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const article = articles.find((item) => item.el === entry.target)

          if (article) {
            active.value = article.key
          }
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  articles.forEach(({ el }) => {
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
