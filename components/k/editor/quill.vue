<script setup lang="ts">
import Quill from 'quill'

const defaultOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link', 'image', 'video']
    ]
  },
  placeholder: 'Insert text here ...',
  readOnly: false
}

const props = defineProps({
  content: String,
  modelValue: String,
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    required: false,
    default: () => ({})
  },
  globalOptions: {
    type: Object,
    required: false,
    default: () => ({})
  }
})

const _quill = ref()
const _options = ref({})
const _content = ref('')
const _value = ref(props.modelValue)
const _disabled = ref(props.disabled)
const _defaultOptions = ref(defaultOptions)
const editor = ref()

const emit = defineEmits(['blur', 'focus', 'update:modelValue', 'change', 'ready'])

const init = () => {
  // Assign options value from props
  _options.value = Object.assign({}, _defaultOptions.value, props.globalOptions, props.options)

  // Initialize quill instance
  _quill.value = new Quill(editor.value, _options.value)
  _quill.value.enable(false)

  // Initialize html if theres any
  if (props.modelValue || props.content) {
    _quill.value.pasteHTML(props.modelValue || props.content)
  }

  // Enable quill when props is not disabled
  if (!props.disabled) {
    _quill.value.enable(true)
  }

  // Quill Hooks
  _quill.value.on('selection-change', (range: Boolean) => {
    if (!range) {
      emit('blur', _quill.value)
    } else {
      emit('focus', _quill.value)
    }
  })

  _quill.value.on('text-change', () => {
    let html = editor.value.children[0].innerHTML
    const quill = _quill.value
    const text = _quill.value.getText()
    if (html === '<p><br></p>') html = ''
    _content.value = html
    emit('update:modelValue', _content.value)
    emit('change', { html, text, quill })
  })

  emit('ready', _quill.value)
}

watch(_content, (newVal) => {
  if (_quill.value) {
    if (newVal && newVal !== _content.value) {
      _content.value = newVal
      _quill.value.pasteHTML(newVal)
    } else if (!newVal) {
      _quill.value.setText('')
    }
  }
})

watch(_value, (newVal) => {
  if (_quill.value) {
    if (newVal && newVal !== _content.value) {
      _content.value = newVal
      _quill.value.pasteHTML(newVal)
    } else if (!newVal) {
      _quill.value.setText('')
    }
  }
})

watch(_disabled, (newVal) => {
  if (_quill.value) {
    _quill.value.enable(!newVal)
  }
})

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  _quill.value = null
  delete _quill.value
})
</script>

<template>
  <div class="quill-editor">
    <slot name="toolbar"></slot>
    <div ref="editor"></div>
  </div>
</template>
