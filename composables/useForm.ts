import { newsletterApi } from "~~/api";

import type { Ref } from "vue";
import type { Newsletter } from "../interfaces/";

export const useForm = () => {
  const errors: Ref<{}> = ref({});

  const sendForm = async (form: Newsletter) => {
    try {
      const isSomeFieldEmpty = Object.keys(form).some((key) => {
        if (!form[key]) {
          errors.value = {
            ...errors.value,
            key: "Este campo no puede ir vacío",
          };

          return false;
        }

        return true;
      });

      if (isSomeFieldEmpty) return;

      await newsletterApi.post("/", { form });

      console.log("Mensaje enviado");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    errors,
    sendForm,
  };
};
