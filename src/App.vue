<template>
  <div class="container mx-auto">
    <form class="rounded-sm bg-white p-2 shadow-md">
      <div class="flex items-center">
        <input type="text" class="w-full rounded-sm border border-gray-400 py-1 px-2" placeholder="Search ..." />
        <button class="ml-2 rounded-sm bg-blue-500 px-2 py-1 text-white hover:bg-blue-600">Search</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const { onMounted } = require('vue')
// const { useSearchStore } = require('@/stores/search')

// const searchStore = useSearchStore()

onMounted(async () => {
  // const res = await searchStore.findJobs()

  // console.log(res)
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
