<!--
 * @Author: minxiang51574 546143220@qq.com
 * @Date: 2023-02-09 22:45:39
 * @LastEditors: minxiang51574 546143220@qq.com
 * @LastEditTime: 2023-02-12 18:33:31
 * @FilePath: \uniView\src\components\packages\__VUE\popup\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Teleport :to="teleport" :disabled="!teleportDisable">
    <nut-overlay
      v-if="overlay"
      :visible="visible"
      :close-on-click-overlay="closeOnClickOverlay"
      :z-index="zIndex"
      :lock-scroll="lockScroll"
      :duration="duration"
      :overlay-class="overlayClass"
      :overlay-style="overlayStyle"
      @click="onClickOverlay"
      v-bind="$attrs"
    />
    <Transition :name="transitionName" @after-enter="onOpened" @after-leave="onClosed">
      <view v-show="visible" :class="classes" :style="popStyle" @click="onClick">
        <slot v-if="showSlot"></slot>
        <view
          v-if="closed"
          @click="onClickCloseIcon"
          class="nut-popup__close-icon"
          :class="'nut-popup__close-icon--' + closeIconPosition"
        >
          <nut-icon v-bind="$attrs" :name="closeIcon" size="12px" />
        </view>
      </view>
    </Transition>
  </Teleport>
</template>
<script lang="ts">
import { createComponent } from '@/components/packages/utils/create';
import { component } from './common';
const { componentName, create } = createComponent('popup');
export default create(component(componentName));
</script>
<style lang="scss">
@import './index.scss' 
</style>