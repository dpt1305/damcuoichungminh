import { App } from 'antd';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { NotificationInstance } from 'antd/es/notification/interface';

let modal: Omit<ModalStaticFunctions, 'warn'>;
let notification: NotificationInstance;

function AntdMessageWrapper() {
  const fn = App.useApp();
  modal = fn.modal;
  notification = fn.notification;
  return null;
}

export default AntdMessageWrapper;
export { modal, notification };
