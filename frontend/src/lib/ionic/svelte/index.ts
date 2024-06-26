
import { menuController } from "@ionic/core";

import { initialize } from "@ionic/core/components";
import type { IonicConfig, MenuI } from "@ionic/core/components";

import { defineIonComponents } from "./components/defineComponents.js";

// all exports
export {
  actionSheetController,
  alertController,
  loadingController,
  menuController,
  pickerController,
  toastController,
} from "@ionic/core";

// from setupIonicReact
export type {
  // TYPES
  Animation,
  AnimationBuilder,
  AnimationCallbackOptions,
  AnimationDirection,
  AnimationFill,
  AnimationKeyFrames,
  AnimationLifecycle,
  Gesture,
  GestureConfig,
  GestureDetail,
  NavComponentWithProps,

  SpinnerTypes,

  AccordionGroupCustomEvent,
  AccordionGroupChangeEventDetail,

  BreadcrumbCustomEvent,
  BreadcrumbCollapsedClickEventDetail,

  ActionSheetOptions,
  ActionSheetButton,

  AlertOptions,
  AlertInput,
  AlertButton,

  BackButtonEvent,

  CheckboxCustomEvent,
  CheckboxChangeEventDetail,

  DatetimeCustomEvent,
  DatetimeChangeEventDetail,

  InfiniteScrollCustomEvent,

  InputCustomEvent,
  InputChangeEventDetail,

  ItemReorderEventDetail,
  ItemReorderCustomEvent,

  ItemSlidingCustomEvent,

  IonicSafeString,

  LoadingOptions,

  MenuCustomEvent,
  MenuI,

  ModalOptions,

  NavCustomEvent,

  PickerOptions,
  PickerButton,
  PickerColumn,
  PickerColumnOption,

  PopoverOptions,

  RadioGroupCustomEvent,
  RadioGroupChangeEventDetail,

  RangeCustomEvent,
  RangeChangeEventDetail,
  RangeKnobMoveStartEventDetail,
  RangeKnobMoveEndEventDetail,

  RefresherCustomEvent,
  RefresherEventDetail,

  RouterEventDetail,
  RouterCustomEvent,

  ScrollBaseCustomEvent,
  ScrollBaseDetail,
  ScrollDetail,
  ScrollCustomEvent,

  SearchbarCustomEvent,
  SearchbarChangeEventDetail,

  SegmentChangeEventDetail,
  SegmentCustomEvent,

  SelectChangeEventDetail,
  SelectCustomEvent,

  TabsCustomEvent,

  TextareaChangeEventDetail,
  TextareaCustomEvent,

  ToastOptions,
  ToastButton,

  ToggleChangeEventDetail,
  ToggleCustomEvent,
} from '@ionic/core/components';

export {
  // UTILS
  createAnimation,
  createGesture,
  iosTransitionAnimation,
  mdTransitionAnimation,
  IonicSlides,
  getTimeGivenProgression,
} from "@ionic/core/components";

export * from "./controllers";

export * from "./platform";

export const setupIonicSvelte = async (config?: IonicConfig) => {
  /* Ionic initialisation */
  initialize(config);

  /* Loading webcomponents en styles */
  defineIonComponents();

  /* something else needed */
  if (typeof (document as any) !== 'undefined') {
    document.documentElement.classList.add('ion-ce');
  }
};

export const registerMenu = (menuId: string): boolean => {
  const query = "ion-menu[menu-id='" + menuId + "']";
  const menu = document.querySelector(query) as unknown as MenuI;

  if (menu) {
    menuController._register(menu);
  }
  return !!menu;
}

