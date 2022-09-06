<template>
  <div class="max-w-7xl px-8 mx-auto mt-24 xl:px-0">
    <TextBrush>
      <h2 class="font-cavet text-center text-6xl">Contáctanos</h2>
    </TextBrush>

    <form
      @submit.prevent="sendNewsletter"
      class="grid grid-cols-2 gap-6 max-w-xxl mx-auto"
      id="newsletter-form"
    >
      <div class="flex flex-col gap-1">
        <label for="name" class="text-sm font-bold uppercase">Nombre</label>
        <input
          v-model="newsletterForm.name"
          type="text"
          name="name"
          id="name"
          class="border border-gray-300 pl-5 py-3 outline-none focus:border-gold invalid:border-firebrick disabled:opacity-50"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="lastname" class="text-sm font-bold uppercase"
          >Apellido</label
        >
        <input
          v-model="newsletterForm.lastname"
          type="text"
          name="lastname"
          id="lastname"
          class="border border-gray-300 pl-5 py-3 outline-none focus:border-gold invalid:border-firebrick disabled:opacity-50"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email" class="text-sm font-bold uppercase">Mail</label>
        <input
          v-model="newsletterForm.email"
          type="email"
          name="email"
          id="email"
          class="border border-gray-300 pl-5 py-3 outline-none focus:border-gold invalid:border-firebrick disabled:opacity-50"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="phone" class="text-sm font-bold outline-none uppercase"
          >Teléfono</label
        >
        <input
          v-model="newsletterForm.phone"
          type="tel"
          name="phone"
          id="phone"
          class="border border-gray-300 pl-5 py-3 outline-none focus:border-gold invalid:border-firebrick disabled:opacity-50"
        />
      </div>

      <div class="flex justify-end col-span-2">
        <button
          type="submit"
          form="newsletter-form"
          class="px-12 py-4 rounded-full uppercase font-bold bg-gold text-white"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "../composables/useForm";
import type { Ref } from "vue";
import type { Newsletter } from "../interfaces/";

const { sendForm, errors } = useForm();

// State
const newsletterForm: Ref<Newsletter> = ref({
  email: "",
  lastname: "",
  name: "",
  phone: "",
});

const sendNewsletter = async () => await sendForm(newsletterForm.value);
</script>
