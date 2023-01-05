<script setup lang="ts">
import {
  Toast,
  TwButton,
  TwErrorMessage,
  TwForm,
  TwInput,
} from "vue3-tailwind";

definePageMeta({
  layout: "front",
});

useHead({
  title: "Login",
});

const toast = Toast();

const formLogin = ref();
const formError = ref(false);

const formData: {
  [key: string]: any;
} = reactive({
  email: "user@mail.com",
  password: "password",
});

const login = async () => {
  const validator = formLogin.value.validator();
  validator.clearErrors();
  await validator.validate();
  if (validator.fail()) {
    toast.error({
      message: validator.getErrorMessage(),
    });

    toggleFormError();
    return;
  }

  if (
    !(formData.email === "user@mail.com" && formData.password === "password")
  ) {
    toast.error({
      message: "Email & Password combination missmatch",
      lifetime: 3000,
    });

    toggleFormError();
    return;
  }

  const router = useRouter();

  toast.success({
    message: "Loggin success, youre being redirected",
  });

  setTimeout(() => {
    router.push("/");
  }, 3000);
};

const toggleFormError = () => {
  formError.value = true;
  setTimeout(() => {
    formError.value = false;
  }, 1000);
};
</script>

<template>
  <div class="w-screen h-screen text-white flex justify-center pt-40">
    <TwForm
      ref="formLogin"
      :rules="{
        email: ['required', 'email'],
        password: ['required'],
      }"
      @submit="login"
      name="login"
      :class="{
        'tw-shake': formError,
      }"
      class="text-gray-800 rounded-t-lg w-96 shadow-lg p-1 bg-gradient-to-b from-indigo-400 h-20"
    >
      <div class="header bg-white dark:bg-gray-900 border-b dark:border-gray-700 text-indigo-900 p-4 rounded-t">
        <h1 class="text-2xl font-bold text-center">Welcome</h1>
      </div>
      <div class="body bg-white dark:bg-gray-900 p-4 rounded-b-lg">
        <div class="grid grid-cols-12 gap-2">
          <div class="col-span-12">
            <TwInput v-model="formData.email" name="email" label="Email" />
            <TwErrorMessage name="email"></TwErrorMessage>
          </div>
          <div class="col-span-12">
            <TwInput
              v-model="formData.password"
              name="password"
              label="Password"
              type="password"
            />
            <TwErrorMessage name="password"></TwErrorMessage>
          </div>
          <div class="col-span-12">
            <TwButton type="submit" class="w-full text-center">
              Login
            </TwButton>
          </div>
        </div>
      </div>
    </TwForm>
  </div>
</template>
