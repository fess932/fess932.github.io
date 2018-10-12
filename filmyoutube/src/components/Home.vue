<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        input(
          type="text"
          placeholder="What we will watch?"
          v-model="taskTitle"
          @keyup.enter="newTask"
        )
        input(
          type="text"
          placeholder="Image url"
          v-model="image"
          @keyup.enter="newTask"
        )
        textarea(
          type="text"
          v-model="taskDescription"
          @keyup.enter="newTask"
        )
        .option-list
          // ANIME
          input.what-watch--radio(
            type="radio"
            id="radioAnime"
            value="Anime"
            v-model="whatWatch"
          )
          label(
            for="radioAnime"
          ) Anime

          // FILM
          input.what-watch--radio(
            type="radio"
            id="radioFilm"
            value="Film"
            v-model="whatWatch"
          )
          label(
            for="radioFilm"
          ) Film

          // SERIAL
          input.what-watch--radio(
            type="radio"
            id="radioSerial"
            value="Serial"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Serial
        // TOTAL TIME
        .total-time

          // FILM TIME
          .total-time__film(
            v-if="whatWatch ===  'Film'"
          )
            span.time-title Hours
            input.time-input(
              type="number"
              v-model.number="filmHours"
            )
            span.time-title Minutes
            input.time-input(
              type="number"
              v-model.number="filmMinutes"
            )
            p {{ filmTime }}

          // SERIAL TIME
          .total-time__serial(
            v-if="whatWatch ===  'Serial'"
          )
            span.time-title How many season?
            input.time-input(
              type="number"
              v-model.number="serialSeason"
            )
            span.time-title How many series?
            input.time-input(
              type="number"
              v-model.number="serialSeries"
            )
            span.time-title How mach time by series?
            input.time-input(
              type="number"
              v-model.number="serialSeriesMinutes"
            )
            p {{ serialTime }}

          // ANIME TIME
          .total-time__anime(
            v-if="whatWatch ===  'Anime'"
          )
            span.time-title How many season?
            input.time-input(
              type="number"
              v-model.number="animeSeason"
            )
            span.time-title How many series?
            input.time-input(
              type="number"
              v-model.number="animeSeries"
            )
            span.time-title How mach time by series?
            input.time-input(
              type="number"
              v-model.number="animeSeriesMinutes"
            )
            p {{ animeTime }}

        // IMG
        img(
            :src="image"
            alt="NO IMAGE"
          )
        // TAGS
        // add new tag
        .tag_list.tag_list--add
          .ui-tag__wrapper(
            @click="tagMenuShow = !tagMenuShow"
          )
            .ui-tag
              span.tag-title Add New
              span.button-close(
                :class="{ active: !tagMenuShow }"
              )
        // show input
        .tag-list.tag-list--menu(
          v-if="tagMenuShow"
        )
          input.tag-add--input(
            type="text"
            placeholder="New tag"
            v-model="tagTitle"
            @keyup.enter="newTag"
          )
          .button.button-default(
            @click="newTag"
          ) Send
        .tag_list
        .ui-tag__wrapper(
          v-for="tag in tags"
          :key="tag.title"
        )
          .ui-tag(
            @click="addTagUsed(tag)"
            :class="{ used: tag.use }"
          )
            span.tag-title {{ tag.title }}
            span.button-close
        p {{ tagsUsed }}
</template>

<script>
export default {
  created () {
    console.log(this.$lodash.isEmpty(null));
  },
  data () {
    return {
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Anime',
      image: "",
      taskId: 3,
      tagMenuShow: false,

      // Total Time
      // Film
      filmHours: 1,
      filmMinutes: 30,
      // Serial
      serialSeason: 1,
      serialSeries: 11,
      serialSeriesMinutes: 40,
      // Anime
      animeSeason: 1,
      animeSeries: 12,
      animeSeriesMinutes: 24,

      // tags
      tagsUsed: [],
      tags: [
        {
          title: 'Comedy',
          use: false
        },
        {
          title: 'Westerns',
          use: true
        },
        {
          title: 'Cats',
          use: false
        },
      ]
    }
  },
  methods: {
    newTask () {
      if(this.taskTitle === ''){
        return
      }
      let time
      switch (this.whatWatch) {
        case 'Film':
          time = this.filmTime
          break
        case 'Anime':
          time = this.animeTime
          break
        case 'Serials':
          time = this.serialTime
          break
      }

      const task = {
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        time,
        completed: false,
        editing: false
      }
      console.log(task)
      // RESET
      this.taskId++
      this.taskTitle = ''
      this.taskDescription = ''
    },
    addTagUsed(tag) {
      tag.use = !tag.use
      if(tag.use) {
        this.tagsUsed.push(
          tag.title
        )
      } else {
        _.pull(this.tagsUsed, tag.title)
      }
    },
    getHoursAndMinutes(minutes) {
      let hours = Math.trunc(minutes / 60)
      let min = minutes % 60
      return `${hours} Hours ${min} Minutes`
    }
  },
  computed: {
    filmTime () {
      let min = this.filmHours * 60 + this.filmMinutes
      return this.getHoursAndMinutes(min)
    },
    serialTime () {
      let min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes
      return this.getHoursAndMinutes(min)
    },
    animeTime () {
      let min = this.animeSeason * this.animeSeries * this.animeSeriesMinutes
      return this.getHoursAndMinutes(min)
    }
  }
}
</script>

<style lang="stylus" scoped>
// image
img
  margin-bottom 20px

.option-list
  display flex
  align-items center
  margin-bottom 20px
  .what-watch--radio
    margin-right 12px
  input
    margin-bottom 0
  label
    margin-right 20px
    margin-bottom 0
    &:last-child
      margin-right 0

// total time
.total-time
  margin-bottom 20px

.time-title
  display block
  margin-bottom 6px

.time-input
  max-width 80px
  margin-right 10px

// tags list
.tag-list
  margin-bottom 20px

.ui-tag__wrapper
  margin-right 18px
  margin-bottom 10px
  &last-child
    margin-right 0

.ui-tag
  .button-close
    &.active
      transform: rotate(45deg)
  &.used
    background-color #444ce0
    color #fff
    .button-close
      &:before,
      &:after
        background-color #fff
// Tag MEnu show
.tag-list--menu
  display flex
  justify-content space-between
  align-items center
// new tag input
.tag-add--input
  margin-bottom 0
  margin-right 10px
  height 42px
</style>
