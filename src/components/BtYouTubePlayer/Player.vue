<template>
  <div class="relative aspect-video">
    <div class="absolute w-full h-full top-0 left-0" ref="playerRef" />
  </div>
</template>

<script>
import loadYoutubeApi from './loadYoutubeApi';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    playerVars: {
      type: Object,
      default: {}
    }
  },

  setup(props, { emit }) {
    
    const player = ref(null);
    const playerRef = ref(null);

    onMounted(() => {
      loadYoutubeApi().then((YT) => {
        player.value = new YT.Player(playerRef.value, {
          videoId: props.videoId,
          playerVars: props.playerVars,
          events: {
            'onReady': (e) => emit('onReady', e),
            'onStateChange': (e) => emit('onStateChange', e),
            'onPlaybackQualityChange': (e) => emit('onPlaybackQualityChange', e),
            'onPlaybackRateChange': (e) => emit('onPlaybackRateChange', e),
            'onError': (e) => emit('onError', e),
            'onApiChange': (e) => emit('onApiChange', e),
          }
        });
      }).catch((error) => {
        console.error(error)
      })
    })

    onUnmounted(() => {
      player.value.destroy();
    })
    
    return {
      player,
      playerRef,
    }
  }
  
}
</script>
