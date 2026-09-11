import { ref, watch } from 'vue';

const waiting = ref(false);

export default () => {
  return new Promise((resolve, reject) => {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      // 已取得youtube api, 直接回傳
      resolve(window.YT);

    } else {
      if (waiting.value) {
        // 尚未取得youtube api, 但已發送請求, 等待請求完成
        const watcher = watch(waiting, () => {
          resolve(window.YT);
          watcher();
        })
      } else {
        // 尚未取得youtube api, 發送請求
        waiting.value = true;

        try {
          const tag = document.createElement('script');
          const protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

          tag.src = `${protocol}//www.youtube.com/iframe_api`;
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          tag.onload = function () {
            window.onYouTubeIframeAPIReady = () => {
              // 請求youtube api完成
              waiting.value = false;
              resolve(window.YT);
            };
          }
        } catch (error) {
          reject(error);
        }
        
      }
      
    }
  })
}