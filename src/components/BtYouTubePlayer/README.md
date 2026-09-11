
## props

| props name  | type        | required    | default     | description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| videoId     | string      | true        |             | 影片id      |
| playerVars  | object      |             | {}          | [播放參數設定](https://developers.google.com/youtube/player_parameters#Parameters) |


## event

| event name  |
| ----------- |
| onReady     |
| onStateChange |
| onPlaybackQualityChange |
| onPlaybackRateChange |
| onError     |
| onApiChange |

## methods
透過ref 訪問player實體, 調用[原生methods](https://developers.google.com/youtube/iframe_api_reference#Functions)

### example
```sh
<template>
  <BtYouTubePlayer
    videoId="YOUR_VIDEO_ID"
    ref="videoRef"
    :playerVars="{ disablekb: 1 }"
    @onReady="ready"
    @onStateChange="stateChange"
  />
</template>

<script setup>
import BtYouTubePlayer from '../BtYouTubePlayer/Player.vue';

const videoRef = ref(null);
const ready = (e) => {
  console.log('ready')
  videoRef.value.player.playVideo()
}

const stateChange = (e) => {
  console.log('stateChange', e)
}

</script>
```
