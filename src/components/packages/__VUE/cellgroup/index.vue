<!--
 * @Author: minxiang51574 546143220@qq.com
 * @Date: 2023-02-09 22:45:38
 * @LastEditors: minxiang51574 546143220@qq.com
 * @LastEditTime: 2023-02-12 17:53:20
 * @FilePath: \uniView\src\components\packages\__VUE\cellgroup\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view :class="classes">
    <slot v-if="$slots.title" name="title"></slot>
    <view v-else-if="title" class="nut-cell-group__title">{{ title }}</view>
    <slot v-if="$slots.desc" name="desc"></slot>
    <view v-else-if="desc" class="nut-cell-group__desc">{{ desc }}</view>
    <view class="nut-cell-group__warp">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/components/packages/utils/create';
const { componentName, create } = createComponent('cell-group');
export default create({
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' }
  },
  setup() {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    return {
      classes
    };
  }
});
</script>
<style lang="scss">
@import './index.scss'
</style>