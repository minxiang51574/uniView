<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell :title="translate('title')" :desc="translate('desc')"></nut-cell>
    <nut-cell :title="translate('title')" :sub-title="translate('title1')" :desc="translate('desc')"></nut-cell>
    <nut-cell :title="translate('title3')" @click="testClick"></nut-cell>
    <nut-cell :title="translate('title4')" round-radius="0"></nut-cell>

    <h2>{{ translate('title9') }}</h2>
    <nut-cell size="large" :title="translate('title')" :desc="translate('desc')"></nut-cell>
    <nut-cell
      size="large"
      :title="translate('title')"
      :sub-title="translate('title1')"
      :desc="translate('desc')"
    ></nut-cell>

    <h2>{{ translate('title2') }}</h2>

    <nut-cell>
      <div>{{ translate('content') }}</div>
    </nut-cell>

    <h2>{{ translate('title8') }}</h2>

    <nut-cell :desc="translate('desc')">
      <template v-slot:title>
        <span>Title <b style="color: red">1</b></span>
      </template>
    </nut-cell>

    <nut-cell-group :title="translate('title5')" :desc="translate('desc1')">
      <nut-cell :title="translate('link')" is-link></nut-cell>
      <nut-cell :title="translate('urlJump')" desc="https://jd.com" is-link url="https://jd.com"></nut-cell>
      <nut-cell :title="translate('routerJump')" to="/"></nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('customRight')">
      <nut-cell title="Switch">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" />
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('customLeftIcon')">
      <nut-cell :title="translate('image')">
        <template v-slot:icon>
          <img
            class="nut-icon"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </template>
      </nut-cell>
      <nut-cell :title="translate('image')" :sub-title="translate('title1')">
        <template v-slot:icon>
          <div style="height: 40px; width: 40px; border-radius: 50%; background: #e5e5e5"></div>
        </template>
      </nut-cell>
    </nut-cell-group>

    <h2>{{ translate('displayIcon') }}</h2>
    <nut-cell :title="translate('name')" icon="my" :desc="translate('desc')" isLink> </nut-cell>
    <nut-cell :title="translate('name')" icon="my" :desc="translate('desc')" isLink size="large"> </nut-cell>
    <h2>{{ translate('title6') }}</h2>
    <nut-cell desc-text-align="left" :desc="translate('desc')"></nut-cell>

    <h2>{{ translate('title7') }}</h2>
    <nut-cell center :title="translate('title')" :sub-title="translate('title1')" :desc="translate('desc')"></nut-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/components/packages/utils/create';
const { createDemo, translate } = createComponent('cell');
import { useTranslate } from '@/components/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '????????????',
      desc: '????????????',
      desc1: '?????? nut-cell-group ?????? title desc slots',
      title: '????????????',
      title1: '???????????????',
      title2: '??????????????????(slot)',
      title3: '????????????',
      title4: '???????????? 0',
      title5: '?????? | ????????????',
      title6: '????????? desc ???????????? desc-text-align ??????????????????',
      title7: '????????????',
      title8: '??????????????????(slot title)',
      title9: '???????????? large',
      link: '??????',
      urlJump: 'URL ??????',
      routerJump: '???????????? ???/??? ',
      name: '??????',
      image: '??????',
      content: '???????????????',
      customRight: '???????????????????????????',
      customLeftIcon: '??????????????? Icon ??????',
      displayIcon: '????????????'
    },
    'en-US': {
      basic: 'Basic Usage',
      desc: 'Description',
      desc1: 'Usage nut-cell-group support title desc slots',
      title: 'Title',
      title1: 'Subtitle Description',
      title2: 'Use Slots',
      title3: 'Click Test',
      title4: 'Round Radius 0',
      title5: 'Link | CellGroup Usage',
      title6: 'Only display desc , you can adjust the content position through desc-text-align',
      title7: 'Vertical Center',
      title8: 'Use Slots title',
      title9: 'Size setting large',
      link: 'Link',
      urlJump: 'URL Jump',
      routerJump: 'Router Jump ???/??? ',
      name: 'Name',
      image: 'Image',
      content: 'Content',
      customRight: 'Customize the right arrow area',
      customLeftIcon: 'Customize the left Icon area',
      displayIcon: 'Display Icon'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const testClick = (event: Event) => {
      console.log('Click Test');
    };
    const switchChecked = ref(true);
    return { testClick, switchChecked, translate };
  }
});
</script>

<style lang="scss" scoped></style>
