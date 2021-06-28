<template>
  <div class="elck">
    <ckeditor
        tag-name="textarea"
        :editor="editor"
        v-model="content"
        :config="editorConfig"
        :placeholder="placeholder"
    />
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/es'

export default {
  name: 'CCkaeditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: undefined
    }
  },
  computed: {
    content: {
      get: function () {
        return this.value || ''
      },
      set: function (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  data: () => ({
    editor: ClassicEditor,
    basic: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        'blockQuote',
        '|',
        'undo',
        'redo'
      ]
    },
    editorConfig: {
      language: 'es',
      toolbar: undefined
    }
  }),
  created() {
    if (this.mode !== undefined) {
      this.editorConfig.toolbar = this[this.mode]
    }
  }
}
</script>

<style>
.elck p {
  margin: 0px !important;
  margin-bottom: 4px !important;
}

.elck .ck-toolbar {
  border-top-left-radius: 6px !important;
  border-top-right-radius: 6px !important;
}

.elck .ck-content {
  padding: 10px !important;
  min-height: 100px !important;

  border-bottom-left-radius: 6px !important;
  border-bottom-right-radius: 6px !important;

  box-shadow: var(--ck-inner-shadow), 0 0;
  background: var(--ck-color-input-background);
  border: 1px solid var(--ck-color-input-border);
  padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
  transition-property: box-shadow, border;
  transition: .2s ease-in-out;

  height: inherit;
  width: inherit;
  font-size: inherit;
  margin: 0;
  box-sizing: border-box;
}

.elck .ck-content:focus {
  border: var(--ck-focus-ring);
  border-width: 2px !important;
  box-shadow: var(--ck-focus-outer-shadow), var(--ck-inner-shadow);
}
</style>
