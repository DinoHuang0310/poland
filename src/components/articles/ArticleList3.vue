<template>
  <li class="w-1/2">
    <figure
      class="bg-white cursor-pointer shadow-md can-hover:hover:shadow-xs can-hover:hover:scale-102 transition"
      @click="openModal"
    >
      <img
        class="aspect-4/3 object-cover object-center bg-primary/30"
        src="/src/assets/images/article-img03.jpg"
        alt="波蘭如何從二檔催到四檔"
        loading="lazy"
      >
      <figcaption class="p-2 sm:p-4">
        <h5 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif mb-2">波蘭如何從二檔催到四檔</h5>
        <p class="tracking-normal sm:tracking-widest">從快速軍購到技術移轉、在地生產，波蘭如何把安全焦慮轉化成軍工與產業升級。</p>
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
        src="/src/assets/images/article-img03.jpg"
        alt="波蘭直擊2—歐盟最強陸軍！從二檔催到四檔、擔綱在歐防衛角色…「野牛自強」靠國防預算煉第二引擎"
      >
      <figcaption class="absolute w-full bottom-0 left-0 p-2 sm:p-4 pt-8 bg-linear-to-b from-black/0 to-black/90">
        <h3 class="text-2xl sm:text-3xl xl:text-4xl text-white font-black font-serif">
          波蘭直擊2—歐盟最強陸軍！從二檔催到四檔、擔綱在歐防衛角色…「野牛自強」靠國防預算煉第二引擎
        </h3>
      </figcaption>
    </figure>
    <div class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 mt-4 sm:mt-0">
      <ul class="sm:flex text-xs sm:space-x-4 space-y-0.5 sm:space-y-0 tracking-normal py-4 sm:py-6 border-b border-bg-light">
        <li><span class="text-primary font-black">撰文</span>｜鄭鴻達</li>
        <li><span class="text-primary font-black">圖源</span>｜鄭鴻達攝影、Shutterstock</li>
      </ul>
      <section class="p-4 bg-black/10 border-l-6 border-primary space-y-6 mt-8">
        <p>每年8月1日的下午5時，華沙街頭的所有交通工具會同時停下，集體狂按喇叭一分鐘。</p>
        <p>旅波台僑林啟揚說，這是為了紀念1944年華沙起義「W時刻」爆發的瞬間。在他看來，這種舉國一致的凝聚力，「正是台灣目前比較缺的」。</p>
        <p>他觀察，波蘭人民族意識核心，正是那種「兩邊（俄、德）都不能信，只能靠自己」的心態。俄烏戰爭爆發之初，德國等國援烏「七零八落」，更坐實這種戒慎心態。</p>
      </section>
    </div>

    <article v-if="showArticle" class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 my-8 space-y-6">
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">三度經歷亡國痛楚　波蘭提升國防實力「靠自己」</h4>
      <p>如此戒慎心理並非空穴來風。國防安全研究院國防戰略與資源研究所所長蘇紫雲指出，波蘭歷史上曾有三次亡國紀錄，二戰時是德國從西邊向東打，如今換成俄國從東邊向西打，「唇亡齒寒」的經驗，讓波蘭堅信擁有國防力量才最可靠。</p>
      <p>這股「靠自己」的意志與覺悟，最終轉換成驚人的國防投入。駐波蘭台北代表處大使劉永健指出，俄烏戰爭後，波蘭一躍成為北約東翼的防衛重鎮，在國防推動上，也一直是「北約模範生」。</p>
      <p>劉永健表示，波蘭目前國防預算占GDP約4.7%，明年將達5%，而台灣同樣也強調國防自主、強化自我防衛，「兩邊的思考方向和做法，是一致的」。</p>
      <p>蘇紫雲提供另一組數字佐證。他說，波蘭去年經濟規模約1兆美元，投入國防的金額約550億美元，相當於GDP的5%，「從這看得出，她的確把強化自身防衛能力，列為最高優先」。</p>
      <p>蘇紫雲更指出，波蘭也希望藉此扶植本土國防產業，一方面強化國防，二方面也替經濟帶來新機會。</p>
      <div style="border-left: 5px solid #B22222; padding-left: 12px; margin-bottom: 24px;">
        <h2 style="margin: 0; font-size: 22px; font-weight: bold; color: #B22222; letter-spacing: 0.5px;">波蘭國防力量概覽（2026年）</h2>
      </div>
      <div class="w-full overflow-x-auto rounded">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px; white-space: nowrap;"><!-- 表格標頭 -->
          <thead>
            <tr style="background-color: #B22222; color: #FFFFFF; font-weight: bold;">
              <th style="padding: 12px 16px; border-bottom: 2px solid #FFDADA; width: 15%;">類別</th>
              <th style="padding: 12px 16px; border-bottom: 2px solid #FFDADA; width: 25%;">項目</th>
              <th style="padding: 12px 16px; border-bottom: 2px solid #FFDADA; width: 60%;">數據</th>
            </tr>
          </thead>
          <!-- 表格內容 -->
          <tbody><!-- 兵力員額 -->
            <tr style="background-color: #FFF5F5;">
              <td rowspan="2" style="padding: 12px 16px; font-weight: bold; color: #B22222; border-bottom: 1px solid #FFDADA; vertical-align: top;">兵力員額</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">現役軍職人員</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">約 <strong style="color: #B22222; font-size: 16px;">22萬人</strong>（含文職軍事人員）</td>
            </tr>
            <tr style="background-color: #FFFFFF;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">長期擴軍目標（2039年前）</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">總兵力 <strong style="color: #B22222; font-size: 16px;">50萬人</strong>（常備 30萬 ＋ 後備 20萬）</td>
            </tr>
            <!-- 陸軍裝備 -->
            <tr style="background-color: #FFF5F5;">
              <td rowspan="3" style="padding: 12px 16px; font-weight: bold; color: #B22222; border-bottom: 1px solid #FFDADA; vertical-align: top;">陸軍裝備</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">主力戰車</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; white-space: normal;">Leopard 2系列（現役主力）、K2黑豹（已交付逾&nbsp;<strong style="color: #B22222;">180輛</strong>）、M1A2艾布蘭（已交付逾 <strong style="color: #B22222;">117輛</strong>）；2030年目標約 <strong style="color: #B22222; font-size: 16px;">900輛</strong></td>
            </tr>
            <tr style="background-color: #FFFFFF;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">自走砲</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">K9雷霆（已交付逾 <strong style="color: #B22222;">190輛</strong>）、Krab本土型（約 <strong style="color: #B22222;">40-50輛</strong>）</td>
            </tr>
            <tr style="background-color: #FFF5F5;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">火箭系統</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">Homar-K多管火箭（逾 <strong style="color: #B22222; font-size: 16px;">126套</strong>）</td>
            </tr>
            <!-- 空軍裝備 -->
            <tr style="background-color: #FFFFFF;">
              <td rowspan="4" style="padding: 12px 16px; font-weight: bold; color: #B22222; border-bottom: 1px solid #FFDADA; vertical-align: top;">空軍裝備</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">主力戰機</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">F-16C/D（<strong style="color: #B22222;">48架</strong>，升級中）</td>
            </tr>
            <tr style="background-color: #FFF5F5;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">隱形戰機</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">F-35A（<strong style="color: #B22222;">32架</strong>，2026年6月服役，規劃擴至 <strong style="color: #B22222;">64架</strong>）</td>
            </tr>
            <tr style="background-color: #FFFFFF;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">輕型戰機</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">FA-50（合約 <strong style="color: #B22222;">48架</strong>，已交付逾 <strong style="color: #B22222;">12架</strong>）</td>
            </tr>
            <tr style="background-color: #FFF5F5;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">攻擊直升機</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">AH-64E阿帕契（採購&nbsp;<strong style="color: #B22222; font-size: 16px;">96架</strong>）</td>
            </tr>
            <!-- 海軍裝備 -->
            <tr style="background-color: #FFFFFF;">
              <td rowspan="3" style="padding: 12px 16px; font-weight: bold; color: #B22222; border-bottom: 1px solid #FFDADA; vertical-align: top;">海軍裝備</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">巡防艦</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">Miecznik級 <strong style="color: #B22222;">3艘</strong>在建（2028-2029年首艦服役）</td>
            </tr>
            <tr style="background-color: #FFF5F5;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">潛艦</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">Orka計畫／Saab A26（<strong style="color: #B22222;">3艘</strong>，首艘2030年交付）；現役僅 <strong style="color: #B22222;">1艘</strong> Kilo級</td>
            </tr>
            <tr style="background-color: #FFFFFF;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">現役艦艇總數</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">約 <strong style="color: #B22222; font-size: 16px;">45艘</strong></td>
            </tr>
            <!-- 國防預算 -->
            <tr style="background-color: #FFF5F5;">
              <td rowspan="4" style="padding: 12px 16px; font-weight: bold; color: #B22222; border-bottom: 1px solid #FFDADA; vertical-align: top;">國防預算</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">2025年度預算</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">約 <strong style="color: #B22222; font-size: 16px;">550億美元</strong></td>
            </tr>
            <tr style="background-color: #FFFFFF;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">占GDP比例</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">約 <strong style="color: #B22222; font-size: 16px;">4.7%</strong>（北約會員國最高）</td>
            </tr>
            <tr style="background-color: #FFF5F5;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">全球支出排名</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;">第 <strong style="color: #B22222; font-size: 16px;">14</strong> 名</td>
            </tr>
            <tr style="background-color: #FFFFFF;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA; font-weight: 600;">武器進口成長 (2021-25)</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #FFDADA;"><strong style="color: #B22222; font-size: 16px;">+852%</strong>，北約歐洲國家最大進口國</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs opacity-80 tracking-wide">資料來源：波蘭國防部年度預算報告書　今周刊 製作 | BUSINESS TODAY</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭如何從國力後段班　邁向民主歐洲最強陸軍</h4>
      <p>波蘭的軍力躍升速度，不亞於她的經濟表現。波蘭投資貿易局（PAIH）台北辦事處首席代表吾志遠指出，波蘭現已是「北約第三強軍力，陸軍更是在北約歐洲最強」，且更有自研防空系統。</p>
      <p>這樣的國防地位並非一夕而成。前華沙台貿中心主任、貿協台中國際會展中心主任吳春見表示，波蘭地面部隊目標規模約30萬人，在歐盟數一數二，「因為隔壁是烏克蘭，有實戰的危機意識」。</p>
      <p>吳春見形容，波蘭國防展MSPO「幾乎是歐洲的武器大賽」，展覽在戶外整排展示軍備，「基本上，所有在烏克蘭戰爭在用的武器都看得到」。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭人願為國奮戰　對「俄鄰」、共產主義不抱幻想</h4>
      <p>高額軍費背後，來自罕見的社會集體共識。波蘭投資貿易局（PAIH）業務發展經理馬爾欽（Marcin Motyka）表示，2022年後，有很多波蘭男性公開表態，如果俄羅斯來犯，他們願意為國而戰。</p>
      <p>馬爾欽分析，若問波蘭人「願不願意支持政府增加軍事預算」，「我認為大多數人不反對」，但大家同樣關心的，是這筆錢有沒有花在刀口上，「不能亂花」。</p>
      <p>他特別強調，波蘭希望保有自主選擇武器採購對象的空間，而不能只從歐盟指定的少數廠商中選，因為歐洲過去20、30年來，在軍事技術上幾無發展，反觀以色列、美國、韓國的方案更加先進。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_4378.jpeg"
          alt="蘭華沙老城區市集廣場中的美人魚雕像"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭華沙老城區市集廣場中的美人魚雕像，是華沙重要的歷史、精神象徵。鄭鴻達攝影。
        </figcaption>
      </figure>
      <p>這份對外部威脅的警覺，同樣有著高度社會基礎。劉永健指出，根據調查，波蘭約有95%的人口一致認為，俄羅斯是其最大的國安威脅，「這在波蘭是相當高度的共識」。</p>
      <p>不過，劉永健委婉地表示，相較之下，台灣這方面「相對比較複雜」。也正是在這個社會共識基礎上，波蘭得以順利強化軍工產業、推動國防自主，並應處來自俄國的假訊息與認知作戰。</p>
      <p>蘇紫雲從制度面補充一個關鍵細節點出，波蘭的國會儘管是政黨林立，但對「提高國防預算」有著高度共識。他坦言，這正是台灣值得思考之處，「因為我們是談國防不是談黨派，更是講大家的共同安全」。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭巧用軍購化作槓桿　採購韓美軍武推本土技轉</h4>
      <p>波蘭的國防採購策略，是把軍購轉換為產業升級槓桿。吳春見回憶，韓國三年前是MSPO的夥伴國，時任韓國總統尹錫悅更親臨MSPO開幕，韓國LG能源，也在弗羅茨瓦夫設有逾萬人規模的大電池廠。</p>
      <p>在具體軍事採購項目上，波蘭政府近年大手筆採購韓製K2戰車、美製M1艾布蘭戰車、F-35戰機等，也同時要求技轉、在地生產，逐步把軍購連結到本土國防工業的重整。</p>
      <p>整體觀察可見，波蘭與韓國去年8月再簽訂67億美元合約，採購180輛K2（61輛在波生產），若包含美製M1戰車366輛，採購完成後，波蘭的主戰車總數將逾1100輛，將超過德法英義的總和。</p>
      <p>而波蘭最新一筆投資國防的銀彈，也來自歐盟。劉永健透露，波蘭是歐盟「歐洲安全行動」（SAFE）國防貸款方案的最大受益國，獲配約437億歐元，更率先於今年5月簽署協議。</p>
      <p>劉永健指出，SAFE整體貸款金額規模約1500億歐元，且波蘭已宣示，這筆資金將有近九成投入「本土產業與整體經濟」，用於無人機、反無人機、AI與長程精準彈藥等領域研製。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/shutterstock_2503460259.jpg"
          alt="K2黑豹主力戰車"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭軍隊在華沙展示採購自韓國的K2黑豹主力戰車。Shutterstock
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭兩大防衛集團　構成救急與救窮並行策略</h4>
      <p>在軍購槓桿之外，波蘭也有一套自己「養兵」的邏輯。蘇紫雲進一步說明，波蘭有兩大防衛集團，一個是PGZ（波蘭軍工集團），性質類似台灣的中科院，但規模更大，另一個則是民間的WB集團。</p>
      <p>他分析，PGZ近年走的是「兩條腿」策略，第一是「救急」，從韓國大量引進K2戰車、K9自走砲等地面作戰裝備，二是「救窮」，這包括靠自主研發的武器系統成功外銷。</p>
      <p>蘇紫雲指出，這部分最具代表性的自研成果，是波蘭版刺針飛彈「閃電」（Piorun）肩射防空飛彈，目前已外銷七國，兩大集團合計外銷軍工產值將近60億美元。</p>
      <p>他指出這正是波蘭「滿足國防需求的同時，也帶動經濟與產業發展」的具體案例，也是台灣現在應該要走的「國防經濟」路徑。至於WB集團，則側重通訊電子、電戰系統，以及無人機、無人船等無人作戰裝備。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">軟硬各有擅場　台波防衛合作能互補</h4>
      <p>蘇紫雲進一步指出，台灣與波蘭其實可以互補，如波蘭較缺乏先進電子零元件，台灣可以提供；而波蘭「閃電」飛彈量產快、價格比刺針便宜，台灣或可評估引進，強化自身低空防衛系統。</p>
      <p>在彈藥產線擴充上，蘇紫雲觀察，台灣的兵工廠雖已生產砲彈，但過去多維持單一產線，而波蘭近一年進口不少化工原料，用意就是要加速在地生產砲彈與彈藥，這一點值得台灣參考。</p>
      <p>他表示，台灣與波蘭都不約而同選擇了無人機與砲彈快速量產做為突破口，「某個程度來看真的有類似之處」，差別在於波蘭身為陸權國家，對於地面裝備的投資速度更快。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://doqvf81n9htmm.cloudfront.net/data/hungtacheng_311/IMG_4130.JPG"
          alt="2026年歐洲台灣形象展 - 波蘭華沙"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 2026年歐洲台灣形象展首度移師波蘭華沙，會中攝影無人載具專區，展示多家台灣企業的無人機船等產品。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">無人機生態系崛起　或成台灣軍工升級新途徑</h4>
      <p>在無人機帶動的軍工體系的升級路上，台灣近年意外地占有一席之地。吳春見不諱言，台灣產制的無人機「大概七、八成都是賣給波蘭」，後續波蘭再將之投入烏克蘭戰場。</p>
      <p>他坦言，台灣的無人機在「整機不是那麼強，但零組件還可以，特別是一些AI相關的裝置」。時下這條「台灣製造、波蘭轉運、烏克蘭實戰」的路徑，已成為台灣國防產業全球化的新樣態。</p>
      <p>波蘭台灣工商會會長Agnieszka Sygitowicz也表示，去年波蘭是台灣無人機最大的進口國，她期盼雙方不再停留在只有進出口貿易，而是進一步走向投資設廠。</p>
      <p>Sygitowicz強調，若能把台灣的零組件優勢，與波蘭在地的研發能量結合，銷往歐洲乃至烏克蘭，「這對波蘭而言具有戰略意義」，無人機將是未來兩年最關鍵的產業之一。</p>
      <p>劉永健則指出，目前台波國防合作主要在「業者對業者、協會對協會」層次，例如台灣卓越無人機海外商機聯盟與波蘭、烏克蘭無人機協會的合作，政府對政府部分仍在努力。</p>
      <p>蘇紫雲則認為，無人機這一塊，台灣可以立刻結合既有基礎，「剩下只是整合最後一哩路」，未來與波蘭在無人作戰裝備上的合作，可望樂觀期待。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">從二檔加速到四檔！波蘭在歐防衛角色快速升級</h4>
      <p>俄羅斯近來角色的轉變，也讓波蘭在歐洲防衛體系中的位置跟著位移。蘇紫雲分析，俄國過去被波蘭視為「潛在威脅」，如今已成「實質威脅」，波蘭因此成為北約在歐洲第二道防線。</p>
      <p>他用車輛排檔形容，傳統上西歐的德法軸心提供核保護傘與技術物資，如今整個歐洲都已動起來，而波蘭正好位在最前線，速度自然更快，「德法已經在『一檔』起步，後現在在『二檔』加速，但波蘭已經跑到『四檔』了」。</p>
      <p>蘇紫雲補充，在2022年之前，歐洲政治圈一度出現「波義軸心」的說法，認為波蘭與義大利是能主導歐洲的「新歐洲」勢力，相對於其眼中「已顯死氣沉沉」的德法「舊歐洲」，如今義大利動能趨緩，波蘭幾乎獨自扛起這股新興力量的話語權。</p>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">俄烏戰爭後成歐洲再工業化基地　波蘭經驗給台灣的課題</h4>
      <p>自俄烏戰爭全面爆發後，波蘭的角色被重新定義。劉永健表示，波蘭是中東歐量體最大的國家，人口近3800萬、工業基礎雄厚，已成為「中東歐再工業化、再武裝化的重要生產基地」。</p>
      <p>在社會韌性上，兩國的做法也趨於一致。劉永健指出，波蘭有類似台灣「全民防衛韌性手冊」的機制，上月台波更簽署資安合作備忘錄，波蘭去年也首度派團參加我方的跨國網路攻防演練。</p>
      <p>對照之下，台灣近來腳步也在加快，如台灣2026年度國防預算依北約標準，已達GDP3.32%，總統賴清德更宣示2030年上看5%，並嘗試透過規模1.25兆的特別條例，進行國防產業化。</p>
      <p>至於這條路能帶來多少實際效益？蘇紫雲估算，從民主國家研究平均來看，國防投入大概可以帶動國內經濟產生1.8倍的效益，換算下來，無人機特別條例若投入2100億元，至少能產生約3700億元的經濟產值，國艦國造也是同樣邏輯。</p>
      <p>蘇紫雲認為，這類投資效益有三層，第一是就業率，二是產業升級，三是「溢位效果」，亦即國防研發技術可以轉用到商用市場，形成軍民互惠的良性循環。</p>
      <p>從被瓜分的歷史教訓，到今日擁有全歐洲最強陸軍，波蘭走的是「以軍購槓桿餵養本土產業」的路，這頭自立自強的野牛，如何把國防變成產業第二引擎，成為同樣面對敵意強鄰的台灣人最該學習的一課。</p>

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
            href="https://www.businesstoday.com.tw/article/category/183025/post/202607290069/"
            target="_blank"
          >波蘭直擊3—只要一息尚存，失去的我們用軍刀奪回！「野牛渡河」記取亡國歷史教訓，台灣該如何借鑑</a>
        </li>
      </ul>
      <a
        class="block font-bold text-center text-sm py-4 border border-bg-light bg-black/10 can-hover:hover:underline"
        href="https://www.businesstoday.com.tw/article/category/183025/post/202607290067/"
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