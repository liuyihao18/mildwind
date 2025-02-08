<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps({
  items: Array
})
const items = ref(props.items ? props.items : [])
const inputValue = ref('')
const drawnIndex = ref(-1)
const isDrawing = ref(false)

const addItem = () => {
  if (!isDrawing.value && inputValue.value !== '') {
    items.value.push(inputValue.value)
  }
}

const deleteItem = (index) => {
  items.value.splice(index, 1)
}

const draw = () => {
  if (items.value.length < 1) {
    alert('请添加抽签选项！')
    return
  }
  isDrawing.value = true
  let randomIndex = Math.floor(Math.random() * items.value.length) * 2 + items.value.length
  const interval = Math.min(1666 / items.value.length, 166)
  const fn = () => {
    if (randomIndex > 0) {
      drawnIndex.value = (drawnIndex.value + 1) % items.value.length
      randomIndex--
      setTimeout(fn, interval)
    } else {
      setTimeout(() => {
        alert('抽中了：' + items.value[drawnIndex.value])
        isDrawing.value = false
      }, interval)
    }
  }
  fn()
}

</script>

<template>
  <div class="draw-tool">
    <div class="draw-input-group">
      <input class="draw-input-item" v-model="inputValue" type="text"/>
      <button class="draw-button" @click="addItem">添加</button>
      <button class="draw-button" @click="draw">抽签</button>
    </div>
    <ul>
      <li v-for="(item, index) in items">
            <span :class="index === drawnIndex ? 'draw-items draw-drawn' : 'draw-items'">
                {{ item }}
            </span>
        <button class="draw-delete-button" @click="deleteItem(index)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path fill="currentColor"
                  d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"></path>
          </svg>
        </button>
      </li>
      <li hidden>
            <span class="draw-items draw-drawn" hidden>

            </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.draw-tool {
  box-shadow: 0 2px 4px 0 rgba(from var(--vp-c-text-1) r g b / 0.2), 0 1px 5px 0 rgba(from var(--vp-c-text-1) r g b / 0.19);
  padding: 20px 16px 12px 16px;
}

.draw-input-group {
  display: flex;
  max-width: 24em;
}

.draw-input-item {
  width: 60%;
  padding: 0 5px;
  border: 1px var(--vp-c-text-1) solid;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
}

.draw-button {
  min-width: 64px;
  padding: 4px 15px;
  color: var(--vp-button-brand-text);
  background: var(--vp-button-brand-bg);
  border: 1px var(--vp-button-brand-border) solid;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s, border-color 0.25s;
}

.draw-button:hover {
  color: var(--vp-button-brand-hover-text);
  background: var(--vp-button-brand-hover-bg);
  border: 1px var(--vp-button-brand-hover-border) solid;
}

.draw-button:not(:last-child) {
  margin-right: 10px;
}

.draw-delete-button svg {
  position: relative;
  top: 3px;
  margin-left: 20px;
  width: 16px;
  height: 16px;
}

.draw-delete-button svg path {
  stroke: var(--vp-c-text-1);
}

.draw-items {
  padding: 1px;
}

.draw-drawn {
  background-color: color-mix(in srgb, var(--vp-c-brand-1) 33%, var(--vp-c-bg));
  transition: background-color 0.05s;
}
</style>