<template>
  <div class="text-left">
    <div :class="setWrapperClass" @click="handleBackdropClick">
      <nav :class="setNavClass">
        <slot name="before" :closeNav="handleCloseNav" />
        <ul class="lg:flex">
          <Navlist
            v-for="(list, index) in navList"
            :key="index"
            :node="list"
            @onItemClick="handleCloseNav"
            @onTopLevelOpen="triggerClick"
          />
        </ul>
        <slot name="after" :closeNav="handleCloseNav" />
      </nav>
    </div>

    <button class="space-y-2 lg:hidden" @click="showNav = true">
      <span class="block w-8 h-0.5 bg-gray-600"></span>
      <span class="block w-8 h-0.5 bg-gray-600"></span>
      <span class="block w-5 h-0.5 bg-gray-600"></span>
    </button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import Navlist from './Navlist.vue';
import useClientSize from '../../composables/useClientSize';

export default {
  props: {
    navList: {
      type: Array,
      default: []
    },
    closeByBackdrop: {
      type: Boolean,
      default: true
    },
    collapse: {
      type: Boolean,
      default: true
    }
  },

  components: {
    Navlist,
  },

  setup(props, { slots }) {
    const { isMobile } = useClientSize(1024);

    const showNav = ref(false);

    const setWrapperClass = computed(() => {
      if (isMobile.value) {
        let staticClass = `fixed flex justify-end w-full h-full left-0 top-0 z-10 bg-black/75 overflow-hidden`;
        return staticClass += ` ${showNav.value ? 'translate-x-0' : 'translate-x-full'}`;
      }

      return ``;
    })

    const setNavClass = computed(() => {
      if (isMobile.value) {
        let staticClass = `bg-white max-w-3/4 min-w-36 h-full transform duration-500 overflow-y-auto${slots.before ? '' : ' pt-4'}`;
        return staticClass += ` ${showNav.value ? 'translate-x-0' : 'translate-x-full'}`;
      }

      return `flex items-center`;
    })

    const handleBackdropClick = (e) => {
      if (props.closeByBackdrop && e.currentTarget === e.target) {
        handleCloseNav();
      }
    }

    const handleCloseNav = () => {
      showNav.value = false;
    }

    const triggerClick = () => {
      if (props.collapse) document.body.click();
    }

    return {
      isMobile,
      showNav,
      setWrapperClass,
      setNavClass,
      handleBackdropClick,
      handleCloseNav,
      triggerClick,
    }
  }
}
</script>
