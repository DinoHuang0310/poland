<template>
  <div>
    <div class="relative w-11/12 lg:w-[51%] lg:min-w-[910px] mx-auto border-x border-bg-light py-18">
      <div class="hidden sm:block absolute w-px h-full top-0 -left-[4%] bg-bg-light"></div>
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
              class="text-xs font-medium font-montserrat text-white italic bg-primary px-2.5 py-1.5"
            >INTRODUCTION</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl mb-6 text-primary font-black font-serif">
            一頭曾經瀕死的野牛，<br class="hidden sm:block">如何在三十年間被重新養活、餵壯？
          </h2>
          <div class="space-y-4">
            <p>2009 年冬天某個凌晨三點，波蘭國鐵夜車停靠第二大城克拉科夫，旅波台僑林啟揚踏下車廂，腳下卻沒有月台——車站正在改建，積雪蓋住臨時的碎石地。</p>
            <p>十多年後，同一棟廢棄舊火車站，已改建成一間遊戲公司的辦公室，一部分空間還開放成新創孵化器。克拉科夫如今被視為波蘭的矽谷，超過五十家國際科技巨頭進駐。</p>
          </div>
        </article>
      </section>
    </div>
  </div>

  <div class="relative">
    <div class="absolute w-full h-px bg-bg-light top-8"></div>
    <div class="absolute w-11/12 lg:w-[51%] h-full left-1/2 top-0 -translate-x-1/2 lg:min-w-[910px] border-x border-bg-light">
      <div class="hidden sm:block absolute w-px h-full top-0 -left-[4%] bg-bg-light"></div>
    </div>
    <div class="absolute w-full h-36 bottom-0 left-0 bg-primary">
      <div class="absolute w-full h-px bg-bg-light -top-10"></div>
      <div class="absolute w-11/12 lg:w-[51%] h-full left-1/2 top-0 -translate-x-1/2 lg:min-w-[910px] border-x border-bg-light/50"></div>
    </div>
    <ul class="relative sm:flex justify-between lg:w-[58%] lg:min-w-[1024px] mx-auto pb-8 xl:pb-18 space-y-6 sm:space-y-0">
      <li ref="number1El" class="w-4/5 sm:w-[31%] mx-auto bg-white shadow-md">
        <figure>
          <img class="aspect-16/11 pointer-events-none" src="../assets/images/poland-val-1.jpg" alt="3D波蘭地圖">
          <figcaption class="space-y-2 p-4">
            <div class="text-center text-primary">
              <span class="text-5xl font-montserrat font-light italic">{{ count1 }}</span><span class="pl-2 font-bold">年</span>
            </div>
            <h4 class="font-bold text-primary text-lg tracking-normal">1795—1918，國家從地圖消失</h4>
            <p class="tracking-normal opacity-70">第三次瓜分後，波蘭領土分屬俄羅斯、普魯士與奧地利，直到第一次世界大戰結束才恢復獨立。</p>
          </figcaption>
        </figure>
      </li>
      <li ref="number2El" class="w-4/5 sm:w-[31%] mx-auto bg-white shadow-md">
        <figure>
          <img class="aspect-16/11 pointer-events-none" src="../assets/images/poland-val-2.jpg" alt="復古鋼筆">
          <figcaption class="space-y-2 p-4">
            <div class="text-center text-primary">
              <span class="text-5xl font-montserrat font-light italic">{{ count2 }}</span><span class="pl-2 font-bold">年</span>
            </div>
            <h4 class="font-bold text-primary text-lg tracking-normal">1944—1989，受共產體制統治</h4>
            <p class="tracking-normal opacity-70">二戰末期起，波蘭在蘇聯主導下建立共產政權；1989年選舉與團結工聯勝利，開啟民主轉型。</p>
          </figcaption>
        </figure>
      </li>
      <li ref="number3El" class="w-4/5 sm:w-[31%] mx-auto bg-white shadow-md">
        <figure>
          <img class="aspect-16/11 pointer-events-none" src="../assets/images/poland-val-3.jpg" alt="無人機">
          <figcaption class="space-y-2 p-4">
            <div class="text-center text-primary">
              <span class="text-5xl font-montserrat font-light italic">{{ count3 }}</span><span class="pl-2 font-bold">%</span>
            </div>
            <h4 class="font-bold text-primary text-lg tracking-normal">2025年國防預算規劃占比</h4>
            <p class="tracking-normal opacity-70">北約指出，波蘭2025年規劃投入GDP的4.7%於國防，為當年北約成員國最高水準。</p>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCountUp } from '../composables/useCountUp';

const number1El = ref(null)
const number2El = ref(null)
const number3El = ref(null)

const { count: count1 } = useCountUp(123, 1200, number1El)
const { count: count2 } = useCountUp(45, 1200, number2El)
const { count: count3 } = useCountUp(4.7, 1200, number3El)

</script>
