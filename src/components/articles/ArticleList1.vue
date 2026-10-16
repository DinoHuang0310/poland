<template>
  <li class="w-1/2 even:mt-10 even:sm:mt-16">
    <figure
      class="bg-white cursor-pointer shadow-md can-hover:hover:shadow-xs can-hover:hover:scale-102 transition"
      @click="openModal"
    >
      <img
        class="aspect-4/3 object-cover object-center bg-primary/30"
        src="/src/assets/images/article-img01.jpg"
        alt="瀕死的野牛波蘭如何養活餵壯"
        loading="lazy"
      >
      <figcaption class="p-2 sm:p-4">
        <h5 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif mb-2">瀕死的野牛波蘭如何養活餵壯</h5>
        <p class="tracking-normal sm:tracking-widest">從共產廢墟、市場重整到接軌歐盟，看波蘭如何在三十多年內重新養活、餵壯</p>
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
        src="/src/assets/images/article-img01.jpg"
        alt="波蘭直擊1—共產廢墟用「休克療法」，變身兆美元經濟體！「野牛瀕死」如何花30年重新養活餵壯"
      >
      <figcaption class="absolute w-full bottom-0 left-0 p-2 sm:p-4 pt-8 bg-linear-to-b from-black/0 to-black/90">
        <h3 class="text-2xl sm:text-3xl xl:text-4xl text-white font-black font-serif">
          波蘭直擊1—共產廢墟用「休克療法」，變身兆美元經濟體！「野牛瀕死」如何花30年重新養活餵壯
        </h3>
      </figcaption>
    </figure>
    <div class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 mt-4 sm:mt-0">
      <ul class="sm:flex text-xs sm:space-x-4 space-y-0.5 sm:space-y-0 tracking-normal py-4 sm:py-6 border-b border-bg-light">
        <li><span class="text-primary font-black">撰文</span>｜鄭鴻達</li>
        <li><span class="text-primary font-black">圖源</span>｜鄭鴻達攝影、吳春見、林啟揚提供、Shutterstock</li>
      </ul>
      <section class="p-4 bg-black/10 border-l-6 border-primary space-y-6 mt-8">
        <p>2009年冬天某個凌晨三點，波蘭國鐵夜車停靠第二大城克拉科夫，旅波台僑林啟揚踏下車廂，腳下卻沒有月台。</p>
        <p>那一年車站正在改建，積雪蓋住臨時的碎石地。多數東西被雪埋住，他當下的感受是：這裡看起來比台灣還落後很多。</p>
        <p>10多年後，同一棟廢棄的舊火車站，已改建成一間遊戲公司的辦公室，一部分空間還開放成新創孵化器。克拉科夫已躍升為歐洲遊戲軟體與IT產業重鎮，更被視為波蘭的矽谷，超過50家國際科技巨頭進駐。</p>
        <p>這一幕的今昔對照，正是「波蘭」這頭「歐洲野牛」雄起最具畫面感的縮影。</p>
      </section>
    </div>

    <article v-if="showArticle" class="w-full max-w-2xl mx-auto sm:px-4 2xl:px-8 my-8 space-y-6">
      <p>在多數台灣人印象中，波蘭仍停留在「共產解體後的破敗國家」。但2025年，波蘭名目GDP跨越1兆美元門檻，一度逼近瑞士，有望躋身全球第20大經濟體。</p>
      <p>更巧的是，這一年恰好是波蘭第一位國王加冕的1000周年。若以購買力平價（PPP）計算估算，2026波蘭人均GDP約5萬9790美元，將會略高於日本。</p>
      <p>前華沙台貿中心主任、貿協台中國際會展中心主任吳春見指出，波蘭其實從戰後以來就年年穩定成長，只是「從來沒有人去關注過」。</p>
      <div style="background-color: #FFF5F5; border: 1px solid #FFDADA; border-radius: 8px; padding: 24px; margin-bottom: 20px;"><!-- 標題與標籤 -->
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
          <div><span style="background-color: #B22222; color: #FFFFFF; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 2px; text-transform: uppercase; letter-spacing: 0.5px;">國際經濟</span>
          <h5 style="margin: 8px 0 0 0; font-size: 22px; font-weight: 700; color: #B22222; letter-spacing: -0.5px;">波蘭 vs. 日本 人均 GDP (PPP) 16年趨勢比較</h5>
          </div>
          <div style="font-size: 13px; color: #666666; text-align: right;">單位：國際元 (Current Intl $)</div>
          </div>
          <!-- 摘要數據橫條 (Data-First) -->
          <div style="display: flex; flex-wrap: wrap; gap: 16px; border-top: 1px solid #FFDADA; padding-top: 16px; margin-top: 12px;">
          <div style="flex: 1; min-width: 200px; background-color: #FFFFFF; border: 1px solid #FFDADA; border-radius: 8px; padding: 16px;">
          <div style="font-size: 13px; color: #666666; margin-bottom: 4px;">波蘭 (2026 預測超越)</div>
          <div style="font-size: 28px; font-weight: 800; color: #B22222;">$59,790</div>
          <div style="font-size: 12px; color: #888888; margin-top: 4px;">2010-2026 增長率：<strong style="color: #B22222;">+184.8%</strong></div>
          </div>
          <div style="flex: 1; min-width: 200px; background-color: #FFFFFF; border: 1px solid #FFDADA; border-radius: 8px; padding: 16px;">
          <div style="font-size: 13px; color: #666666; margin-bottom: 4px;">日本 (2026 預測)</div>
          <div style="font-size: 28px; font-weight: 800; color: #333333;">$59,207</div>
          <div style="font-size: 12px; color: #888888; margin-top: 4px;">2010-2026 增長率：<strong style="color: #333333;">+66.0%</strong></div>
          </div>
        </div>
      </div>
      <!-- line -->
      <div style="background-color: #FFFFFF; border: 1px solid #FFDADA; border-radius: 8px; padding: 20px; margin-bottom: 20px;"><!-- 圖例 -->
        <div style="display: flex; justify-content: flex-end; gap: 20px; margin-bottom: 12px; font-size: 13px; font-weight: 600;">
        <div style="display: flex; align-items: center; gap: 6px;"><span>波蘭 (POL)</span></div>

        <div style="display: flex; align-items: center; gap: 6px;"><span>日本 (JPN)</span></div>
        </div>
        <!-- 響應式 SVG 圖表容器 -->

        <div style="width: 100%; overflow-x: auto;"><svg style="width: 100%; min-width: 600px; height: auto; display: block;" viewBox="0 0 760 320"> <!-- 背景網格 --> <line stroke="#F0F0F0" stroke-dasharray="4" x1="50" x2="740" y1="40" y2="40"></line> <text fill="#888888" font-size="11" text-anchor="end" x="42" y="44">$60,000</text> <line stroke="#F0F0F0" stroke-dasharray="4" x1="50" x2="740" y1="100" y2="100"></line> <text fill="#888888" font-size="11" text-anchor="end" x="42" y="104">$50,000</text> <line stroke="#F0F0F0" stroke-dasharray="4" x1="50" x2="740" y1="160" y2="160"></line> <text fill="#888888" font-size="11" text-anchor="end" x="42" y="164">$40,000</text> <line stroke="#F0F0F0" stroke-dasharray="4" x1="50" x2="740" y1="220" y2="220"></line> <text fill="#888888" font-size="11" text-anchor="end" x="42" y="224">$30,000</text> <line stroke="#CCCCCC" x1="50" x2="740" y1="280" y2="280"></line> <text fill="#888888" font-size="11" text-anchor="end" x="42" y="284">$20,000</text> <!-- X 軸標籤 (年份) --> <text fill="#666666" font-size="11" text-anchor="middle" x="60" y="298">2010</text> <text fill="#666666" font-size="11" text-anchor="middle" x="145" y="298">2012</text> <text fill="#666666" font-size="11" text-anchor="middle" x="230" y="298">2014</text> <text fill="#666666" font-size="11" text-anchor="middle" x="315" y="298">2016</text> <text fill="#666666" font-size="11" text-anchor="middle" x="400" y="298">2018</text> <text fill="#666666" font-size="11" text-anchor="middle" x="485" y="298">2020</text> <text fill="#666666" font-size="11" text-anchor="middle" x="570" y="298">2022</text> <text fill="#666666" font-size="11" text-anchor="middle" x="655" y="298">2024</text> <text fill="#B22222" font-size="11" font-weight="bold" text-anchor="middle" x="730" y="298">2026(E)</text> <!-- 日本折線 (灰色) --> <polyline fill="none" points="
                    60,186 102.5,181 145,172 187.5,161 230,158 272.5,150 315,151 357.5,146
                    400,141 442.5,138 485,139 527.5,124 570,105 612.5,84 655,75 697.5,67 730,45
                  " stroke="#555555" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline> <!-- 波蘭折線 (今周紅 - 展現交叉超越) --> <polyline fill="none" points="
                    60,274 102.5,263 145,258 187.5,253 230,247 272.5,238 315,230 357.5,219
                    400,206 442.5,185 485,177 527.5,154 570,119 612.5,109 655,92 697.5,74 730,41
                  " stroke="#B22222" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline> <!-- 數據點與終點標註 --> <circle cx="730" cy="41" fill="#B22222" r="5"></circle> <text fill="#B22222" font-size="11" font-weight="bold" text-anchor="middle" x="730" y="27">$59,790</text> <circle cx="730" cy="45" fill="#555555" r="5"></circle> <text fill="#333333" font-size="11" font-weight="bold" text-anchor="middle" x="730" y="60">$59,207</text> </svg></div>
      </div>
      
      <div style="background-color: #FFFFFF; border: 1px solid #FFDADA; border-radius: 8px; overflow: hidden;">
        <div style="padding: 12px 16px; background-color: #FFF5F5; border-bottom: 1px solid #FFDADA; font-weight: bold; font-size: 14px; color: #B22222;">歷史數據明細表 (2010 - 2026預測)</div>
        <div style="overflow-x: auto;">
          <div class="table-wrapper">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: right; min-width: 680px;">
              <thead>
                <tr style="background-color: #FAFAFA; border-bottom: 2px solid #FFDADA; color: #666666;">
                  <th style="padding: 10px 12px; text-align: left;">國家 / 年份</th>
                  <th style="padding: 10px 8px;">2010</th>
                  <th style="padding: 10px 8px;">2014</th>
                  <th style="padding: 10px 8px;">2018</th>
                  <th style="padding: 10px 8px;">2020</th>
                  <th style="padding: 10px 8px;">2022</th>
                  <th style="padding: 10px 8px;">2024</th>
                  <th style="padding: 10px 8px; color: #B22222; font-weight: bold;">2026 (E)</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #F0F0F0;">
                  <td style="padding: 10px 12px; text-align: left; font-weight: bold; color: #B22222;">波蘭 (POL)</td>
                  <td style="padding: 10px 8px;">$20,991</td>
                  <td style="padding: 10px 8px;">$25,460</td>
                  <td style="padding: 10px 8px;">$32,345</td>
                  <td style="padding: 10px 8px;">$37,089</td>
                  <td style="padding: 10px 8px;">$46,778</td>
                  <td style="padding: 10px 8px;">$51,263</td>
                  <td style="padding: 10px 8px; font-weight: bold; color: #B22222; background-color: #FFF5F5;">$59,790</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; text-align: left; font-weight: bold; color: #333333;">日本 (JPN)</td>
                  <td style="padding: 10px 8px;">$35,658</td>
                  <td style="padding: 10px 8px;">$40,272</td>
                  <td style="padding: 10px 8px;">$43,090</td>
                  <td style="padding: 10px 8px;">$43,560</td>
                  <td style="padding: 10px 8px;">$49,246</td>
                  <td style="padding: 10px 8px;">$54,156</td>
                  <td style="padding: 10px 8px; font-weight: bold; color: #333333; background-color: #F5F5F5;">$59,207</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p class="text-xs opacity-80 tracking-wide">資料來源：World Bank（2010-2025）、IMF（2026預測值）</p>
      <br>

      <div style="border-left: 6px solid #B22222; padding-left: 14px; margin-bottom: 20px;">
        <h2 style="margin: 0; font-size: 22px; font-weight: 700; color: #333333; line-height: 1.3;">2025 年全球前 25 大名目 GDP 國家排名</h2>
        <p style="margin: 6px 0 0 0; font-size: 14px; color: #666666;">單位：百萬美元 (Current US$ Million)&nbsp;<span style="color:#696969;"><span style="caret-color: rgb(178, 34, 34); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-align: right;">資料來源：World Bank</span><span style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-weight: 700; letter-spacing: 0.5px; text-align: right; caret-color: rgb(102, 102, 102); font-size: 14px;">&nbsp;&nbsp;</span></span></p>
      </div>
      <div style="background-color: #FFF5F5; border: 1px solid #FFDADA; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; border-bottom: 1px solid #FFDADA; padding-bottom: 10px;"><span style="background-color: #B22222; color: #ffffff; font-size: 12px; font-weight: 600; padding: 3px 8px; border-radius: 2px; text-transform: uppercase;">焦點關注</span> <span style="font-size: 13px; font-weight: 600; color: #B22222;">波蘭進逼第 20 名</span></div>

        <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between;"><!-- 瑞士 -->
        <div style="flex: 1; min-width: 200px; background: #ffffff; border-radius: 8px; padding: 14px; border: 1px solid #CCCCCC;">
        <div style="font-size: 13px; color: #666666; margin-bottom: 4px;">排名第 20 名</div>

        <div style="font-size: 18px; font-weight: 700; color: #333333;">瑞士 <span style="font-size: 13px; font-weight: 400; color: #666666;">Switzerland</span></div>

        <div style="font-size: 26px; font-weight: 800; color: #333333; margin-top: 6px;">1,043,530 <span style="font-size: 12px; font-weight: 400;">M USD</span></div>

        <div style="font-size: 12px; color: #666666; margin-top: 2px;">約 1.044 兆美元</div>
        </div>
        <!-- 差距指標 -->

        <div style="text-align: center; padding: 0 10px; min-width: 140px;">
        <div style="font-size: 12px; color: #B22222; font-weight: 600; margin-bottom: 4px;">GDP 差距極窄</div>

        <div style="font-size: 22px; font-weight: 800; color: #B22222; line-height: 1;">8,038 M</div>

        <div style="font-size: 12px; color: #B22222; margin-top: 4px; font-weight: 600;">僅差 0.77%</div>
        </div>
        <!-- 波蘭 (高亮重點) -->

        <div style="flex: 1; min-width: 200px; background: #ffffff; border-radius: 8px; padding: 14px; border: 2px solid #B22222; box-shadow: 0 2px 8px rgba(178, 34, 34, 0.15);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 13px; color: #B22222; font-weight: 700;">排名第 21 名</div>
        <span style="background-color: #B22222; color: #ffffff; font-size: 10px; padding: 2px 6px; border-radius: 2px; font-weight: 600;">即將超越</span></div>
        <div style="font-size: 18px; font-weight: 700; color: #B22222; margin-top: 2px;">波蘭 <span style="font-size: 13px; font-weight: 400; color: #666666;">Poland</span></div>
        <div style="font-size: 26px; font-weight: 800; color: #B22222; margin-top: 6px;">1,035,492 <span style="font-size: 12px; font-weight: 400;">M USD</span></div>
        <div style="font-size: 12px; color: #B22222; margin-top: 2px; font-weight: 600;">約 1.035 兆美元</div>
        </div>
        </div>
      </div>
      <div style="overflow-x: auto; margin-bottom: 16px;">
        <div class="table-wrapper">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; background-color: #ffffff;">
            <thead>
              <tr style="background-color: #FFF5F5; border-bottom: 2px solid #B22222; color: #B22222;">
                <th style="padding: 12px 10px; width: 60px; text-align: center; font-weight: 700;">排名</th>
                <th style="padding: 12px 10px; font-weight: 700;">國家 / 經濟體</th>
                <th style="padding: 12px 10px; text-align: right; font-weight: 700;">GDP (百萬美元)</th>
                <th style="padding: 12px 10px; width: 35%; font-weight: 700;">體量佔比對比 (對比美國)</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">1</td>
                <td style="padding: 10px; font-weight: 600;">美國 <span style="font-size: 12px; color: #888888; font-weight: 400;">United States</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">30,769,700</td>
                <td style="padding: 10px;">
                <div style="background-color: #B22222; height: 8px; width: 100%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">2</td>
                <td style="padding: 10px; font-weight: 600;">中國 <span style="font-size: 12px; color: #888888; font-weight: 400;">China</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">19,498,039</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 63.37%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">3</td>
                <td style="padding: 10px; font-weight: 600;">德國 <span style="font-size: 12px; color: #888888; font-weight: 400;">Germany</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">5,050,923</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 16.41%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">4</td>
                <td style="padding: 10px; font-weight: 600;">日本 <span style="font-size: 12px; color: #888888; font-weight: 400;">Japan</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">4,435,163</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 14.41%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">5</td>
                <td style="padding: 10px; font-weight: 600;">英國 <span style="font-size: 12px; color: #888888; font-weight: 400;">United Kingdom</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">4,002,588</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 13.01%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">6</td>
                <td style="padding: 10px; font-weight: 600;">印度 <span style="font-size: 12px; color: #888888; font-weight: 400;">India</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">3,956,067</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 12.86%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">7</td>
                <td style="padding: 10px; font-weight: 600;">法國 <span style="font-size: 12px; color: #888888; font-weight: 400;">France</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">3,366,316</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 10.94%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">8</td>
                <td style="padding: 10px; font-weight: 600;">俄羅斯 <span style="font-size: 12px; color: #888888; font-weight: 400;">Russian Federation</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">2,561,310</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 8.32%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">9</td>
                <td style="padding: 10px; font-weight: 600;">義大利 <span style="font-size: 12px; color: #888888; font-weight: 400;">Italy</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">2,551,557</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 8.29%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">10</td>
                <td style="padding: 10px; font-weight: 600;">加拿大 <span style="font-size: 12px; color: #888888; font-weight: 400;">Canada</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">2,319,900</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 7.54%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">11</td>
                <td style="padding: 10px; font-weight: 600;">巴西 <span style="font-size: 12px; color: #888888; font-weight: 400;">Brazil</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">2,279,920</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 7.41%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">12</td>
                <td style="padding: 10px; font-weight: 600;">西班牙 <span style="font-size: 12px; color: #888888; font-weight: 400;">Spain</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,906,453</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 6.20%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">13</td>
                <td style="padding: 10px; font-weight: 600;">韓國 <span style="font-size: 12px; color: #888888; font-weight: 400;">Korea, Rep.</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,872,375</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 6.09%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">14</td>
                <td style="padding: 10px; font-weight: 600;">墨西哥 <span style="font-size: 12px; color: #888888; font-weight: 400;">Mexico</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,832,641</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 5.96%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">15</td>
                <td style="padding: 10px; font-weight: 600;">澳洲 <span style="font-size: 12px; color: #888888; font-weight: 400;">Australia</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,798,519</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 5.85%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">16</td>
                <td style="padding: 10px; font-weight: 600;">土耳其 <span style="font-size: 12px; color: #888888; font-weight: 400;">Turkiye</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,597,293</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 5.19%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">17</td>
                <td style="padding: 10px; font-weight: 600;">印尼 <span style="font-size: 12px; color: #888888; font-weight: 400;">Indonesia</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,445,643</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 4.70%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">18</td>
                <td style="padding: 10px; font-weight: 600;">荷蘭 <span style="font-size: 12px; color: #888888; font-weight: 400;">Netherlands</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,332,768</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 4.33%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">19</td>
                <td style="padding: 10px; font-weight: 600;">沙烏地阿拉伯 <span style="font-size: 12px; color: #888888; font-weight: 400;">Saudi Arabia</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">1,276,943</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 4.15%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <!-- 瑞士 (對比目標) -->
              <tr style="border-bottom: 1px solid #FFDADA; background-color: #FFF5F5;">
                <td style="padding: 10px; text-align: center; font-weight: 700; color: #333333;">20</td>
                <td style="padding: 10px; font-weight: 700; color: #333333;">瑞士 <span style="font-size: 12px; color: #666666; font-weight: 400;">Switzerland</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px; color: #333333;">1,043,530</td>
                <td style="padding: 10px;">
                <div style="background-color: #888888; height: 10px; width: 3.39%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <!-- 波蘭 (高亮顯示) -->
              <tr style="border-bottom: 2px solid #B22222; background-color: #FFF5F5;">
                <td style="padding: 10px; text-align: center; font-weight: 800; color: #B22222; font-size: 16px;">21</td>
                <td style="padding: 10px; color: rgb(178, 34, 34);">
                <p style="font-weight: 700;">波蘭 <span style="font-size: 12px; color: #B22222; font-weight: 400;">Poland</span> <span style="background-color: #B22222; color: #ffffff; font-size: 11px; padding: 1px 5px; border-radius: 2px; margin-left: 6px; font-weight: 600;">即將跨越門檻</span></p>

                <p><strong>（台灣&nbsp;</strong><span style="font-size:12px;">Taiwan<span style="color:#B22222;">*註1</span><span style="color:#696969;">）</span></span></p>
                </td>
                <td style="padding: 10px; text-align: right; font-weight: 800; font-family: monospace; font-size: 16px; color: #B22222;">
                <p>1,035,492</p>

                <p>（884,387<span style="color:#B22222;"><span style="font-size:12px;">*註1</span></span>）</p>
                </td>
                <td style="padding: 10px;">
                <div style="background-color: #B22222; height: 10px; width: 3.37%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">22</td>
                <td style="padding: 10px; font-weight: 600;">比利時 <span style="font-size: 12px; color: #888888; font-weight: 400;">Belgium</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">725,466</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 2.36%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">23</td>
                <td style="padding: 10px; font-weight: 600;">愛爾蘭 <span style="font-size: 12px; color: #888888; font-weight: 400;">Ireland</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">721,701</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 2.35%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">24</td>
                <td style="padding: 10px; font-weight: 600;">阿根廷 <span style="font-size: 12px; color: #888888; font-weight: 400;">Argentina</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">683,098</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 2.22%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 10px; text-align: center; font-weight: 600; color: #666666;">25</td>
                <td style="padding: 10px; font-weight: 600;">瑞典 <span style="font-size: 12px; color: #888888; font-weight: 400;">Sweden</span></td>
                <td style="padding: 10px; text-align: right; font-weight: 700; font-family: monospace; font-size: 15px;">668,999</td>
                <td style="padding: 10px;">
                <div style="background-color: #CCCCCC; height: 8px; width: 2.17%; border-radius: 2px;">&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="text-xs opacity-80 tracking-wide">註1：台灣未列World Bank統計，此數據取自IMF統計數值。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/hungtacheng_311/IMG_0325.JPG"
          alt="波蘭台僑林啟揚在10多年前拍下華沙市中心的街景"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭台僑林啟揚在10多年前拍下華沙市中心的街景，後來該處摩天大樓林立，也設有Google多個跨國企業總部。林啟揚提供
        </figcaption>
      </figure>


      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">鐵幕降下後無寡頭「慢開放」 波蘭打下穩定底色</h4>
      <p>1989年，波蘭結束共產統治後，時任財政部長巴爾采羅維奇（Leszek Balcerowicz）主導推出「休克療法」（Shock Therapy），於1990年初一次性大幅開放物價管制、削減政府補貼與財政赤字、緊縮貨幣供給，並將茲羅提大幅貶值以穩定匯率，讓計劃經濟切換為市場經濟。</p>
      <p>吳春見表示，波蘭在共產體制解體後，政治上保持「緩慢地開放」，因此不像其他共產國家那樣，解體後產生大量寡頭與貪腐政權，這反而讓「她」每一步都走得更穩。</p>
      <p>不過他坦言，波蘭的缺點是保守、且始終沒有建立自有品牌，唯一勉強算得上的家電品牌AMICA（波蘭知名大型家電品牌），「但出了波蘭幾乎沒人知道」，等於長期在幫外商打工。</p>
      <p>吳春見也指出，波蘭的理工人才是「歐洲非常重要的人才庫」，波蘭每年培養出大批優秀的工程師與資訊科學人才，近代就出過逾16位諾貝爾獎得主。且波蘭人「重點是勤奮！」吳春見近身觀察，他的波蘭同事常會主動加班到晚上8、9點。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/hungtacheng_311/%E5%90%B3%E6%98%A5%E8%A6%8B%E8%88%87%E6%B3%A2%E8%98%AD%E5%89%8D%E9%A7%90%E5%8F%B0%E4%BB%A3%E8%A1%A8Mr_%20Cyryl%20Kozaczewski%EF%BC%8C%E5%90%B3%E6%98%A5%E8%A6%8B%E6%8F%90%E4%BE%9B.jpg"
          alt="貿協台中國際會展中心主任吳春見(左) 與波蘭前駐台代表Mr. Cyryl Kozaczewski(右)"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 貿協台中國際會展中心主任吳春見（左），在華沙台貿中心主任任內期間，與波蘭前駐台代表Mr. Cyryl Kozaczewski合影。資料照，吳春見提供
        </figcaption>
      </figure>
      <p>這股韌性，其實源自一段被反覆提起的歷史教訓。波蘭投資貿易局（PAIH）台北辦事處首席代表吾志遠說，波蘭其實要到1989年才真正重獲自由，在那之前，波蘭歷經了45年由蘇聯在幕後控制的共產主義時期，政治高壓、經濟動盪、民生物資採取配給制。</p>
      <p>吾志遠強調，再往前追溯，波蘭更曾被俄、奧、德三國瓜分，曾經有整整123年，波蘭從世界地圖上消失，他說：「只要給我們自由、還給我們自己的國家，我們就可以發展得很好。」</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/hungtacheng_311/%E5%90%BE%E5%BF%97%E9%81%A0Lukasz%20Piotr%20Lanski.jpg"
          alt="波蘭投資貿易局（PAIH）台北辦事處首席代表吾志遠Lukasz Piotr Lanski"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭投資貿易局（PAIH）台北辦事處首席代表吾志遠Lukasz Piotr Lanski。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭蛻變關鍵十年　靠勤奮吸外資、用歐盟補貼落地</h4>
      <p>1989年6月，波蘭國會選舉，團結工聯大獲全勝，這是衝破鐵幕的開始、也加速整個東歐的民主化浪潮。但若要談到波蘭華麗轉身為東歐經濟領頭羊，PAIH業務發展經理馬爾欽（Marcin Motyka）認為，「最關鍵的2010到2020這十年」。</p>
      <p>馬爾欽回憶，90年代波蘭還在承受共產後遺症，當時父母都有工作，但孩子連買一塊巧克力都困難，整個社會經歷過一段艱困期。如今波蘭已成為全球第20大經濟體經濟，他在波蘭用網銀轉帳只花一分鐘就到帳，反觀在西歐卻覺得對方系統老舊笨重。</p>
      <p>他分析，波蘭這十年來超瑞趕日，除了每年培養科技人才、歐盟資金挹注與該國供應鏈重組外，波蘭人勤奮工作的特質、也是吸引外資、扎實發展基礎建設的主因，他直言「我們不是像義大利、法國那樣，靠觀光老本」。</p>
      <p>駐波蘭代表處大使劉永健則點出兩個決定性因素，第一是確立市場經濟模式，讓外資很快進來；二是2004年加入歐盟，歐盟補貼對基建與各方面發展發揮了決定性作用。</p>
      <p>劉永健補充，波蘭是歐盟成員國中，唯一在2008年金融危機期間，仍然維持經濟正成長的國家，這一點讓波蘭相當自豪。</p>
      <p>歐盟資金補貼，更是深入產業末梢。林啟揚回憶，波蘭過去十年拿了非常多歐盟補助，連他當時任職的遊戲公司，都要他每半年填一次「職業別IT」的表單，以申請歐盟的稅收優惠或薪資補貼。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/hungtacheng_311/IMG_4312.jpeg"
          alt="我國駐波蘭大使 劉永健"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 我國駐波蘭大使劉永健接受《今周刊》專訪，談及波蘭與台灣的多個議題。鄭鴻達攝影。
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">新冠疫情與俄烏戰爭雙引擎　也推升波蘭薪資與房價</h4>
      <p>真正讓波蘭經濟成長「噴發到有點誇張」的，是2020年的COVID-19的疫情，與2022年烏俄戰爭全面爆發的這兩記「連續技」(Combo)。</p>
      <p>林啟揚回憶，疫情前，華沙工程師稅前約6、7000波幣（約新台幣4到5萬元），而到了疫情後，軟體、遊戲、App等產業大賺，讓工程師薪資快速拉升，一路逼近西歐水準。</p>
      <p>他也觀察到，烏俄戰爭全面爆發後，波蘭成為避險聖地「一堆人、一堆錢進來」，湧入的不只是難民，更包括來自烏克蘭與白俄羅斯的有錢人，「他們帶來資金，也帶來開公司、做軟體的工作機會」。</p>
      <p>不過這股熱潮的副作用，是房價五年翻倍。林啟揚坦言，2020年初看的房子，如今已價值兩倍，波蘭央行為此升息因應，利率一度衝到9%，而目前仍在6到7%的高檔。</p>
      <p>吾志遠也證實，當出約200萬烏克蘭人的到來，對波蘭經濟幫助非常大，「沒有這批烏克蘭人，波蘭不可能發展得這麼快」，尤其是在少子化的背景下。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/hungtacheng_311/%E6%B3%A2%E8%98%AD%E5%8F%B0%E5%83%91%E6%9E%97%E5%95%9F%E6%8F%9A.jpg"
          alt="台僑林啟揚"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 在軟體業服務的台僑林啟揚，分享在波蘭華沙求學、就業的觀察與經驗。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">人才便宜、優質又全球化　成波蘭提升國力最佳助力</h4>
      <p>疫情與地緣政治危機，成了波蘭國力與經濟更上層樓的轉機。外資看上的，也包括了波蘭「便宜又優質」的人力。林啟揚指出，波蘭的高等教育普及，念到研究所多半不用學費，且工程師數量多，成本卻比西歐國家便宜三到四倍以上。</p>
      <p>他形容，這讓波蘭有點像一個價格低廉的代工處所，「西邊有什麼設計，那邊可以幫你做」，正如台積電也替全球代工製造晶片。他也提到，如今Google在華沙市中心有兩棟大樓，更是其於歐洲最大據點。</p>
      <p>吳春見則從產業布局補充表示，波蘭設有14個經濟特區，策略類似台灣早期的加工出口區，看產業別、投資金額、就業率給予相應優惠，對台、韓、日資企業尤其積極。</p>
      <p>不過，波蘭產業路徑與台灣稍有不同。吾志遠說明，波蘭因地理位置優越、又是歐盟第五大人口國，「各領域同步發展，沒有特別只集中一個」，與台灣「每個時期有一個主導的產業帶頭」模式不同。</p>
      <p>他舉例，全歐最大石油公司之「Orlen」正大力發展離岸風電，波蘭北部也在規劃第一座小型模組化核電廠（SMR），波蘭的「每個領域真的都在轉變」。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/hungtacheng_311/shutterstock_2692559279.jpg"
          alt="歐洲野牛渡河"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 歐洲野牛（波蘭文żubr，英文European bison）為波蘭的國家、民族精神象徵，也列為國家級代表動物。示意圖，Shutterstock
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">波蘭躋身兆美元俱樂部　兩大策略應對中等收入陷阱</h4>
      <p>在躋身GDP兆美元俱樂部後，波蘭也正走向新的關口。吾志遠坦言，波蘭目前最大挑戰是面對「中等收入陷阱」，很多國家的經濟發展，到這個階段就停滯了。</p>
      <p>他分析，波蘭的突圍策略，一個是靠創新，波蘭去年終於推動半導體發展戰略；其二，是嘗試解決少子化，透過回國定居前三年免所得稅等優惠，要把海外人才吸回國內。</p>
      <p>值得台灣注意的是，如此合作模式已正端上檯面。劉永健透露，鴻海與波蘭國營電動車公司ElectroMobility Poland的電動車合作案、電電公會（TEEMA）在波蘭設立台灣園區，波蘭政府都高度重視。</p>
      <p>劉永健形容，波蘭官方甚至把電電公會這次的投資，比擬為20年前日本豐田、十年前韓國LG在波蘭的投資，視為「高科技供應鏈在地落地生根」。</p>
      <p>波蘭台灣工商會會長Agnieszka Sygitowicz也表示，波蘭目前在半導體領域雖不算強，但在工程技術與人才供給上具有優勢，盼能與捷克、德國德勒斯登，形成半導體「魔幻三角」（Magic Triangle）。</p>
      <figure>
        <img
          class="w-full aspect-4/3 object-cover object-center bg-primary/30"
          src="https://s3-ap-northeast-1.amazonaws.com/lazybusiness/data/hungtacheng_311/%E6%B3%A2%E8%98%AD%E5%8F%B0%E7%81%A3%E5%B7%A5%E5%95%86%E6%9C%83%E6%9C%83%E9%95%B7Agnieszka%20Sygitowicz.jpg"
          alt="波蘭台灣工商會會長 Agnieszka Sygitowicz"
          loading="lazy"
          decoding="async"
        >
        <figcaption class="text-xs opacity-80 tracking-wide">
          ▲ 波蘭台灣工商會會長Agnieszka Sygitowicz。鄭鴻達攝影
        </figcaption>
      </figure>
      <h4 class="text-xl sm:text-2xl xl:text-3xl text-primary font-black font-serif">人文素養是崛起重要養分　波蘭可讓台灣借鏡的啟示</h4>
      <p>波蘭崛起，看似有其特殊的地緣際遇，但也處處映照著台灣。國防安全研究院國防戰略與資源研究所所長蘇紫雲直言，波蘭的經濟量能其實和台灣「不相上下」，雙方去年都達到或逼近1兆美元的規模。</p>
      <p>蘇紫雲在波蘭華沙大學國際關係研究所進修期間，觀察到波蘭真正的崛起底蘊，其實不是「經濟」等硬指標，而是人文素養的「土壤」。團結工聯運動於1980年代率先追求民主化，讓波蘭人快速擺脫共產體制僵化思維，也培養出「家家戶戶都有很多藏書」的軟性「社會韌性」。</p>
      <p>吾志遠觀察，台灣今年GDP成長達10%水準，且靠著出口、AI與半導體產業等吸引全球關注，他直言「波蘭也希望能在這個領域分一杯羹」。</p>
      <p>台波產業兩者恰恰形成鏡像，這包括台灣硬體代工強，但在軟體與品牌弱，而波蘭軟體研發的底子厚，卻同樣苦於缺乏自有品牌。林啟揚也觀察，台灣這波AI轉型「都是硬體在轉」，軟體始終是配菜。</p>
      <p>從當年的「休克療法」熬到經濟雄起，波蘭花了30多年，把一頭瀕死的「歐洲野牛」重新餵壯。對於同樣貿易立國、面對威權強鄰的台灣而言，這頭野牛如何復甦，也是值得深思的啟示。</p>
      <div class="my-8 sm:my-10">
        <span class="inline-block px-3 py-2 text-primary text-sm border border-primary">本專題不授權媒體夥伴</span>
      </div>
      <hr class="border-0 border-b border-bg-light">
    </article>
    <div class="w-full max-w-2xl mx-auto mb-8 sm:px-4 2xl:px-8">
      <h5 class="inline-block text-white bg-secondary px-2.5 py-1">相關新聞</h5>
      <ul class="list-disc pl-6 lg:pl-8 mb-10 sm:mb-14">
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
        href="https://www.businesstoday.com.tw/article/category/183025/post/202607290065/"
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
