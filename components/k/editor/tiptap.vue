<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import StarterKit from '@tiptap/starter-kit'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import VueFeather from 'vue-feather'

const editor = useEditor({
  content: ``,
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none border !w-full !max-w-none p-4',
    },
  },
  extensions: [
    StarterKit,
    Document,
    Paragraph,
    Text,
    Heading,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),

  ],
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>

<template>
  <div class="">
    <div class="bg-gray-200 pt-0 p-1 rounded-t flex flex-wrap" v-if="editor">
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('bold') }">
        <b class="w-5 h-5 text-center">
          B
        </b>
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('italic') }">
        <vue-feather class="w-5 h-5" type="italic" />
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('strike') }">
        <strike>
          strike
        </strike>
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('code') }">
        <vue-feather class="w-5 h-5" type="code" />
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().unsetAllMarks().run()">
        clear marks
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().clearNodes().run()">
        clear nodes
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().setParagraph().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('paragraph') }">
        P
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('heading', { level: 1 }) }">
        h1
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('heading', { level: 2 }) }">
        h2
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('heading', { level: 3 }) }">
        h3
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('heading', { level: 4 }) }">
        h4
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('heading', { level: 5 }) }">
        h5
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('heading', { level: 6 }) }">
        h6
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleBulletList().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('bulletList') }">
        bullet list
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleOrderedList().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('orderedList') }">
        ordered list
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleCodeBlock().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('codeBlock') }">
        <vue-feather class="w-5 h-5" type="code" />
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().toggleBlockquote().run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive('blockquote') }">
        blockquote
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().setHardBreak().run()">
        hard break
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().setTextAlign('left').run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive({ textAlign: 'left' }) }">
        <vue-feather class="w-5 h-5" type="align-left" />
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().setTextAlign('center').run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive({ textAlign: 'center' }) }">
        <vue-feather class="w-5 h-5" type="align-center" />
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().setTextAlign('right').run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive({ textAlign: 'right' }) }">
        <vue-feather class="w-5 h-5" type="align-right" />
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().setTextAlign('justify').run()"
        :class="{ 'bg-gray-800 text-white hover:bg-gray-700': editor.isActive({ textAlign: 'justify' }) }">
        <vue-feather class="w-5 h-5" type="align-justify" />
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
        undo
      </div>
      <div
        class="border border-gray-300 mr-1 mt-1 rounded hover:bg-gray-50 duration-300 flex p-1 cursor-pointer h-8 items-center justify-center select-none"
        @click="editor?.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
        redo
      </div>
    </div>
    <editor-content class="element" :editor="editor" />
  </div>
</template>
