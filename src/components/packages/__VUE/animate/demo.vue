<template>
  <div class="demo">
    <h2>{{ translate('click') }}</h2>

    <div class="ani-demo-div">
      <nut-animate type="slide-right" action="click">
        <nut-button type="primary">{{ translate('FRTL') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="slide-left" action="click">
        <nut-button type="primary">{{ translate('FLTR') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="slide-top" action="click">
        <nut-button type="primary">{{ translate('FTTB') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="slide-bottom" action="click">
        <nut-button type="primary">{{ translate('FBTT') }}</nut-button>
      </nut-animate>
    </div>

    <h2>{{ translate('basic') }}</h2>

    <div class="ani-demo-div">
      <nut-animate type="shake" :loop="true">
        <nut-button type="primary">{{ translate('shake') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="ripple" :loop="true">
        <nut-button type="primary">{{ translate('ripple') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="breath" :loop="true">
        <nut-button type="primary">{{ translate('breath') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="twinkle" :loop="true">
        <nut-button type="primary">{{ translate('twinkle') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="flicker" :loop="true">
        <nut-button type="primary">{{ translate('flicker') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="jump" :loop="true">
        <nut-button type="primary">{{ translate('jump') }}</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="float" :loop="true">
        <nut-button type="primary">{{ translate('float') }}</nut-button>
      </nut-animate>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/components/packages/utils/create';

const { createDemo, translate } = createComponent('animate');
import { useTranslate } from '@/components/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '????????????',
      click: '????????????',
      FRTL: '??????????????????',
      FLTR: '??????????????????',
      FTTB: '??????????????????',
      FBTT: '??????????????????',
      shake: 'shake-??????',
      ripple: 'ripple-??????',
      breath: 'breath-?????????',
      twinkle: 'twinkle-??????',
      flicker: 'flicker-??????',
      jump: 'jump-??????',
      float: 'float-??????'
    },
    'en-US': {
      basic: 'Loop animation',
      FRTL: 'From right to left',
      FLTR: 'From left to right',
      FTTB: 'From top to bottom',
      FBTT: 'From bottom to top',
      shake: 'shake-??????',
      ripple: 'ripple-ripple',
      breath: 'breath-breath',
      twinkle: 'twinkle-twinkle',
      flicker: 'flicker-flicker',
      jump: 'jump-jump',
      float: 'float-float'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    return { translate };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}

.ani-demo-div {
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
}

.ani-demo-div2 {
  margin-top: 60px;
}
</style>
