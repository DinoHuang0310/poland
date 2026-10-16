<template>
  <li class="w-1/2 even:mt-10 even:sm:mt-16">
    <figure
      class="bg-white cursor-pointer shadow-md can-hover:hover:shadow-xs can-hover:hover:scale-102 transition"
      @click="openModal"
    >
      <img
        class="aspect-4/3 object-cover object-center bg-primary/30"
        src="/src/assets/images/article-img05.jpg"
        alt="不甘只當歐洲組裝中心 著眼「魔幻晶三角」"
        loading="lazy"
      >
      <figcaption class="p-2 sm:p-4">
        <h5 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif mb-2">不甘只當歐洲組裝中心 著眼「魔幻晶三角」</h5>
        <p class="tracking-normal sm:tracking-widest">波蘭企業訪團低調叩關　歐洲野牛為何遠道來台？</p>
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
        src="/src/assets/images/article-img05.jpg"
        alt="波蘭直擊4—不甘只當歐洲組裝中心、著眼「魔幻晶三角」！官員叩關台灣，「野牛蛻變」如何練下個10年引擎"
      >
      <figcaption class="absolute w-full bottom-0 left-0 p-2 sm:p-4 pt-8 bg-linear-to-b from-black/0 to-black/90">
        <h3 class="text-2xl sm:text-3xl xl:text-4xl text-white font-black font-serif">
          波蘭直擊4—不甘只當歐洲組裝中心、著眼「魔幻晶三角」！官員叩關台灣，「野牛蛻變」如何練下個10年引擎
        </h3>
      </figcaption>
    </figure>
    <div class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 mt-4 sm:mt-0">
      <ul class="sm:flex text-xs sm:space-x-4 space-y-0.5 sm:space-y-0 tracking-normal py-4 sm:py-6 border-b border-bg-light">
        <li><span class="text-primary font-black">撰文</span>｜鄭鴻達</li>
        <li><span class="text-primary font-black">圖源</span>｜Shutterstock、鄭鴻達攝影</li>
      </ul>
      <section class="p-4 bg-black/10 border-l-6 border-primary space-y-6 mt-8">
        <p>在9月初某個雨夜，台北某家飯店晚宴中，波蘭經濟發展暨科技部政務次長Michał Jaros上台致辭，第一句話卻是致歉。因為，這是他搭機回波蘭前最後一場行程，時間緊湊。</p>
        <p>但Jaros隨後語氣一轉親和地表示，他很高興能在這麼溫馨，如同和家人與朋友般親切的氣氛中度過。</p>
        <p>儘管台下坐著的有來自波蘭、台灣雙方的多個關鍵產業近百位企業主、高階主管、公協會代表及中央級官員，這場活動卻低調到不只沒辦記者會，會後更連新聞稿都沒發。</p>
      </section>
    </div>

    <article v-if="showArticle" class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 my-8 space-y-6">
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭企業訪團低調叩關　歐洲野牛為何遠道來台？</h4>
      <p>就在晚宴幾天前，一支45人的波蘭商務代表團，由波蘭台灣工商會（PTIPH）安排低調抵達台灣，四天內就跑遍新北、台北、台中三座城市，會晤逾200家台灣企業。</p>
      <p>訪團行程滿滿，足跡從新北、台北的貿易投資交流會、商務論壇，再到半導體界年度盛事「SEMICON Taiwan」與波蘭國家館，也遍及台北生技園區媒合論壇，最後一天更是一早就南下台中。</p>
      <p>波蘭這頭30多年前脫離共產鐵幕後，歷經經濟「瀕死」、「自強」、「渡河」的歐洲野牛，這一次不但被世界看見，還主動跨越8000多公里來敲台灣的門，所欲為何？</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_1089.jpg"
          alt="華沙市中心的斯塔西茨宮（Staszic Palace）"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 華沙市中心的斯塔西茨宮（Staszic Palace）曾為「華沙科學之友會」館舍，現為波蘭科學院總部，前方是哥白尼紀念碑，象徵波蘭民族科學成就及歷史記憶。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">不甘只當「歐洲組裝中心」 波蘭力圖下個十年繼續茁壯</h4>
      <p>要看懂這個波蘭團為何而來，要先回頭直面波蘭自己也不得不承認的焦慮。過去30年，波蘭經濟起飛、成長，靠的是以下公式：歐盟資金、低廉人力、替德國等西歐工業國代工與組裝。</p>
      <p>這套公式相當成功，讓波蘭2025年的名目GDP突破1兆美元關卡，更擠進全球前21大；此外，歐盟執委預估波蘭2026年經濟成長率3.5%，是歐盟大型經濟體中跑最快的一個。</p>
      <p>然而這套公式效期或將到期。當人力成本續升、AI浪潮促使全球資本重新洗牌，「組裝中心」恐已不足支撐波蘭下個十年。波蘭總理圖斯克（Donald Tusk）6月時就曾直白說：波蘭未來不能「只是組裝中心」。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_2975.jpg"
          alt="波蘭列車"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭近年推動產業加值與升級，總理圖斯克（Donald Tusk）更宣示波蘭未來不能「只是組裝中心」。波蘭列車示意圖，鄭鴻達攝影
        </figcaption>
      </figure>
      <p>面對《今周刊》好奇詢問，Jaros把焦慮講得更具體。他說，此次是他第二次參加SEMICON，這對他們來說很重要，因為他希望「我們的企業、特別是新創，能建立一個更可擴充的生態系統。」</p>
      <p>此外，Jaros也強調，他們主要想建造波蘭可以生產半導體的工廠，「這對歐洲和波蘭來說都很重要。」</p>
      <p>波蘭中央級官員連兩年來台參與半導體展，期間塞滿訪視行程，Jaros追求的不只是訂單，更是「建廠」與「生態系」，要讓波蘭從勞力升級成技術導向，更從供應鏈末端往上游爬，野牛展現出的是勃勃野心。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_5954.jpg"
          alt="波蘭經濟發展暨科技部政務次長Michał Jaros"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭經濟發展暨科技部政務次長Michał Jaros在9月初出席台北一場台波交流晚宴，是其返國前最後一個行程。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">訪台成員從20人成長到140人　波蘭團為何三年變七倍</h4>
      <p>負責組織此次拜訪團的波蘭台灣工商會會長Agnieszka Sygitowicz，用了一組數字，揭露這股熱潮如何開始。</p>
      <p>「我第一次來半導體展是兩年前，當時波蘭訪團僅約20人與會，去年約有60到70人，到今年則有過140人。」不過她補充，這是所有訪台成員人數加總，並非所有人都有出席SEMICOM。</p>
      <p>波蘭訪台團成員「3年成長7倍」，尤其在今年SEMICON波蘭國家館，有13家企業與學研單位進駐，包括晶片設計商ChipCraft、DCD-SEMI，紅外線光電廠VIGO Photonics，超薄印刷技術的XTPL，還有華沙理工大學的CEZAMAT研究中心。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_5948.jpg"
          alt="經濟部政務次長江文若"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 經濟部政務次長江文若（左）在9月初一場台波交流晚宴上致詞，波蘭經濟發展暨科技部政務次長Michał Jaros也在座。鄭鴻達攝影
        </figcaption>
      </figure>
      <p>然而波蘭在半導體供應鏈中的定位，Sygitowicz講得相對保守。她說，「我們較偏向半導體供應鏈來源，而非半導體製造商，甚至也不算是設計商」，重點是「我們正持續穩定建立自身能見度」。</p>
      <p>此團訪台的45人，產業別不限於半導體。Sygitowicz說明，半導體本身不是一項「產品」而是一種「零組件」，供應鏈牽動的人員往來很龐大，她帶來的企業橫跨無人機、能源、電動車與電動載具、電子零組件，還有化學品。</p>
      <p>訪團最後一天的台中場次，橫跨智慧製造、航太與國防（無人機）、精密機械與工具機、自行車與電動自行車、手工具與工業五金、半導體與智慧電子、綠能與淨零技術，幾乎把中台灣產業聚落完整「掃過一遍」。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">不搶最先進2奈米製程　波蘭著眼歐洲「魔幻晶三角」</h4>
      <p>這頭歐洲野牛，到底想從地球另一端小島上的半導體供應鏈得到什麼？或許和我們認為的不太一樣。</p>
      <p>當記者問及波蘭是否更關注成熟而非最先進製程時，Sygitowicz毫不避諱表示「對，這很明顯。德國也面臨同樣的情況，他們同樣不是聚焦在2奈米晶片上。對歐洲而言，幾乎不可能有2奈米晶片量產能力。」</p>
      <p>回顧她在波蘭台灣形象展上說過的脈絡，波蘭在半導體產業這局打的算盤，就「顯化」在這個奇幻、新穎的名詞裡：半導體「魔幻（晶」三角」（Magic Triangle）。</p>
      <p>所謂「Magic Triangle」，指的是隨著台積電插旗德國德勒斯登（Dresden），加上歐盟《晶片法案》（Chips Act） 推動後，由德國、捷克和波蘭三國協作組成的半導體供應鏈區域。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/%E6%AD%90%E6%B4%B2%E5%8D%8A%E5%B0%8E%E9%AB%94%E3%80%8C%E9%AD%94%E5%B9%BB%E6%99%B6%E4%B8%89%E8%A7%92%E3%80%8D(1).jpg"
          alt="歐洲半導體「魔幻晶三角」"
          loading="lazy"
          decoding="async"
        >
      </figure>
      <p>Sygitowicz闡述，台積電德國德勒斯登廠落地後，其供應鏈包括製造端在內，勢必會跨國界擴散。她說，這將在該投資後發生，「前提是製造端的供應鏈能跨越德國邊境，延伸進中東歐地區。」</p>
      <p>從地圖上看，德勒斯登距波蘭邊境不到100公里，波蘭想要對接的，顯然是德國這座晶圓廠外溢出的供應鏈。Sygitowicz說，第二件事，「當然是要持續發展波蘭自身半導體生態系。」</p>
      <p>波蘭相中的另一個窗口就是無人機，這呼應了近年一條新興但低調的路徑：台灣製造、波蘭轉運、烏克蘭實戰。Sygitowicz說，無人機產業與半導體連結「愈發受矚目」，這在今年半導體展上很明顯。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_5924.jpg"
          alt="波蘭台灣工商會創會會長邱元逸、會長Agnieszka Sygitowicz"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭台灣工商會創會會長邱元逸（左）、會長Agnieszka Sygitowicz在台波交流晚宴中擔綱主持。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">英特爾弄丟的投資沃土　TEEMA Park搶進落腳發芽</h4>
      <p>在這場台波晚宴中，還有一個名詞不斷提及，就是「TEEMA Technology Park」，亦即「台灣區電機電子工業同業公會（電電公會）科學園區」。</p>
      <p>該園區是TEEMA海外布局計畫其中一站，對波蘭來說也是很重要的一站。電電公會擁有約3000家會員企業，2025年底啟動「TEEMA Park」海外布局，首波鎖定墨西哥、波蘭、印度與美國。</p>
      <p>這塊園區規劃落腳下西里西亞省的米恩基尼亞（Miękinia），距德國邊境約150公里，這塊土地，其實是英特爾（Intel）2023年宣布要投資46億美元興建封測廠，卻在2025年7月臨時抽手的那塊地。</p>
      <p>此前，波蘭政府已投入近4億波蘭茲羅提（約新台幣32.4億元）打造基礎設施，園區規模約150公頃，電力供給極高，這片園區地如今整好了、電拉好了，就等企業進駐。</p>
      <p>這也是許多台灣企業最熟悉的投資模式：由政府弄好水電土地，再由公會、企業龍頭領投，這對台灣多數長年單打獨鬥的中小企業來說，正是TEEMA Park最有吸引力之處。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_4277.jpg"
          alt="台灣電電公會（TEEMA）副秘書長蔡松慧"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 台灣電電公會（TEEMA）副秘書長蔡松慧在6月22日於波蘭華沙開幕的歐洲台灣形象展上，宣布TEEMA Park落腳米恩基尼亞（Miękinia）。資料照，鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">台波投資額數年成長三倍　波蘭次長11月還要帶200人來</h4>
      <p>不只波蘭方加強對台灣招商，台灣政府這邊也同樣在加碼。經濟部政次江文若於晚宴致詞表示，2018年台波簽署投資合作MOU，在這短短幾年時間，台灣對波蘭累積投資額已成長「300%」。她預言，隨著TEEMA Park設立，投資速度還會「大增」。</p>
      <p>其實，波蘭企業團9月這趟訪台之行只是暖身。Jaros在晚宴致詞尾聲，更請托在場企業，共同協助籌備11月訪台的波蘭經貿訪問團。</p>
      <p>Sygitowicz透露，根據Jaros的宣布，這團規模將超過200人，成員來自波蘭各地兩百家企業，也將與台波政府間經濟諮商會議合併進行，而今年輪到在台灣舉行。</p>
      <p>同樣在11月的17、18日，經濟部指導、國貿署與TEEMA主辦的「TEEMA Day」將於華沙登場，設有「AI資料中心供應鏈、智慧能源、電動車與智慧移動、智慧城市、台波產業交流」五大展區。</p>
      <p>呼應Jaros喊話企業協助再組團訪台的呼籲，江文若也當場向波蘭企業、公會界夥伴發出邀請參與「TEEMA Day」。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">自團結工聯到從鐵幕解放　波蘭如何用台波貿易大解放</h4>
      <p>在這場企業交流晚宴中，外交部政次陳明祺致詞時暫時撇開「money」表示，他年輕時就是波蘭歷史忠實讀者，「我們從遠方得知，英勇的波蘭人民在團結工聯運動期間，是如何從共產控制中解放自己。」</p>
      <p>接著，陳明祺把情境帶回當下表示，波蘭台灣商會成立兩年以來，他看到「解放」以另一種形式出現，「我們欽佩的，是波蘭致力於打造一個非常友善經商環境的願景。」</p>
      <p>陳明祺透露，外交部2025、2026年兩度組團訪波，參團企業最後決定在波蘭投資，還有一位公協會理事長特地向部長（外長林佳龍）道謝，說自己原不曉得波蘭投資環境有這麼好。</p>
      <p>陳明祺感性地表示，「我相信那是建立在信任之上的基礎」，這也是現任外交部的理念，要為雙方建立信任、私人情誼和交出具體成果。</p>
      <p>「信任（trust）」也是Jaros當晚反覆提及的關鍵字。他說，台波雙方許多人已合作超過兩年，這段期間建立起非常重要的東西：「信任及良好的私人情誼」。</p>
      <p>接著，Jaros更提高戰略層次表示，波蘭想成為台灣「真正通往歐洲的門戶」，他們願意，也希望「在歐洲支持台灣」。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">野牛蛻變不是只換毛色　還要裝上第三顆心臟引擎</h4>
      <p>回顧35年前，波蘭大膽地用「休克療法」，讓自己從共產廢墟中站起來；過去幾年，波蘭拚盡全力，用國防預算培養出第二顆驅動經濟成長的引擎／心臟；如今，這頭野牛正在裝上第三顆。</p>
      <p>有別以往是被動接受外資進來，波蘭這次不但自己主動整地、拉水電、蓋園區，還組團飛越半個地球來到寶島台灣，一家一家企業地去會談。</p>
      <p>在這條歐洲野牛蛻變的途徑上，台灣並非是被動獲選合作的對象，而是波蘭主動追求的關鍵拼圖。Sygitowicz直言，其實波蘭與韓國、日本的商業關係都更成熟，但在全球科技版圖上，唯一還缺的一塊「就是台灣」。</p>
      <p>為何這團45人非得親自飛來台灣？Sygitowicz解釋，這些企業代表多為首度來台，他們不願只在波蘭遠距和台灣做生意，「而是特地花力氣來這裡，親自與台灣企業交流，也親身了解這裡的半導體產業周邊商業文化與環境」。</p>
      <p>如今，這頭力圖蛻變的歐洲野牛遠道奔來台灣敲門，接著更關鍵的是，台灣是否會打開這扇門？又如何迎接這頭友善、積極又生機蓬勃的野牛。</p>

      <div class="my-8 sm:my-10">
        <span class="inline-block px-3 py-2 text-primary text-sm border border-primary">本專題不授權媒體夥伴</span>
      </div>
      <hr class="border-0 border-b border-bg-light">
    </article>
    <div class="w-full max-w-2xl mx-auto mb-8 sm:px-4 2xl:px-8">
      <h5 class="inline-block text-white bg-secondary px-2.5 py-1">相關新聞</h5>
      <ul class="list-disc pl-6 lg:pl-8 mb-8 sm:mb-16">
        <li>
          <a
            class="block sm:px-2 py-4 border-b border-bg-light can-hover:hover:underline"
            href="https://www.businesstoday.com.tw/article/category/183025/post/202607290065/"
            target="_blank"
          >波蘭直擊1—共產廢墟用「休克療法」，變身兆美元經濟體！「野牛瀕死」如何花30年重新養活餵壯</a>
        </li>
        <li>
          <a
            class="block sm:px-2 py-4 border-b border-bg-light can-hover:hover:underline"
            href="https://www.businesstoday.com.tw/article/category/183025/post/202607290067/"
            target="_blank"
          >波蘭直擊2—歐洲最強陸軍！從二檔催到四檔、擔綱在歐防衛角色…「野牛自強」靠國防預算煉第二引擎</a>
        </li>
        <li>
          <a
            class="block sm:px-2 py-4 border-b border-bg-light can-hover:hover:underline"
            href="https://www.businesstoday.com.tw/article/category/183025/post/202607290069/"
            target="_blank"
          >波蘭直擊3—只要一息尚存，失去的我們用軍刀奪回！「野牛渡河」記取亡國歷史教訓，台灣該如何借鑑</a>
        </li>
      </ul>
      <a
        class="block font-bold text-center text-sm py-4 border border-bg-light bg-black/10 can-hover:hover:underline"
        href="https://www.businesstoday.com.tw/article/category/183025/post/202609210031/"
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
