<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>

    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo1.visible = true"
          :value="demo1.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo1.visible"
          v-model="demo1.value"
          @change="events.change"
          @path-change="events.pathChange"
          :options="demo1.options"
          close-icon="heart"
          close-icon-position="top-left"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title1') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo2.visible = true"
          :value="demo2.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo2.visible"
          v-model="demo2.value"
          text-key="text"
          @change="events.change"
          @path-change="events.pathChange"
          value-key="text"
          children-key="items"
          :options="demo2.options"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title2') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo3.visible = true"
          :value="demo3.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo3.visible"
          v-model="demo3.value"
          @change="events.change"
          @path-change="events.pathChange"
          lazy
          :lazy-load="demo3.lazyLoad"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title3') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo4.visible = true"
          :value="demo4.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo4.visible"
          v-model="demo4.value"
          @change="events.change"
          @path-change="events.pathChange"
          :options="demo4.options"
          lazy
          :lazy-load="demo4.lazyLoad"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>

    <h2>{{ translate('title4') }}</h2>
    <nut-form>
      <nut-form-item :label="translate('addressTip')">
        <input
          class="nut-input-text"
          @click="demo5.visible = true"
          :value="demo5.value"
          readonly
          :placeholder="translate('addressTip1')"
          type="text"
        />
        <nut-cascader
          :title="translate('addressTip')"
          v-model:visible="demo5.visible"
          v-model="demo5.value"
          @change="events.change"
          @path-change="events.pathChange"
          :options="demo5.options"
          :convertConfig="demo5.convertConfig"
        ></nut-cascader>
      </nut-form-item>
    </nut-form>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, watch } from 'vue';
import { createComponent } from '@/components/packages/utils/create';
const { createDemo, translate } = createComponent('cascader');
import { useTranslate } from '@/components/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '????????????',
      title1: '?????????????????????',
      title2: '????????????',
      title3: '????????????????????????',
      title4: '????????????',
      addressTip: '????????????',
      addressTip1: '???????????????'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Custom attribute name',
      title2: 'Async loading',
      title3: 'Async loading of partial data',
      title4: 'Automatic data conversion',
      addressTip: 'Select address',
      addressTip1: 'Please select an address'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    // ????????????
    const demo1 = reactive({
      visible: false,
      // value: ['??????'],
      value: [],
      options: [
        {
          value: '??????',
          text: '??????',
          children: [
            {
              value: '??????',
              text: '??????',
              disabled: true,
              children: [
                { value: '?????????', text: '?????????' },
                { value: '?????????', text: '?????????' }
              ]
            },
            {
              value: '??????',
              text: '??????',
              children: [
                { value: '?????????', text: '?????????' },
                { value: '?????????', text: '?????????' }
              ]
            }
          ]
        },
        {
          value: '??????',
          text: '??????',
          disabled: true
        },
        {
          value: '??????',
          text: '??????',
          children: [
            {
              value: '??????',
              text: '??????',
              children: [
                { value: '?????????', text: '?????????' },
                { value: '?????????', text: '?????????' }
              ]
            }
          ]
        }
      ]
    });

    // ?????????????????????
    const demo2 = reactive({
      visible: false,
      value: ['??????', '??????', '?????????'],
      options: [
        {
          text: '??????',
          items: [
            {
              text: '??????',
              disabled: true,
              items: [{ text: '?????????' }, { text: '?????????' }]
            },
            {
              text: '??????',
              items: [{ text: '?????????' }, { text: '?????????' }]
            }
          ]
        },
        {
          text: '??????',
          items: [
            {
              text: '??????',
              items: [{ text: '?????????' }, { text: '?????????' }]
            }
          ]
        }
      ]
    });

    // ????????????
    const demo3 = reactive({
      visible: false,
      value: ['A0', 'A12', 'A23', 'A32'],
      lazyLoad(node: any, resolve: (children: any) => void) {
        setTimeout(() => {
          // root?????????????????????
          if (node.root) {
            resolve([
              { value: 'A0', text: 'A0' },
              { value: 'B0', text: 'B0' },
              { value: 'C0', text: 'C0' }
            ]);
          } else {
            const { value, level } = node;
            const text = value.substring(0, 1);
            const value1 = `${text}${level + 1}1`;
            const value2 = `${text}${level + 1}2`;
            const value3 = `${text}${level + 1}3`;
            resolve([
              { value: value1, text: value1, leaf: level >= 6 },
              { value: value2, text: value2, leaf: level >= 6 },
              { value: value3, text: value3, leaf: level >= 6 }
            ]);
          }
        }, 2000);
      }
    });

    // ????????????????????????
    const demo4 = reactive({
      visible: false,
      value: [],
      options: [
        { value: 'A0', text: 'A0' },
        {
          value: 'B0',
          text: 'B0',
          children: [
            { value: 'B11', text: 'B11', leaf: true },
            { value: 'B12', text: 'B12' }
          ]
        },
        { value: 'C0', text: 'C0' }
      ],
      lazyLoad(node: any, resolve: (children: any) => void) {
        setTimeout(() => {
          const { value, level } = node;
          const text = value.substring(0, 1);
          const value1 = `${text}${level + 1}1`;
          const value2 = `${text}${level + 1}2`;
          resolve([
            { value: value1, text: value1, leaf: level >= 2 },
            { value: value2, text: value2, leaf: level >= 1 }
          ]);
        }, 500);
      }
    });

    const demo5 = reactive({
      visible: false,
      value: ['?????????', '?????????'],
      convertConfig: {
        topId: null,
        idKey: 'id',
        pidKey: 'pid',
        sortKey: ''
      },
      options: [
        { value: '??????', text: '??????', id: 1, pid: null },
        { value: '?????????', text: '?????????', id: 11, pid: 1 },
        { value: '??????', text: '??????', id: 111, pid: 11 },
        { value: '?????????', text: '?????????', id: 2, pid: null },
        { value: '?????????', text: '?????????', id: 21, pid: 2 }
      ]
    });

    // onMounted(() => {
    //   setTimeout(() => {
    //     demo1.value = ['??????', '??????', '?????????'];
    //     setTimeout(() => {
    //       demo1.value = ['??????', '??????', '?????????'];
    //     }, 2000);
    //   }, 2000);
    // });

    const events = {
      change(...args: any) {
        console.log('change', ...args);
      },
      pathChange(...args: any) {
        console.log('pathChange', ...args);
      }
    };

    return {
      demo1,
      demo2,
      demo3,
      demo4,
      demo5,
      events,
      translate
    };
  }
});
</script>
