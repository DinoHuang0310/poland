<template>
  <li
    v-if="node.navList && node.navList.length"
    class="relative"
    :class="node.className"
    @click="toggleChild"
  >
    <!-- has childen node -->
    <a :class="setListItemClass" href="#">
      {{ node.title }}
      <span
        class="inline-block w-0 h-0 border-solid border-x-4 border-t-8 border-x-transparent border-t-black"
        :class="showChild && 'rotate-180'"
      />
    </a>

    <ul
      v-if="showChild"
      class="bg-gray-100 lg:min-w-full lg:whitespace-nowrap z-10"
      :class="treeLevel === 1 && 'lg:absolute'"
    >
      <Navlist
        v-for="(list, index) in node.navList"
        :key="index"
        :node="list"
        :treeLevel="treeLevel + 1"
        @onItemClick="$emit('onItemClick')"
      />
    </ul>
  </li>
  
  <li v-else :class="node.className">
    <a :class="setListItemClass" :href="node.url" @click="handleClick">
      {{ node.title }}
    </a>
  </li>
  
</template>

<script>
import { computed, ref, toRefs, onBeforeUnmount } from 'vue';
import useScrollTo from '../../composables/useScrollTo';

export default {
  props: {
    node: {
      type: Object,
    },
    treeLevel: {
      type: Number,
      default: 1
    },
  },

  setup(props, { emit }) {
    const showChild = ref(false);

    const setListItemClass = computed(() => {
      const treeStyle = ['pl-4', 'pl-6', 'pl-8 lg:pl-5', 'pl-10 lg:pl-7', 'pl-12 lg:pl-9'];

      let staticClass = `block py-2 px-4 border-b lg:pl-3 lg:pr-3 lg:border-b-0`;
      return staticClass += ` ${treeStyle[props.treeLevel - 1]}`;
    })

    const closeChildenNode = () => {
      document.removeEventListener('click', closeChildenNode);
      showChild.value = false;
    }

    const toggleChild = (e) => {
      e.preventDefault();
      if (showChild.value) {
        closeChildenNode();

      } else {
        showChild.value = true;
        // 根節點開啟時, 手動觸發click event關閉其他siblings
        if (props.treeLevel === 1) emit('onTopLevelOpen');

        document.addEventListener('click', closeChildenNode);
      }
      e.stopPropagation();
    }

    const handleClick = (e) => {
      // 直接解構可能失去響應性, 如需要可改toRefs
      const { url, isAnchor } = props.node;
      // const { isAnchor, url } = toRefs(props.node);

      if (isAnchor) {
        e.preventDefault();
        try {
          const targetId = url.split('#')[1];
          useScrollTo(document.getElementById(targetId));
        } catch (error) {
          console.warn(error)
        }
      } else {
        window.open(url, '_blank');
      }

      emit('onItemClick');
    }

    onBeforeUnmount(() => {
      document.removeEventListener('click', closeChildenNode);
    })

    return {
      showChild,
      setListItemClass,
      toggleChild,
      handleClick,
    }
  }

}
</script>
