<script setup lang="ts">
import { TwTabBody, TwTabNavigator, TwTabWrapper } from "vue3-tailwind";
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Tabs</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12">
        <TwTabWrapper>
          <div
            class="flex border dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <div
              class="bg-gray-50 dark:bg-gray-900 border-r dark:border-gray-700 relative flex flex-col justify-between"
            >
              <div>
                <div class="text-lg p-2 bg-gray-200 dark:bg-gray-800">
                  Title
                </div>
                <hr class="border-gray-300 dark:border-gray-700" />
                <TwTabNavigator type="vertical">
                  <template #tab1>
                    <div class="p-2 w-full">Test</div>
                  </template>
                  <template #tab2>
                    <div class="p-2 w-full">Test 2</div>
                  </template>
                </TwTabNavigator>
              </div>
              <div>
                <hr class="border-gray-300 dark:border-gray-700" />
                <div class="text-lg p-2 bg-gray-200 dark:bg-gray-800 w-full">
                  Footer
                </div>
              </div>
            </div>
            <TwTabBody id="tab1" v-slot="{ active }">
              <div
                class="w-full p-2 rounded-r bg-white dark:bg-gray-800 h-96 overflow-auto"
                v-if="active"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                omnis cum earum mollitia quia delectus officiis possimus odio
                totam aut. Error asperiores quis aliquid ad sit mollitia aliquam
                expedita aperiam quibusdam saepe non itaque, repellendus modi
                magnam, architecto quisquam consectetur ex! Eum, consectetur
                aliquid. Accusamus esse nobis fugit deserunt, eligendi beatae
                quaerat corporis cum quo ducimus possimus aspernatur reiciendis,
                aliquam eveniet earum sit accusantium laudantium voluptate
                neque, eaque assumenda optio at. Vitae non molestiae placeat
                accusamus vero labore sit optio fuga consequatur! Reiciendis ab
                eos dolorem officia, exercitationem laudantium tempore
                repellendus similique. Rerum beatae qui quae autem libero
                necessitatibus ipsam? Aliquid voluptates rem possimus nihil
                tenetur sit repellat, commodi dolores consequatur minus hic
                consequuntur recusandae similique excepturi officiis ut
                explicabo numquam praesentium, natus quas expedita modi sed.
                Quae ut saepe esse aliquam? Eligendi, eaque, ab excepturi
                placeat id est dolores tenetur dolorum, repellendus voluptatibus
                nisi nostrum incidunt esse quidem quisquam facilis quos.
                Sapiente corrupti esse vero animi quibusdam quas eos nostrum
                maiores voluptatibus, quaerat nam fuga, nesciunt placeat est
                saepe nihil facere repellendus perspiciatis. Enim sed hic quo ut
                alias vitae quidem non rerum, voluptatem tenetur aut quod iste a
                recusandae facilis, voluptate velit praesentium. Officiis totam
                suscipit deserunt dolore culpa provident ratione odio
                dignissimos nostrum in quod minima necessitatibus eum nulla
                odit, quia maiores, qui exercitationem aperiam! Fuga repellat
                consectetur iste in ex est sapiente corporis sit. Numquam ab
                debitis ut, nisi quas qui placeat error commodi vero. Vitae
                veniam dolorem dolorum voluptatum voluptatibus, doloribus
                quisquam numquam nesciunt ad at temporibus quam quaerat fuga et?
              </div>
            </TwTabBody>
            <TwTabBody id="tab2" v-slot="{ active }">
              <div
                class="w-full p-2 rounded-r bg-white dark:bg-gray-800 h-96 overflow-auto"
                v-if="active"
              >
                Test 2
              </div>
            </TwTabBody>
          </div>
        </TwTabWrapper>
      </div>
      <!-- <div class="col-span-12">
        <TwTabWrapper>
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <div class="bg-gray-100 shadow-inner">
              <div class="text-lg p-2 bg-gray-300">Title</div>
              <hr class="border-gray-300" />
              <TwTabNavigator class="bg-gray-100" type="horizontal">
                <template #tab1>
                  <div class="p-2 w-full">Test</div>
                </template>
                <template #tab2>
                  <div class="p-2 w-full">Test 2</div>
                </template>
                <template #tab3>
                  <div class="p-2 w-full">Test 3</div>
                </template>
              </TwTabNavigator>
            </div>
            <TwTabBody id="tab1" v-slot="{ active }">
              <div class="w-full p-2 rounded bg-white shadow" v-if="active">
                Test
              </div>
            </TwTabBody>
            <TwTabBody id="tab2" v-slot="{ active }">
              <div class="w-full p-2 rounded bg-white shadow" v-if="active">
                Test 2
              </div>
            </TwTabBody>
            <TwTabBody id="tab3" v-slot="{ active }">
              <div class="w-full p-2 rounded bg-white shadow" v-if="active">
                Test 3
              </div>
            </TwTabBody>
          </div>
        </TwTabWrapper>
      </div> -->
    </div>
  </div>
</template>
