<script setup lang="ts">
import { TwButton, TwOffcanvas } from "vue3-tailwind";

useHead({
  title: "Offcanvas",
});

const example = ref(`
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi pariatur maxime, obcaecati doloremque ea
cupiditate debitis provident sed corporis eos culpa vel voluptatum dolore odit soluta cum aut fugiat
esse. Necessitatibus, vero rem. Itaque laudantium autem quos fugiat delectus molestias iusto velit
sapiente. Iure porro voluptate dignissimos? Quis, exercitationem corporis. Dolorem nulla veritatis ut
amet dicta repellendus sed, nobis labore ipsum? Corporis nostrum fugit nesciunt cupiditate libero iusto
expedita illo magni cumque odit. Labore, quibusdam! Officia maxime recusandae exercitationem mollitia
voluptatibus ex id, nobis similique reprehenderit distinctio? Tempora magni sequi fugiat minus obcaecati
pariatur, nemo animi cumque, eaque aliquid suscipit quo repellendus neque aliquam. Quidem atque laborum
officiis pariatur dolores ea consequatur ipsa! Repudiandae rerum quibusdam fugit. Rerum officiis qui
obcaecati unde voluptatibus? Eaque praesentium architecto hic voluptatibus nihil ullam, voluptates totam
incidunt officia alias laboriosam voluptate qui molestiae neque adipisci reiciendis eos corporis ut,
sequi accusantium. Nostrum illo temporibus quo, nobis reprehenderit repellat ea magni? Est ad sed,
quidem eius excepturi dignissimos quasi nemo velit. Excepturi, nobis. Officiis vitae veritatis
consequuntur nam. Quam consequatur laborum at. Vero, mollitia veniam! Corporis consectetur dolorem
accusantium velit quasi beatae molestias odio tenetur quod iusto, eaque id dolore culpa a eveniet minima
eius ipsam? Saepe consequuntur accusantium laudantium asperiores delectus doloremque tenetur,
perferendis dicta itaque. Explicabo ratione, nemo voluptatum fugit eligendi, obcaecati consectetur culpa
rem repellendus quos, odio modi officia illo iste dolorem similique esse odit voluptatem velit error
commodi cupiditate facilis! Ratione amet voluptatibus ad dignissimos dicta ducimus unde voluptate
voluptatum id, placeat nesciunt atque similique provident perspiciatis voluptatem quaerat officiis eaque
molestiae in neque tempore. Aliquid aperiam, sit unde nostrum provident nesciunt maxime! Id dignissimos
laboriosam distinctio vitae, blanditiis alias impedit natus quasi, rem libero at ea temporibus eaque,
nihil consectetur ut labore! Voluptate atque, fuga laborum nisi blanditiis molestias commodi aspernatur
pariatur sequi aliquid expedita culpa fugit tenetur distinctio libero, beatae odit vel. Accusantium
soluta expedita eius? Tenetur omnis aperiam quo officiis quas, porro, incidunt soluta deleniti at rem
odit fugit ut tempora rerum quod dolorum dolores sunt eius inventore voluptatem nulla debitis ab. Natus
molestiae dicta iure nisi odit, aliquam non vel, soluta ipsa autem quia ullam error. Possimus veniam
consequuntur enim deleniti nulla, impedit maxime cupiditate ut modi nihil quod, iusto aut excepturi
reprehenderit nobis non ipsam tempore. Commodi tempore qui nemo soluta consequuntur sequi accusantium
ipsam fugiat fugit aspernatur. Cumque debitis, sapiente odit enim aperiam soluta sequi at voluptates?
Incidunt sequi asperiores quas atque laudantium ad perspiciatis? Perferendis quae cum molestiae
explicabo, cumque repudiandae, voluptas ut aliquam hic nobis enim molestias perspiciatis. Commodi,
tenetur quaerat similique sequi ea eius, aut nostrum distinctio et dignissimos fuga voluptatibus dolorem
reiciendis quo qui. Possimus dolor ullam culpa unde doloremque consequuntur ea vero, saepe molestiae
laboriosam? Corporis veritatis odit accusamus hic quod laboriosam perferendis temporibus, repellendus
consequatur culpa, eaque ab ipsa iste facilis laudantium! Non aut dolorem obcaecati eveniet odio, illo
dolores ipsum sint sequi porro corporis odit suscipit nulla vitae! Rem, incidunt laboriosam consequuntur
magni omnis illo doloremque sed? Ipsum optio dolore delectus distinctio voluptatibus. Sed expedita
officiis debitis fuga repellendus? Quam!
`);
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-bold">Offcanvas</h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <div class="grid md:flex gap-2">
          <TwOffcanvas position="left">
            <template #trigger>
              <TwButton> Left Offcanvas </TwButton>
            </template>
            <template #headerTitle> Left Offcanvas </template>
            <div class="p-4 overflow-auto">
              {{ example }}
            </div>
          </TwOffcanvas>
          <TwOffcanvas position="right">
            <template #trigger>
              <TwButton> Right Offcanvas </TwButton>
            </template>
            <template #headerTitle> Right Offcanvas </template>
            <div class="p-4 overflow-auto">
              {{ example }}
            </div>
          </TwOffcanvas>
          <TwOffcanvas position="right" width="800px">
            <template #trigger>
              <TwButton> Right Offcanvas with width 800px </TwButton>
            </template>
            <template #headerTitle> Right Offcanvas </template>
            <div class="p-4 overflow-auto">
              {{ example }}
            </div>
          </TwOffcanvas>
          <TwOffcanvas position="left" width="600px">
            <template #trigger>
              <TwButton> Left Offcanvas with width 600px </TwButton>
            </template>
            <template #headerTitle> Right Offcanvas </template>
            <div class="p-4 overflow-auto">
              {{ example }}
            </div>
          </TwOffcanvas>
          <TwOffcanvas position="top">
            <template #trigger>
              <TwButton> Top Offcanvas </TwButton>
            </template>
            <template #headerTitle> Top Offcanvas </template>
            <div class="p-4 overflow-auto">
              {{ example }}
            </div>
          </TwOffcanvas>
          <TwOffcanvas position="bottom">
            <template #trigger>
              <TwButton> Bottom Offcanvas </TwButton>
            </template>
            <template #headerTitle> Bottom Offcanvas </template>
            <div class="p-4 overflow-auto">
              {{ example }}
            </div>
          </TwOffcanvas>
        </div>
      </div>
    </div>
  </div>
</template>
