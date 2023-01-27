<template>
  <div class="layout-footer grid flex pl-5 pt-5 pb-5">
    <div class="col-12 lg:col-4 lg:col-3">
      <p class="font-bold text-white">{{ RU.payment.title }}</p>
      <img
        class="h-2rem mr-2"
        :src="publicLink(icons.mc)"
        alt="Master card logo"
      />
      <img class="h-2rem" :src="publicLink(icons.visa)" alt="Visa logo" />
    </div>

    <div class="col-12 lg:col-4 lg:col-3">
      <p class="font-bold text-white">{{ RU.contacts.title }}</p>
      <div class="flex mb-2">
        <img
          class="h-2rem mr-2"
          :src="publicLink(icons.mail)"
          alt="Mail icon"
        />
        <a class="text-white underline" :href="`mailto:${links.email}`">
          {{ links.email }}
        </a>
      </div>
      <div class="flex">
        <img
          class="h-2rem mr-2"
          :src="publicLink(icons.chat)"
          alt="Chat icon"
        />
        <a class="text-white underline" :href="links.chat">
          {{ RU.contacts.chat }}
        </a>
      </div>
    </div>
  </div>
</template>

<script async setup lang="ts">
import RU from "../../locales/RU.json";

// TODO: generate public links
const icons = {
  mc: "mc.png",
  visa: "visa.png",
  mail: "mail.png",
  chat: "chat.png",
};
const publicLink = (icon: string) => {
  return `/public/images/footer/${icon}`;
};

// TODO: move to globals
const links = {
  email: "support@test.com",
  chat: "#",
};
</script>

<style lang="scss" scoped>
.layout-footer {
  background: #300958;
}
</style>
