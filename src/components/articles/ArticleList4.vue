<template>
  <li class="w-1/2 even:mt-10 even:sm:mt-16">
    <figure
      class="bg-white cursor-pointer shadow-md can-hover:hover:shadow-xs can-hover:hover:scale-102 transition"
      @click="openModal"
    >
      <img
        class="aspect-4/3 object-cover object-center bg-primary/30"
        src="/src/assets/images/article-img04.jpg"
        alt="從波蘭回看台灣的國家課題"
        loading="lazy"
      >
      <figcaption class="p-2 sm:p-4">
        <h5 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif mb-2">從波蘭回看台灣的國家課題</h5>
        <p class="tracking-normal sm:tracking-widest">從亡國、復國到今日的安全共識，回看共同記憶如何形塑國家韌性， 以及台灣可以如何理解波蘭的歷史經驗。</p>
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
        src="/src/assets/images/article-img04.jpg"
        alt="波蘭直擊3—只要一息尚存，失去的我們用軍刀奪回！「野牛渡河」記取亡國歷史教訓，台灣該如何借鑑"
      >
      <figcaption class="absolute w-full bottom-0 left-0 p-2 sm:p-4 pt-8 bg-linear-to-b from-black/0 to-black/90">
        <h3 class="text-2xl sm:text-3xl xl:text-4xl text-white font-black font-serif">
          波蘭直擊3—只要一息尚存，失去的我們用軍刀奪回！「野牛渡河」記取亡國歷史教訓，台灣該如何借鑑
        </h3>
      </figcaption>
    </figure>
    <div class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 mt-4 sm:mt-0">
      <ul class="sm:flex text-xs sm:space-x-4 space-y-0.5 sm:space-y-0 tracking-normal py-4 sm:py-6 border-b border-bg-light">
        <li><span class="text-primary font-black">撰文</span>｜鄭鴻達</li>
        <li><span class="text-primary font-black">圖源</span>｜鄭鴻達攝影、總統府提供</li>
      </ul>
      <section class="p-4 bg-black/10 border-l-6 border-primary space-y-6 mt-8">
        <p>19歲那年，波蘭女孩杜唐雅（Natalia Aduszkiewicz）讀到一本關於台灣歷史的書，她當下心想「哇！有這樣的國家跟我的國家很像，是很勇敢的民族，我應該要去看一看。」</p>
        <p>10多年過去，杜唐雅今年夏天過後將來台灣政治大學就讀碩士。她表示，兩國的現代史很相似，都是傳統社會經過多年痛苦與努力，「為了自己的民主，真的應該戰、真的應該努力『打拚』」。</p>
        <p>我們從台灣視角看波蘭，也從波蘭人眼中回看台灣，在彼此的交疊中看出差異性與需求互補。</p>
      </section>
    </div>

    <article v-if="showArticle" class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 my-8 space-y-6">
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">歐盟成員身分　成波蘭雄起最大槓桿</h4>
      <p>波蘭投資貿易局（PAIH）業務發展經理馬爾欽（Marcin Motyka）指出，波蘭崛起關鍵之一，是「歐盟成員國身分」成為波蘭最大槓桿，這替波蘭爭取到補貼、單一市場準入與地緣安全保障，這也是台灣最缺乏的利基。</p>
      <p>駐波蘭台北代表處大使劉永健也點出，歐盟資金對波蘭的基建、能源轉型與工業發展有決定性作用，相較之下，「台灣在這方面基本上是胼手胝足，必須靠自己」。</p>
      <p>不過，劉永健也點出台灣的角色，台灣把波蘭定位為「進入歐盟市場的門戶」，2026年歐洲台灣形象展選在華沙舉辦「絕非巧合」，而是要藉此切入歐洲、波蘭的供應鏈、援烏及重建市場。</p>
      <p>台灣的規劃與波蘭方期待一拍即合。波蘭台灣工商會會長Agnieszka Sygitowicz表示，波蘭要成為「歐洲的門戶」，而波台攜手共同開拓歐洲市場，將是雙方成功的重要關鍵。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/%E6%9D%9C%E5%94%90%E9%9B%85Natalia%20Aduszkiewicz.jpg"
          alt="規劃來台灣攻讀碩士的波蘭女孩杜唐雅Natalia Aduszkiewicz"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 規劃來台灣攻讀碩士的波蘭女孩杜唐雅Natalia Aduszkiewicz。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">台灣沒「歐盟」可以加入　獨行渡河更需謹慎</h4>
      <p>不過這套槓桿邏輯，台灣終究難以複製。國防安全研究院國防戰略與資源研究所所長蘇紫雲分析，穩固歐洲的兩大支柱是歐盟與北約，一個代表政治聯盟，一個代表軍事集體防衛。</p>
      <p>蘇紫雲說明，亞太地區其實也曾出現類似構想，如1970年代的東南亞防衛公約，一度被稱為「小北約」，卻在1977年解散，如今要重組類似機制，政治可能性並不高。</p>
      <p>他分析原因有二，第一是歐洲各國宗教、價值觀相近，二是地緣緊鄰，開車就能走遍歐陸，然在西太平洋地區則因海洋阻隔，各國形同一座座孤島，難以複製北約式的集體防衛機制。</p>
      <p>但蘇紫雲以當下印太安全機制，用「一到五」數字歸納：美國是第一主軸，其次是美日、美韓、美菲等「雙邊」協防條約，再來是美英澳「三國」組成的AUKUS，接著是美日澳印的QUAD四方安全對話，最後則是「五眼聯盟」情報合作。</p>
      <p>他坦言，台灣雖與這些機制缺乏直接官方關係，但透過五眼聯盟的部分戰略情報分享，「這算是最基本的安全合作了」。這也意味著，台灣要走的「安全」之路，注定比波蘭更迂迴，且更需自行謹慎摸索。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">對人才、移民既開放又謹慎　波蘭對外的平衡之術</h4>
      <p>在人才（移民）政策上，波蘭維持著一種微妙平衡。PAIH台北辦事處首席代表吾志遠指出，波蘭連續多年來，是歐盟核發工作許可最多國家之一，對象遍及烏克蘭、印度、南美與東南亞。</p>
      <p>因此，吾志遠特別強調，「只要你願意學波蘭語、會說波蘭語，你就可以成為波蘭人，不管你的外表或背景是什麼。」這源於波蘭1000年來的多元社會傳統。</p>
      <p>不過，開放的另一面卻是面對外來者的謹慎。劉永健說明，波蘭雖歡迎各國人才，但同時對移民政策採取相對謹慎態度，「這兩者看似衝突，卻又運作得相當順利」。</p>
      <p>林啟揚則從台灣視角提出對照認為，波蘭對外國人才、國際資金開放度高，反觀「台灣對外國人才好像還蠻嚴苛的」；他也點出，波蘭於金融科技的無現金社會，也是台灣可借鑑方向。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/%E6%B3%A2%E8%98%AD%E5%8F%B0%E7%81%A3%E5%B7%A5%E5%95%86%E6%9C%83%E6%9C%83%E9%95%B7Agnieszka%20Sygitowicz.jpg"
          alt="波蘭台灣工商會會長Agnieszka Sygitowicz"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭台灣工商會會長Agnieszka Sygitowicz。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭守住民族向心力　正是台灣最缺的那一塊</h4>
      <p>若問台灣最應從波蘭學習是什麼？各面向都直指「向心力」。林啟揚直言，波蘭在守住民族向心力部分可說「對外一致」，但對內政黨可以分歧。</p>
      <p>他坦言，台灣最大弱點，正是對「大敵」的態度仍未取得社會共識。這一點，也呼應波蘭高達95%民意，視俄羅斯為最大威脅，而展現出的高度團結。</p>
      <p>杜唐雅更以身為波蘭人的視角詮釋這份認同表示，她常提醒自己「你是誰、哪一塊土地是你的，你不會放棄這個（國家），因為這是你的家、是你要保護的。」</p>
      <p>杜唐雅提到，歷史上過去曾有一百多年「沒有波蘭」，但他們始終沒失去認同與語言，「我們的國歌第一句就談到，只要我們（波蘭人）還活著，波蘭就不會消失」。</p>
      <p>正如波蘭國歌《波蘭沒有滅亡》（東布羅夫斯基瑪祖卡舞曲）在全曲開頭，就揭示了「波蘭尚未滅亡，只要我們一息尚存。外力奪去的一切，我們用戰刀奪回。」</p>
      <div>
        <h5 class="font-bold text-primary mb-2">波蘭國歌歌詞中譯：</h5>
        <blockquote class="p-4 bg-black/10 italic border-l-6 border-primary">
          波蘭尚未滅亡，<br>
          只要我們一息尚存。<br>
          侵略者奪去的一切，<br>
          我們必以軍刀奪回 。<br><br>
          前進，前進，東布羅夫斯基！<br>
          從義大利到我們的祖國。<br>
          在你的領導之下，<br>
          我們將與民族團結一致。<br><br>
          渡過維斯瓦河，渡過瓦爾塔河，<br>
          我們仍將是波蘭人。<br>
          拿破崙已向我們示範，<br>
          如何才能取得勝利。<br><br>
          正如恰爾涅茨基返回波茲南，<br>
          在瑞典人佔領之後，<br>
          為了拯救祖國，<br>
          他率軍渡海歸來。<br><br>
          父親含著眼淚對他的巴夏說：<br>
          「妳聽啊，聽說我們的人，<br>
          已經敲響戰鼓了。」
        </blockquote>
      </div>
      <p>蘇紫雲認為，這股韌性其來有自。他在波蘭華沙大學國際關係研究所進修期間，就觀察到波蘭人的人文素養，正是其國家崛起最重要的基礎土壤，而非一般認為的科技或經濟等「硬」指標。</p>
      <p>蘇紫雲回憶，波蘭在1980年代，就率先追求民主化，當年萊赫．華勒沙（Lech Walesa）帶領的團結工聯（Solidarność），率先對抗共產黨體制，讓波蘭在非共化後，得以快速擺脫僵化的舊制度。</p>
      <p>他回想，早年留學時波蘭人生活條件普通，但幾乎每戶人家都有很多藏書，各種人文活動十分發達，「這是他們內心心理防線和韌性的原因」。這份「底氣」，或許也是台灣談論國家認同時，同樣值得檢視的部分。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/55152972175_f3c94a3935_k.jpg"
          alt="波蘭前總統萊赫．華勒沙訪台"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭前總統萊赫．華勒沙曾於2026年3月17日訪台，也在總統府拜會總統賴清德。資料照，總統府提供
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">不懂歷史就會重蹈覆徹　台灣人不應將國家視為理所當然</h4>
      <p>「歷史意識」更是波蘭人反覆叮嚀台灣的關鍵字。吾志遠指出，波蘭在這200年來，從歐洲最大國家之一到整個從地圖上消失，有123年沒有自己的國家，「不懂歷史的人，會一直重複一樣的錯誤」。</p>
      <p>吾志遠也語重心長地提醒，台灣人「不能把國家當成理所當然」的事，「因為我們有過失去國家的經驗，所以我們懂那種感受」。</p>
      <p>劉永健從政治理念層面補充表示，波蘭曾受共產體制統治45年，不但對共產主義沒任何幻想，更對俄羅斯沒有幻想，這種反共立場與台灣理念相近，讓台灣、波蘭可以是「天然夥伴」。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">應對威權認知作戰　是台波可即刻共同合作的戰場</h4>
      <p>在假訊息這條戰線上，波蘭、台灣的處境更是驚人相似。杜唐雅表示，波蘭境內的假訊息，與台灣面對的「中國製造、在台灣流傳」的假訊息模式「非常像、手法一模一樣」，即使是當時和COVID疫情無關的議題也是。</p>
      <p>她提醒，如今假訊息製造既快速又容易，但真的要反制起來卻很慢，因為這必須先溯源、查證，且對方愈來愈會運用AI，讓謠言「做得愈來愈逼真」，因此「媒體識讀」顯得格外重要。</p>
      <p>劉永健則指出，台波在資安、關鍵基礎設施韌性，以及在打擊仿冒等領域上，都有很大交流空間，雙方已簽署資安合作備忘錄，波蘭也參與我方的跨國網路攻防演練。</p>
      
      <div style="max-width: 800px; margin: 20px auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #333333; line-height: 1.6;"><!-- 標題區 -->
        <div style="border-left: 5px solid #B22222; padding-left: 12px; margin-bottom: 24px;">
        <h4 style="margin: 0; font-size: 22px; font-weight: bold; color: #B22222; letter-spacing: 0.5px;">2024年台灣、波蘭雙邊經貿交流關鍵大事記</h4>
        </div>
        <!-- 時間軸 / 表格卡片容器 -->

        <div style="background-color: #FFFFFF; border: 1px solid #FFDADA; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(178, 34, 34, 0.05);"><!-- 項目 1 -->
        <div style="padding: 16px 20px; border-bottom: 1px solid #FFDADA; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; background-color: #FFF5F5;">
        <div style="flex: 1 1 200px; margin-bottom: 4px;"><span style="font-size: 16px; font-weight: bold; color: #B22222;">2024 年 4 月 9 日</span></div>

        <div style="flex: 2 1 300px; font-size: 15px; font-weight: 500; color: #333333;">PTIPH（波蘭台灣工商會）成立<span style="font-size: 13px; color: #666666;">（Dobosz 創辦）</span></div>

        <div style="margin-top: 4px;"><span style="background-color: #B22222; color: #FFFFFF; font-size: 12px; padding: 2px 8px; border-radius: 2px; font-weight: 500;">波蘭</span></div>
        </div>
        <!-- 項目 2 -->

        <div style="padding: 16px 20px; border-bottom: 1px solid #FFDADA; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <div style="flex: 1 1 200px; margin-bottom: 4px;"><span style="font-size: 16px; font-weight: bold; color: #B22222;">2024 年 5 月 14 日</span></div>

        <div style="flex: 2 1 300px; font-size: 15px; font-weight: 500; color: #333333;">TAIPO（台灣波蘭商業協會）籌備大會</div>

        <div style="margin-top: 4px;"><span style="background-color: #FFF5F5; color: #B22222; border: 1px solid #FFDADA; font-size: 12px; padding: 2px 8px; border-radius: 2px; font-weight: bold;">台北</span></div>
        </div>
        <!-- 項目 3 -->

        <div style="padding: 16px 20px; border-bottom: 1px solid #FFDADA; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; background-color: #FFF5F5;">
        <div style="flex: 1 1 200px; margin-bottom: 4px;"><span style="font-size: 16px; font-weight: bold; color: #B22222;">2024 年 5 月～秋</span></div>

        <div style="flex: 2 1 300px; font-size: 15px; font-weight: 500; color: #333333;">TAIPO 正式成立大會<span style="font-size: 13px; color: #666666;">（台南桂田酒店）</span></div>

        <div style="margin-top: 4px;"><span style="background-color: #FFF5F5; color: #B22222; border: 1px solid #FFDADA; font-size: 12px; padding: 2px 8px; border-radius: 2px; font-weight: bold;">台南</span></div>
        </div>
        <!-- 項目 4 -->

        <div style="padding: 16px 20px; border-bottom: 1px solid #FFDADA; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <div style="flex: 1 1 200px; margin-bottom: 4px;"><span style="font-size: 16px; font-weight: bold; color: #B22222;">2024 年 9 月 4 日</span></div>

        <div style="flex: 2 1 300px; font-size: 15px; font-weight: 500; color: #333333;">第 2 屆台波商業論壇<span style="font-size: 13px; color: #666666;">（SEMICON Taiwan 場邊，PTIPH 共同舉辦）</span></div>

        <div style="margin-top: 4px;"><span style="background-color: #FFF5F5; color: #B22222; border: 1px solid #FFDADA; font-size: 12px; padding: 2px 8px; border-radius: 2px; font-weight: bold;">台北南港</span></div>
        </div>
        <!-- 項目 5 -->

        <div style="padding: 16px 20px; border-bottom: 1px solid #FFDADA; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; background-color: #FFF5F5;">
        <div style="flex: 1 1 200px; margin-bottom: 4px;"><span style="font-size: 16px; font-weight: bold; color: #B22222;">2024 年 11 月 15 日</span></div>

        <div style="flex: 2 1 300px; font-size: 15px; font-weight: 500; color: #333333;">PTIPH 與 TEDIBOA 簽署無人機 MOU</div>

        <div style="margin-top: 4px;"><span style="background-color: #FFF5F5; color: #B22222; border: 1px solid #FFDADA; font-size: 12px; padding: 2px 8px; border-radius: 2px; font-weight: bold;">台北</span></div>
        </div>
        <!-- 項目 6 -->

        <div style="padding: 16px 20px; border-bottom: 1px solid #FFDADA; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <div style="flex: 1 1 200px; margin-bottom: 4px;"><span style="font-size: 16px; font-weight: bold; color: #B22222;">2024 年 11 月 22–23 日</span></div>

        <div style="flex: 2 1 300px; font-size: 15px; font-weight: 500; color: #333333;">林佳龍訪波，PTIPH 與 TAIPO 互簽 MOU；長榮與波蘭航空聯營宣示</div>

        <div style="margin-top: 4px;"><span style="background-color: #B22222; color: #FFFFFF; font-size: 12px; padding: 2px 8px; border-radius: 2px; font-weight: 500;">羅茲、華沙</span></div>
        </div>
        <!-- 項目 7 -->

        <div style="padding: 16px 20px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; background-color: #FFF5F5;">
        <div style="flex: 1 1 200px; margin-bottom: 4px;"><span style="font-size: 16px; font-weight: bold; color: #B22222;">2024 年 12 月 23 日</span></div>

        <div style="flex: 2 1 300px; font-size: 15px; font-weight: 500; color: #333333;">PTIPH 與波蘭無人機商會（PISB）簽署合作協議</div>

        <div style="margin-top: 4px;"><span style="background-color: #B22222; color: #FFFFFF; font-size: 12px; padding: 2px 8px; border-radius: 2px; font-weight: 500;">波蘭</span></div>
        </div>
        </div>
        <!-- 今周刊落款 -->
        <p class="text-xs opacity-80 tracking-wide">資料來源：吳春見　今周刊 製作| BUSINESS TODAY</p>
      </div>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">別再被動等待！台灣應主動深化台波交流</h4>
      <p>面對這扇難得開啟的機會之窗，台波雙方多名受訪者，都不約而同地認為台灣要更「主動」。吳春見指出，2024年是台波關係的「關鍵年」，商會成立、簽署MOU、部長訪波，波蘭終於開始被認真看待。</p>
      <p>吳春見坦言，波蘭人個性溫和、相對保守、不擅推銷自己，這點很像台灣，因此台灣應掌握先機、主動深化，「而不是被動地等波蘭自我推廣」。</p>
      <p>劉永健補充，2026年，我國在波蘭已設處30餘年，正好可用「歷史記憶」形容這段關係。他認為，台波要從「友好」升級為「戰略依存」，著力點在供應鏈、援烏重建、資安與反制「外國資訊操弄與干擾」（Foreign Information Manipulation and Interference, FIMI）。</p>
      <p>若要用一句話向國人形容波蘭？劉永健的答案，會是「一個人民友好、跟我們理念相近的夥伴。」對台灣而言，這頭渡過地緣政治湍流的野牛，映照的正是台灣自己應該要有的徹底覺悟。</p>


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
      </ul>
      <a
        class="block font-bold text-center text-sm py-4 border border-bg-light bg-black/10 can-hover:hover:underline"
        href="https://www.businesstoday.com.tw/article/category/183025/post/202607290069/"
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
