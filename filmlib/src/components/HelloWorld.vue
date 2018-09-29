<template>
  <div>

    <h1>Welcome to the film list</h1>
    <h3 :key="film.id" v-for="film in films">
      <h3>{{film.label}}</h3>
      <img :src="film.picture" alt="">
      <p>{{film.country}}</p>
      <p>{{film.year}}</p>
      <span :key="genre.id" v-for="genre in film.genres">
        {{genres[genre]}}
      </span>
      <h4>
        <div :key="rating.id" v-for="rating in film.ratings">
          <span>User name {{users[rating.uid].userName}} </span>
          <span>{{rating.userRating}} </span>
        </div>
      </h4>
      <p>{{film.about}}</p>

    </h3>

  </div>
</template>

<script>
import sourceData from '@/moc'
// import FilmList from './FilmList '3
console.log(sourceData)
export default {
  name: 'HelloWorld',
  data () {
    return {
      films: sourceData.films,
      picture: sourceData.picture,
      year: sourceData.year,
      country: sourceData.country,
      genres: sourceData.genres,
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
