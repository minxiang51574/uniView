<template>
  <div class="demo">
    <h2>{{ translate('title') }}</h2>
    <div class="demo-button-row">
      <nut-button type="primary">{{ translate('primary') }}</nut-button>
      <nut-button type="info">{{ translate('info') }}</nut-button>
      <nut-button type="default">{{ translate('default') }}</nut-button>
    </div>
    <div class="demo-button-row2">
      <nut-button type="danger">{{ translate('danger') }}</nut-button>
      <nut-button type="warning">{{ translate('warning') }}</nut-button>
      <nut-button type="success">{{ translate('success') }}</nut-button>
    </div>
    <h2>{{ translate('title1') }}</h2>
    <div class="demo-button-row2">
      <nut-button plain type="primary">{{ translate('plain') }}</nut-button>
      <nut-button plain type="info">{{ translate('plain') }}</nut-button>
    </div>

    <h2>{{ translate('title2') }}</h2>
    <div class="demo-button-row2">
      <nut-button disabled type="primary">{{ translate('disabled') }}</nut-button>
      <nut-button plain disabled type="info">{{ translate('disabled') }}</nut-button>
      <nut-button plain disabled type="primary">{{ translate('disabled') }}</nut-button>
    </div>
    <h2>{{ translate('title3') }}</h2>
    <div class="demo-button-row2">
      <nut-button shape="square" type="primary"> {{ translate('square') }}</nut-button>
      <nut-button type="info"> {{ translate('round') }}</nut-button>
    </div>
    <h2>{{ translate('title4') }}</h2>
    <div class="demo-button-row2">
      <nut-button loading type="info"></nut-button>
      <nut-button loading type="warning">{{ translate('loading') }}</nut-button>
      <nut-button :loading="isLoading" type="success" @click="changeLoading">{{
        translate('changeLoading')
      }}</nut-button>
    </div>
    <h2>{{ translate('title5') }}</h2>
    <div class="demo-button-row2">
      <nut-button shape="square" plain type="primary" icon="star-fill"></nut-button>
      <nut-button shape="square" type="primary" icon="star">{{ translate('star') }}</nut-button>
    </div>

    <h2>{{ translate('title7') }}</h2>
    <div class="demo-button-row2">
      <nut-button size="large" type="primary" style="margin-bottom: 10px">{{ translate('large') }}</nut-button>
      <nut-button type="primary">{{ translate('normal') }}</nut-button>
      <nut-button size="small" type="primary">{{ translate('small') }}</nut-button>
      <nut-button size="mini" type="primary">{{ translate('mini') }}</nut-button>
    </div>
    <h2>{{ translate('title8') }}</h2>
    <div class="demo-button-row2">
      <nut-button block type="primary">{{ translate('block') }}</nut-button>
    </div>
    <h2>{{ translate('title9') }}</h2>
    <div class="demo-button-row2">
      <nut-button color="#7232dd">{{ translate('pure') }}</nut-button>
      <nut-button color="#7232dd" plain>{{ translate('pure') }}</nut-button>
      <nut-button color="linear-gradient(to right, #ff6034, #ee0a24)"> {{ translate('gradient') }} </nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/components/packages/utils/create';
const { createDemo, translate } = createComponent('button');
import { useTranslate } from '@/components/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '????????????',
      title1: '????????????',
      title2: '????????????',
      title3: '????????????',
      title4: '????????????',
      title5: '????????????',
      title6: '???????????????',
      title7: '????????????',
      title8: '????????????',
      title9: '???????????????',
      primary: '????????????',
      info: '????????????',
      default: '????????????',
      danger: '????????????',
      warning: '????????????',
      success: '????????????',
      plain: '????????????',
      disabled: '????????????',
      square: '????????????',
      round: '????????????',
      loading: '?????????...',
      changeLoading: 'Click me!',
      star: '??????',
      large: '????????????',
      normal: '????????????',
      small: '????????????',
      mini: '????????????',
      block: '????????????',
      pure: '????????????',
      gradient: '???????????????'
    },
    'en-US': {
      title: 'Type',
      title1: 'Plain',
      title2: 'Disabled',
      title3: 'Shape',
      title4: 'Loading',
      title5: 'Icon',
      title6: 'Custom Icon',
      title7: 'Size',
      title8: 'Block',
      title9: 'Custom Color',
      primary: 'Primary',
      info: 'Info',
      default: 'Default',
      danger: 'Danger',
      warning: 'Warning',
      success: 'Success',
      plain: 'Plain',
      disabled: 'Disabled',
      square: 'Square',
      round: 'Round',
      loading: 'Loading...',
      changeLoading: 'Click me!',
      star: 'Star',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      block: 'Block Element',
      pure: 'Pure',
      gradient: 'Gradient'
    }
  });

export default createDemo({
  props: {},
  setup(props) {
    initTranslate();
    let isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    };

    return {
      isLoading,
      changeLoading,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}
.demo-button-row2 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.nut-button {
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
