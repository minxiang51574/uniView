<template>
  <view class="nut-pagination">
    <view
      :class="['nut-pagination-prev', mode == 'multi' ? '' : 'simple-border', modelValue == 1 ? 'disabled' : '']"
      @click="select(modelValue - 1, true)"
    >
      <slot name="prev-text">
        {{ prevText || translate('prev') }}
      </slot>
    </view>
    <view class="nut-pagination-contain" v-if="mode == 'multi'">
      <view
        v-for="(item, index) of pages"
        :key="index + 'pagination'"
        :class="['nut-pagination-item', item.active ? 'active' : '']"
        @click="select(item.number, true)"
      >
        <slot name="page" :item="item">
          {{ item.text }}
        </slot>
      </view>
    </view>
    <view class="nut-pagination-contain" v-if="mode == 'simple'">
      <view class="nut-pagination-simple">{{ modelValue }}/{{ countRef }}</view>
    </view>
    <view
      :class="['nut-pagination-next', modelValue >= countRef ? 'disabled' : '']"
      @click="select(modelValue + 1, true)"
    >
      <slot name="next-text">
        {{ nextText || translate('next') }}
      </slot>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, watchEffect, computed } from 'vue';
import { createComponent } from '@/components/packages/utils/create';
const { create, translate } = createComponent('pagination');

export default create({
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: 'multi'
    },
    prevText: {
      type: String,
      default: ''
    },
    nextText: {
      type: String,
      default: ''
    },
    pageCount: {
      type: [String, Number],
      default: ''
    },
    totalItems: {
      type: [String, Number],
      default: '0'
    },
    itemsPerPage: {
      type: [String, Number],
      default: '10'
    },
    showPageSize: {
      type: [String, Number],
      default: '5'
    },
    forceEllipses: {
      type: Boolean,
      default: false
    }
  },
  components: {},

  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    const { modelValue, mode, showPageSize, forceEllipses } = toRefs(props);

    //?????????????????????
    const countRef = computed(() => {
      const { pageCount, totalItems, itemsPerPage } = toRefs(props);
      const num = +pageCount.value || Math.ceil(+totalItems.value / +itemsPerPage.value);
      return Math.max(1, num);
    });

    //????????????page
    const select = (curPage: number, isSelect: boolean) => {
      if (curPage > countRef.value || curPage < 1) return;
      if (curPage != modelValue.value) emit('update:modelValue', curPage);
      if (isSelect) emit('change', curPage);
    };
    //set page ??????
    const setPage = (number: number, text: string | number, active = false) => {
      return { number, text, active };
    };
    //??????pages?????????????????????
    const pages = computed(() => {
      if (mode.value == 'simple') return;
      let items = [];
      const pageCount = countRef.value; //??????????????????
      const pageSize = +showPageSize.value; //?????????????????????
      let startPage = 1;
      let endPage = pageCount;
      const partialShow = pageCount > pageSize;
      if (partialShow) {
        //?????????page????????????page??????
        startPage = Math.max(modelValue.value - Math.floor(pageSize / 2), 1);
        endPage = startPage + +pageSize - 1;
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - +pageSize + 1;
        }
      }
      //??????????????????
      for (var i = startPage; i <= endPage; i++) {
        const page = setPage(i, i, modelValue.value == i);
        items.push(page);
      }
      //?????????????????????
      if (partialShow && pageSize > 0 && forceEllipses.value) {
        if (startPage > 1) {
          const prevPage = setPage(startPage - 1, '...');
          items.unshift(prevPage);
        }
        if (endPage < pageCount) {
          const nextPage = setPage(endPage + 1, '...');
          items.push(nextPage);
        }
      }

      return items;
    });

    //???????????????page??????
    watchEffect(() => {
      select(modelValue.value, false);
    });

    return {
      modelValue,
      select,
      countRef,
      mode,
      pages,
      forceEllipses,
      translate
    };
  }
});
</script>
