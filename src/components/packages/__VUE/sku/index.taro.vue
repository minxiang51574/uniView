<template>
  <nut-popup
    position="bottom"
    closeable
    round
    v-model:visible="showPopup"
    @click-close-icon="closePopup('icon')"
    @click-overlay="closePopup('overlay')"
    @close="closePopup('close')"
    style="height: 75%"
  >
    <view class="nut-sku">
      <slot name="sku-header"></slot>
      <sku-header :goods="goods" v-if="!getSlots('sku-header')">
        <template #sku-header-price v-if="getSlots('sku-header-price')">
          <slot name="sku-header-price"></slot>
        </template>

        <template #sku-header-extra v-if="getSlots('sku-header-extra')">
          <slot name="sku-header-extra"></slot>
        </template>
      </sku-header>

      <view class="nut-sku-content">
        <slot name="sku-select-top"></slot>

        <slot name="sku-select"></slot>
        <SkuSelect v-if="!getSlots('sku-select')" :sku="sku" @selectSku="selectSku"></SkuSelect>

        <slot name="sku-stepper"></slot>
        <sku-stepper
          v-if="!getSlots('sku-stepper')"
          :goods="goods"
          :stepperTitle="stepperTitle || translate('buyNumber')"
          :stepperMax="stepperMax"
          :stepperMin="stepperMin"
          :purchased="purchased"
          :showSaleLimit="showSaleLimit"
          :showSaleLowest="showSaleLowest"
          :saleLowestText="saleLowestText"
          :saleLimitText="saleLimitText"
          :purchasedText="purchasedText"
          @add="add"
          @reduce="reduce"
          @changeStepper="changeStepper"
          @overLimit="stepperOverLimit"
        ></sku-stepper>

        <slot name="sku-stepper-bottom"></slot>
      </view>

      <slot name="sku-operate"></slot>
      <sku-operate
        v-if="!getSlots('sku-operate')"
        :btnOptions="btnOptions"
        :buyText="buyText || translate('buyNow')"
        :addCartText="addCartText || translate('addToCart')"
        :confirmText="confirmText || translate('confirm')"
        @clickBtnOperate="clickBtnOperate"
      ></sku-operate>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import SkuHeader from './components/SkuHeaderTaro.vue';
import SkuSelect from './components/SkuSelect.vue';
import SkuStepper from './components/SkuStepper.vue';
import SkuOperate from './components/SkuOperate.vue';
import { createComponent } from '@/components/packages/utils/create';
const { componentName, create, translate } = createComponent('sku');

export default create({
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    sku: {
      type: Array,
      default: []
    },

    goods: {
      type: Object,
      default: {}
    },

    // ????????????????????????
    showSaleLimit: {
      type: Boolean,
      default: false
    },

    // stepper ?????????
    stepperMax: {
      type: [Number, String],
      default: 99999
    },

    // stepper ?????????
    stepperMin: {
      type: [Number, String],
      default: 1
    },
    // ????????????
    purchased: {
      type: [Number, String],
      default: 0
    },

    // ????????????????????????
    showSaleLowest: {
      type: Boolean,
      default: false
    },

    // ??????????????????  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ['confirm']
    },

    // ????????????????????????
    stepperTitle: {
      type: String,
      default: ''
    },

    // ??????????????????
    saleLowestText: {
      type: [Function, Boolean],
      default: false
    },

    // ??????????????????
    saleLimitText: {
      type: [Function, Boolean],
      default: false
    },

    // ??????????????????
    purchasedText: {
      type: [Function, Boolean],
      default: false
    },

    // ??????????????????
    buyText: {
      type: String,
      default: ''
    },

    // ?????????????????????
    addCartText: {
      type: String,
      default: ''
    },

    // ????????????
    confirmText: {
      type: String,
      default: ''
    }
  },
  emits: [
    'update:visible',
    'selectSku',
    'changeStepper',
    'clickBtnOperate',
    'clickCloseIcon',
    'clickOverlay',
    'close',
    'reduce',
    'add',
    'overLimit'
  ],

  components: {
    SkuHeader,
    SkuSelect,
    SkuStepper,
    SkuOperate
  },

  setup(props: any, { emit, slots }) {
    const showPopup = ref(props.visible);

    const goodsCount = ref(props.stepperMin);

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );

    watch(
      () => showPopup.value,
      (value) => {
        if (value == false) {
          close();
        }
      }
    );

    const getSlots = (name: string) => slots[name];

    // ???????????? sku ??????
    const selectSku = (skus: any) => {
      emit('selectSku', skus);
    };

    // ?????????????????????
    const changeStepper = (value: number) => {
      goodsCount.value = value;

      emit('changeStepper', value);
    };

    // ?????????????????? add ???  reduce ???
    const add = (value: number) => {
      emit('add', value);
    };

    const reduce = (value: number) => {
      emit('reduce', value);
    };

    // ???????????????
    const stepperOverLimit = (count: any) => {
      emit('overLimit', count);
    };

    // ?????? button ??????
    const clickBtnOperate = (btn: string) => {
      emit('clickBtnOperate', {
        type: btn,
        value: goodsCount.value
      });
    };

    // ??????
    const closePopup = (type: string) => {
      if (type == 'icon') {
        emit('click-close-icon');
      }

      if (type == 'overlay') {
        emit('click-overlay');
      }

      if (type == 'close') {
        emit('close');
      }

      showPopup.value = false;
    };

    const close = () => {
      emit('update:visible', false);
    };

    return {
      showPopup,
      closePopup,
      selectSku,
      changeStepper,
      stepperOverLimit,
      clickBtnOperate,
      add,
      reduce,
      getSlots,
      translate
    };
  }
});
</script>
