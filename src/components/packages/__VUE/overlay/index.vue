<!--
 * @Author: minxiang51574 546143220@qq.com
 * @Date: 2023-02-09 22:45:39
 * @LastEditors: minxiang51574 546143220@qq.com
 * @LastEditTime: 2023-02-12 18:32:28
 * @FilePath: \uniView\src\components\packages\__VUE\overlay\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Transition name="overlay-fade">
    <view :class="classes" @click.stop="onClick" :style="style" v-show="visible">
      <slot></slot>
    </view>
  </Transition>
</template>
<script lang="ts">
import { CSSProperties, PropType, computed, watchEffect, ComputedRef } from 'vue';
import { createComponent } from '@/components/packages/utils/create';
import { useLockScroll } from '@/components/packages/utils/useLockScroll';
const { componentName, create } = createComponent('overlay');

export default create({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 2000
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    overlayClass: {
      type: String,
      default: ''
    },
    overlayStyle: {
      type: Object as PropType<CSSProperties>
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  emits: ['click', 'update:visible'],

  setup(props, { emit }) {
    const [lock, unlock] = useLockScroll(() => props.lockScroll);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });

    const style: ComputedRef = computed(() => {
      return {
        transitionDuration: `${props.duration}s`,
        zIndex: props.zIndex,
        ...props.overlayStyle
      };
    });

    watchEffect(() => {
      props.visible ? lock() : unlock();
    });

    const onClick = (e: MouseEvent) => {
      if (props.closeOnClickOverlay) {
        emit('update:visible', false);
        emit('click', e);
      }
    };

    return { classes, style, onClick };
  }
});
</script>
<style lang="scss">
@import './index.scss' 
</style>