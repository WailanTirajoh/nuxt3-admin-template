<script setup lang="ts">
import { TwButton, TwModal } from "vue3-tailwind";

useHead({
  title: "Modal",
});
</script>

<template>
  <div class="">
    <h2 class="text-2xl font-bold">Modal</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <TwModal backdrop="static" :full-height="false">
      <template #trigger>
        <TwButton> Modal </TwButton>
      </template>
      <template #header>
        <div>Header</div>
      </template>
      <template #body>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum modi
          alias commodi possimus optio ad inventore, nesciunt accusamus unde
          tempore est eveniet earum voluptatibus repellendus eaque? Soluta est
          nam reiciendis, debitis praesentium dicta, vero molestias voluptatem
          laboriosam omnis rerum consectetur odio sint autem saepe? Cumque in
          pariatur omnis! Porro unde reprehenderit odit nostrum atque ab
          ratione, cum quaerat harum cumque minus quidem. Molestiae vel
          perspiciatis facere tempora labore, a impedit consequuntur inventore,
          tempore blanditiis possimus sint omnis dolorum at. Reprehenderit
          veritatis quos delectus ea, maxime inventore earum perspiciatis
          repellat quis ut maiores quam corporis nulla enim doloribus debitis
          doloremque sit nemo! Amet distinctio reiciendis quam molestias unde,
          aut magni neque dolorem tenetur atque itaque eveniet nulla modi enim
          temporibus optio laboriosam odit consequuntur ut explicabo officiis!
          Optio, incidunt porro alias tempore eligendi iure. Quasi, accusamus?
          Eveniet dicta provident ullam itaque cum laborum deserunt est?
          Eligendi perferendis magnam repudiandae quasi dignissimos nam cum,
          ipsa corporis? Dolore reprehenderit facere nemo vel sed a maxime
          temporibus, excepturi id dolorem laborum placeat sunt libero
          similique, consectetur aut fugiat culpa eius eaque expedita quidem
          ullam itaque alias cupiditate? Reiciendis iure molestias sit omnis
          doloremque aliquam. Similique, ex! Vitae molestias tempore corrupti
          nostrum, soluta enim iure assumenda veritatis officiis consectetur.
          Fuga ipsum officiis fugiat numquam dolore natus magnam cumque error
          consectetur tenetur doloremque autem maiores perferendis, quasi rem
          possimus sequi dolores perspiciatis nobis, sit facilis accusantium!
          Eius, explicabo vero id doloremque error magni ipsam, placeat nisi
          voluptatum voluptatibus officia, voluptates mollitia? Fugiat iusto
          nulla vitae consequatur, impedit et cum! Dolores, facere nulla?
          Voluptatibus mollitia eum, soluta aperiam impedit quasi quod nihil,
          qui odio enim eius cupiditate exercitationem nulla, nesciunt ea? Natus
          explicabo neque nobis nulla incidunt rem at sapiente totam ut eos
          tempora, voluptate possimus vero veritatis. Quibusdam ipsa, suscipit
          officiis deserunt saepe architecto minus consequatur veritatis
          cupiditate aspernatur perferendis distinctio fugit alias natus?
          Deserunt, qui? Amet quae commodi hic, voluptas, possimus fugiat fugit
          laboriosam error laborum libero asperiores distinctio aspernatur
          dolorum eveniet dolores? Est voluptates, sapiente cupiditate ab eaque
          ipsam. Voluptates amet sequi iste sint, officiis aperiam excepturi
          minima ipsa esse numquam cumque doloremque minus distinctio, suscipit
          dolorum quasi! Dolor fugiat tempora autem provident ad vitae
          recusandae blanditiis. Tenetur neque tempora molestiae voluptas at
          dolor eaque suscipit. Exercitationem quaerat aspernatur eos laudantium
          reprehenderit officiis reiciendis? Corrupti quos dolorem itaque sequi
          eos necessitatibus expedita nemo. Cumque dolorum nulla quae dolore
          ipsam beatae aut possimus laboriosam obcaecati necessitatibus eos,
          tempora iure cupiditate quibusdam ducimus vero quasi, magni rerum est.
          Praesentium id dignissimos, culpa sit blanditiis quod voluptas fugit
          consectetur laboriosam iure, in quis odit deserunt dolorem. Voluptatum
          ducimus est et saepe excepturi aliquam neque error eius fugiat tempora
          quas sapiente voluptate qui odio aperiam consequatur, iure laboriosam
          culpa nostrum possimus! Nulla provident dicta suscipit rerum impedit
          magni molestias dolor velit corporis ullam tempore quam, sed nostrum,
          quos unde doloremque aliquid consequuntur animi, maiores possimus nisi
          neque? Quae sequi debitis aut reiciendis nulla sit suscipit
          perferendis fugiat ab optio repellat quo at minima tempore non quis,
          eligendi facere ut velit molestias. Fugiat, alias culpa non iusto eius
          consequatur error libero.
        </div>
      </template>
      <template #footer>
        <div>Footer</div>
      </template>
    </TwModal>
  </div>
</template>
