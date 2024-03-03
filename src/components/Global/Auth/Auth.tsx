/*
 * @Author: Cary
 * @Date: 2024-02-22 16:19:57
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-22 23:29:06
 * @FilePath: /fastapi-naive-web/src/components/Global/Auth/isAuth.tsx
 * @Descripttion: 
 */
import { defineComponent, Fragment,PropType } from "vue";
import { hasAuth } from ".";


export default defineComponent({
  name: "Auth",
  props: {
    value: {
      type: undefined as PropType<string | Array<string>>,
      default: []
    }
  },
  setup(props, { slots }) {
    return () => {
      if (!slots) return null;
      return hasAuth(props.value) ? (
        <Fragment>{slots.default?.()}</Fragment>
      ) : null;
    };
  }
});