<template>
    <div>
        <h1 class="filmlist"> this is film list </h1>
        <FilmList/>
    </div>
</template>

<script>
// @ is an alias to /src
import FilmList from '@/components/FilmList.vue'

export default {
  name: 'filmlist',
  components: {
    FilmList
  }
}

</script>

<style>

</style>
