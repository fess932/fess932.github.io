<template>
  <div>

    <h1>Welcome to the film list</h1>

   <FilmList/>
   
  </div>
</template>

<script>
import sourceData from '@/data1'
console.log(sourceData)
export default {
  name: 'HelloWorld',
  data () {
    return {
      films: sourceData.films,
      comments: sourceData.comments,
      categories: sourceData.categories,
      users: sourceData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
// .thing
//   display grid
//   grid-template-columns 2fr 1fr 4fr 4fr 3fr 1fr
a
  color #42b983
</style>
