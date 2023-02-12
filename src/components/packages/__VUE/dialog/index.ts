/*
 * @Author: minxiang51574 546143220@qq.com
 * @Date: 2023-02-12 17:55:23
 * @LastEditors: minxiang51574 546143220@qq.com
 * @LastEditTime: 2023-02-12 19:34:06
 * @FilePath: \uniView\src\components\packages\__VUE\dialog\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Dialog from './index.vue';
import { h, VNode, CSSProperties } from 'vue';
import Popup from '../popup/index.vue';
import Icon from '../icon/index.vue';
import Button from '../button/index.vue';
import OverLay from '../overlay/index.vue';
import { createComponent } from '@/components/packages/utils/create';
export class DialogOptions {
  title?: string = '';
  content?: string | VNode = '';
  cancelText?: string = '';
  okText?: string = '';
  textAlign?: string = 'center';
  customClass?: string = '';
  overlayStyle?: CSSProperties = {};
  overlayClass?: string = '';
  popStyle?: CSSProperties = {};
  popClass?: string = '';
  teleport?: string | HTMLElement = 'body';
  id?: string | number = new Date().getTime();
  footerDirection?: string = 'horizontal'; //使用横纵方向 可选值 horizontal、vertical

  // function
  onUpdate?: Function = (value: boolean) => {};
  onOk?: Function = () => {};
  onCancel?: Function = () => {};
  onOpened?: Function = () => {};
  onClosed?: Function = () => {};
  beforeClose?: Function;

  visible?: boolean = true;
  noFooter?: boolean = false;
  noOkBtn?: boolean = false;
  noCancelBtn?: boolean = false;
  okBtnDisabled?: boolean = false;
  closeOnPopstate?: boolean = false;
  lockScroll?: boolean = false;
}

class DialogFunction {
  options: DialogOptions = new DialogOptions();
  instance: any;
  constructor(_options: DialogOptions) {
    let options = Object.assign(this.options, _options);
    const { unmount } = createComponent(options, {
      name: 'dialog',
      components: [Popup, Icon, Button, OverLay],
      wrapper: (elWarp: any, root: any) => {
        return {
          setup() {
            options.onUpdate = (val: boolean) => {
              if (val == false) {
                unmount();
              }
            };
            if (options?.onOpened) {
              options?.onOpened();
            }
            options.teleport = `#${root.id}`;
            return () => {
              return h(Dialog, options);
            };
          }
        };
      }
    });
  }
}

const _Dialog = function (options: DialogOptions) {
  return new DialogFunction(options);
};
_Dialog.install = (app: any) => {
  app.use(Dialog);
  app.config.globalProperties.$dialog = _Dialog;
};
export { Dialog };
export default _Dialog;
