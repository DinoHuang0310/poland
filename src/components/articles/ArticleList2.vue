<template>
  <li class="w-1/2 even:mt-10 even:sm:mt-16">
    <figure
      class="bg-white cursor-pointer shadow-md can-hover:hover:shadow-xs can-hover:hover:scale-102 transition"
      @click="openModal"
    >
      <img
        class="aspect-4/3 object-cover object-center bg-primary/30"
        src="/src/assets/images/article-img02.jpg"
        alt="對俄羅斯與共產主義，不抱幻想"
        loading="lazy"
      >
      <figcaption class="p-2 sm:p-4">
        <h5 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif mb-2">對俄羅斯與共產主義，不抱幻想</h5>
        <p class="tracking-normal sm:tracking-widest">從歷史記憶、安全位置到產業布局，理解波蘭如何看待俄羅斯，以及台波為何成為理念相近的天然夥伴。</p>
      </figcaption>
    </figure>
  </li>

  <!-- popup -->
  <VueFinalModal
    v-model="showModal"
    class="flex justify-center items-center z-50"
    content-class="flex flex-col w-11/12 md:w-2/3 lg:w-1/2 max-h-[70vh] sm:max-h-[80vh] 
      md:max-h-[70vh] overflow-auto p-4 bg-white border"
  >
    <figure class="relative -m-4 sm:m-0">
      <img
        class="w-full aspect-4/3 sm:aspect-5/3 object-cover object-center bg-primary/30"
        src="/src/assets/images/article-img02.jpg"
        alt="專訪／對共產主義、俄羅斯不抱幻想...形象展落腳華沙絕非巧合！波蘭大使劉永健：台波是反共的「天然夥伴」"
      >
      <figcaption class="absolute w-full bottom-0 left-0 p-2 sm:p-4 pt-8 bg-linear-to-b from-black/0 to-black/90">
        <h3 class="text-2xl sm:text-3xl xl:text-4xl text-white font-black font-serif">
          專訪／對共產主義、俄羅斯不抱幻想...形象展落腳華沙絕非巧合！波蘭大使劉永健：台波是反共的「天然夥伴」
        </h3>
      </figcaption>
    </figure>
    <div class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 mt-4 sm:mt-0">
      <ul class="sm:flex text-xs sm:space-x-4 space-y-0.5 sm:space-y-0 tracking-normal py-4 sm:py-6 border-b border-bg-light">
        <li><span class="text-primary font-black">撰文</span>｜鄭鴻達</li>
        <li><span class="text-primary font-black">圖源</span>｜鄭鴻達攝影</li>
      </ul>
      <section class="p-4 bg-black/10 border-l-6 border-primary space-y-6 mt-8">
        <p>俄烏戰爭爆發至今超過4年，波蘭擔綱北約東翼最前線國家。我國駐波蘭大使劉永健除管轄波蘭事務，也兼轄烏克蘭事務，可謂我國外交體系中，最接近戰場的「前線外交官」。</p>
        <p>俄烏戰爭爆發後，波蘭地緣政治角色更被突顯。劉永健接受《今周刊》專訪，歸納波蘭扮演三大角色：北約與歐盟「東翼」前線、中東歐再工業化與再武裝化重要生產基地，還有擔綱「援烏門戶」與戰後重建樞紐。</p>
        <p>劉永健認為，波蘭是個人民友好、與台灣理念相近的夥伴，台灣不但應將波蘭定位為合作夥伴，他更推薦台灣的企業、學子將波蘭視為進入歐盟的門戶。</p>
        <p>談及烏克蘭議題，劉永健坦言戰前台烏互動相當有限，但過去四年透過各項援烏工作，雙邊關係已增進不少，也期許烏國政府對台灣展現更多政治善意。</p>
        <p>劉永健更強調，因波蘭曾受共產黨統治45年，對共產主義、俄羅斯都「不抱任何幻想」，其反共立場更與台灣理念相近，是台灣的「天然夥伴」（natural partner）。</p>
      </section>
    </div>
    <article v-if="showArticle" class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 my-8 space-y-6">
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">俄烏戰後地緣政治角色凸顯　劉永健：波蘭扮演三大角色</h4>
      <p>自2022年俄烏戰爭爆發後，波蘭作為北約東翼第一線國家，持續推動軍事與經濟雙軌發展。劉永健指出，波蘭在整體地緣政治的定位，於戰爭爆發後快速凸顯，也可歸納成以下三大角色。</p>
      <p>第一，劉永健指出，波蘭現在是北約、歐盟的最前線角色，常自稱「東翼」（East Flank）國家。他說，北約與歐洲的戰略重心，已從傳統西歐明顯移往中歐、東歐與波羅的海國家，波蘭正扮演此前沿角色。</p>
      <p>第二，劉永健指出，俄烏戰爭爆發後，各界強調工業鏈韌性，對於歐洲「再工業化」或「再武裝化」政策，波蘭是中東歐量體最大的國家，其人口近3800萬、工業基礎雄厚，也成中東歐再工業化、再武裝化重要生產基地。</p>
      <p>第三，扮演關鍵援烏角色。劉永健說明，波蘭緊鄰烏克蘭，過去四年更扮演援烏最重要門戶，同時成為烏克蘭戰後重建樞紐，更重要的，是波蘭是自由民主國家，是與台灣理念相近的夥伴，也是美國重要盟友。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_4312.jpeg"
          alt="我國駐波蘭大使劉永健接受《今周刊》專訪"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 我國駐波蘭大使劉永健接受《今周刊》專訪，談及台波烏關係與合作。鄭鴻達攝影。
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">是時候重視波蘭！台灣形象展落腳華沙 「絕非巧合」</h4>
      <p>談到台灣該如何定位波蘭，劉永健表示，台灣應認為波蘭是合作夥伴，是台商企業進入歐盟的門戶（Gateway to Europe），因此這次歐洲台灣形象展選在華沙舉辦，「絕對不是巧合，而是有意的選擇」。</p>
      <p class="font-bold text-secondary">劉永健指出，台灣形象展並非單純是貿易拓展活動，而是切入波蘭供應鏈市場、援烏及烏克蘭重建市場的管道。他說，透過與波蘭合作，除能提升波蘭工業能力，也讓台灣能在歐洲建立韌性供應鏈，扮演台灣進入歐盟市場的門戶。</p>
      <p>劉永健也提到，這次歐洲台灣形象展幾個主題，包括無人載具、智慧製造ICT產業、智慧城市、能源與基礎建設，都緊扣波蘭作為歐盟東翼、援烏樞紐、烏克蘭重建角色，以及歐洲再工業化重要基地的定位。</p>
      <blockquote class="p-4 bg-black/10 italic border-l-6 border-primary">
        相關新聞：<br>
        <p class="pt-2 underline">
          <a href="https://www.businesstoday.com.tw/article/category/183025/post/202606220050/" target="_blank">
            歐洲台灣形象展波蘭登場，電電公會科技園區落腳樂斯拉夫！黃志芳：無人機洽談逾千場，商機估將破紀錄
          </a>
        </p>
      </blockquote>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭總理圖斯克多次點名台灣，副總理國會上談科技合作「史上首次」</h4>
      <p>今年為2026年，我國在波蘭已設處30餘年。劉永健指出，近期不論是鴻海與波蘭國營電動車公司（ElectroMobility Poland）電動車合作案，或電電公會宣布台灣園區成立，都獲得台波雙方高度重視。</p>
      <p class="font-bold text-secondary">不僅如此，劉永健透露，波蘭總理圖斯克（Donald Tusk）不止一次在公開場合，提到與台灣科技合作，波蘭副總理兼外長西科爾斯基（Radosław Sikorski）2月在國會做施政報告時，更主動提及強化與台灣科技合作意願，「這是史上首次，且絕非偶然」。</p>
      <p>劉永健分析，台灣在半導體、AI、高科技產業等領域是世界領先，雙方合作是互惠的，因此對台灣而言，來波蘭可開拓進入歐盟市場的版圖。</p>
      <p>劉永健說，波蘭政府則把電電公會在波蘭園區的投資，比擬為20年前日本豐田（Toyota）、10年前韓國LG在波蘭的投資，這絕非單純設廠生產，而是高科技產業供應鏈移植波蘭、在波蘭落地生根。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_4305.jpeg"
          alt="2026歐洲台灣形象展"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 2026歐洲台灣形象展，首度移師波蘭華沙舉辦，突顯波蘭在歐洲地區的角色。鄭鴻達攝影。
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">曾受共黨統治45年　波蘭對俄國、共產主義「不抱幻想」</h4>
      <p>記者問到劉永健駐波蘭期間，有何最具挑戰、驚心動魄的經驗？劉永健笑說「沒那麼戲劇化」，他表示波蘭代表處算中型館，人力相當有限，很感謝外交部、經濟部、教育部同仁，在各自崗位發掘機會與努力，讓台波在各領域都有更多合作空間。</p>
      <p class="font-bold text-secondary">劉永健話鋒一轉指出，波蘭過去曾受共產黨統治45年，因此對共產主義不抱任何幻想；不僅如此，他表示，波蘭也視俄羅斯為最大國安威脅，整個社會基本上反對俄羅斯態度相當堅定、對俄國沒任何幻想（illusion）。</p>
      <p>劉永健直言，波蘭這種反共立場，加上其為自由民主的國家，其實是與台灣的「天然夥伴」（natural partner），台波雙方有很多可以合作的地方。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_4480.jpeg"
          alt="波蘭華沙市 反中共主題塗鴉"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 在波蘭華沙市區高架橋柱子上，隨處可見當地人民彩繪的支援圖博（西藏）、反中共等主題的塗鴉。鄭鴻達攝影。
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">台灣第一時間站出來挺烏克蘭　烏國社會韌性、無人機成啟示</h4>
      <p>除波蘭事務外，劉永健也兼轄烏克蘭事務。他表示，烏克蘭戰爭一開始，台灣就第一時間站出來支援，也配合國際社會對俄羅斯的制裁行動，清楚向烏方表達理念相近民主國家團結一致的立場。</p>
      <p>劉永健指出，過去四年台灣援烏，從早期人道援助、醫療用品、民生物資，到協助恢復學校、醫院、社福機構等重建，近期更盼以台灣科技強項、基礎建設、智慧醫療參與重建，也為國內產業找出路。</p>
      <p class="font-bold text-secondary">劉永健認為，烏克蘭抵抗侵略逾四年、社會仍維持運作，這種韌性值得台灣借鑑。他認為，烏國無人機實戰經驗更已改變當代戰爭樣態，使其從受援方轉為軍工輸出角色，其中有很多與台灣合作機會。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_4378.jpeg"
          alt="波蘭華沙老城區市集廣場中 美人魚雕像"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭華沙老城區市集廣場中的美人魚雕像，是華沙重要的歷史、精神象徵。鄭鴻達攝影。
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">台烏關係近四年增溫　劉永健：盼基輔展現更多政治善意</h4>
      <p>談到台烏關係轉變，劉永健坦言，戰前雙方互動「相當有限」，台灣在基輔未設代表處，民間、商務往來都不多；但過去四年透過援烏工作，政府與民間的作為都讓雙邊關係增進不少。</p>
      <p>他舉例，目前烏克蘭市民議政、NGO活動等民間交流已相當頻繁，代表處與利沃夫、基輔、文尼察、尼古拉耶夫等城市也有良好合作，但在中央政府層次，盼烏方對台展現更多政治善意。</p>
      <p>劉永健透露，他常向烏克蘭夥伴說，他們不只是為烏克蘭而戰，也是為自由民主的價值、為「以規則為基礎的國際秩序」（rule-based international order）而戰，台灣援烏也是基於同樣信念。</p>
      <p class="font-bold text-secondary">對於台烏無人機產業合作，劉永健表示對業界合作絕對樂觀其成，台灣扮演促成者角色，但更高層次合作，仍須對方展現「政治善意」。當被問及烏國中央政府是否有具體回應？他僅說「都還在努力，在還沒有成熟之前，先不多談」。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_3145.jpeg"
          alt="在烏克蘭利沃夫市郊，一幅牆上塗鴉寫著烏克蘭反貪腐與人權鬥士 Kateryna Handziuk（卡特琳娜·漢久克）名言"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 在烏克蘭利沃夫市郊，一幅牆上塗鴉寫著烏克蘭反貪腐與人權鬥士 Kateryna Handziuk（卡特琳娜·漢久克）名言：「讓我們團結在一起、彼此相互依靠。因為一開始，他們會先收拾右派的左手，接著收拾條子（警察）的右手，再來就會輪到我們——這些平凡、膽小怕事的老百姓。」鄭鴻達攝影。
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">台商卡位波蘭、烏克蘭商機　台波直航或「水到渠成」</h4>
      <p>談及台商契機，劉永健表示，以波蘭為樞紐布局波、烏及歐洲很有機會。他提到，台灣語言中心首波設於波蘭，華語人才可為台商所用，且此次形象展逾百家戰略性產業廠商參展，台波烏合作「值得期待」。</p>
      <p>在旅遊方面，劉永健坦言台波尚無直航，但航權協定十幾年前已簽署，只要市場夠強、直航需求夠大，航空公司一定會開航，這是「水到渠成」的事。談到教育，他說，台波雙方都提供很多留學獎學金，因此鼓勵有意切入歐盟市場的學生赴波深造。</p>
      <p class="font-bold text-secondary">最後，該如何用一句話形容波蘭？劉永健說，波蘭是人民友好且與台灣理念相近的夥伴，台波雖相距幾千公里，但波蘭人在工作態度、重視教育與家庭上都和台灣人很像，「值得國人進一步認識」。</p>
      
      <div class="my-8 sm:my-10">
        <span class="inline-block px-3 py-2 text-primary text-sm border border-primary">本文不授權媒體夥伴</span>
      </div>
      <hr class="border-0 border-b border-bg-light">
    </article>
    <div class="w-full max-w-2xl mx-auto mb-8 sm:px-4 2xl:px-8">
      <h5 class="inline-block text-white bg-secondary px-2.5 py-1">相關新聞</h5>
      <ul class="list-disc pl-6 lg:pl-8 mb-8 sm:mb-16">
        <li>
          <a
            class="block sm:px-2 py-4 border-b border-bg-light can-hover:hover:underline"
            href="https://www.businesstoday.com.tw/article/category/183025/post/202606230037/"
            target="_blank"
          >二戰後最大規模破壞⋯烏克蘭損失逾18.6兆，台灣日本波蘭攜手搶進歐洲最大基建案：無人機需求居全球之冠</a>
        </li>
      </ul>
      <a
        class="block font-bold text-center text-sm py-4 border border-bg-light bg-black/10 can-hover:hover:underline"
        href="https://www.businesstoday.com.tw/article/category/183025/post/202607030043/"
        target="_blank"
      >前往《今周刊》原始報導</a>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { VueFinalModal } from 'vue-final-modal'

const showModal = ref(false)
const showArticle = ref(false)
async function openModal() {
  showArticle.value = false
  showModal.value = true

  await nextTick()

  setTimeout(() => {
    showArticle.value = true
  }, 0)
}
</script>
