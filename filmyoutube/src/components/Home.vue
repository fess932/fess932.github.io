<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        form(@submit.prevent="onSubmit")
          .form-item(:class="{ errorInput: $v.taskTitle.$error }")
            input(
              type="text"
              placeholder="What we will watch?"
              v-model="taskTitle"
              @change="$v.taskTitle.$touch()"
              :class="{ error: $v.taskTitle.$error }"
            )
            .error(v-if="!$v.taskTitle.required") Title is required.
          .form-item
            input(
              type="text"
              placeholder="Image url"
              v-model="image"
              @keyup.enter="newTask"
            )
          .form-item
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
          // TAGS LIST
          // add new tag button
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
          transition(name="fade")
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
            transition-group(
              enter-active-class="animated fadeInRight"
              leave-active-class="animated fadeOutDown"
            )
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
          .button-list
            button.button.button--round.button-primary(
              type="submit"
              :disabled="submitStatus === 'PENDING'"
            ) Send
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  created () {
    console.log(this.$lodash.isEmpty(null));
  },
  data () {
    return {
      submitStatus: null,
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Anime',
      image: "",
      tagMenuShow: false,
      tagTitle: "",
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
      tagsUsed: []
    }
  },
  validations: {
    taskTitle: {
      required
    }
  },
  methods: {
    newTag() {
      if (this.tagTitle === '') {
        return
      }
      const tag = {
        title: this.tagTitle,
        use: false
      }
      this.$store.dispatch('newTag', tag)
    },
    // SUBMIT NEW TASK
    onSubmit  () {
      this.$v.$touch()


      if(this.$v.$invalid){
        console.log('ERROR')
        this.submitStatus = 'ERROR'
      } else {
        console.log("SEND")
        this.submitStatus = 'PENDING'

        //firebase waiting
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)

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
          title: this.taskTitle,
          description: this.taskDescription,
          whatWatch: this.whatWatch,
          time,
          tags: this.tagsUsed,
          completed: false,
          editing: false
        }
        this.$store.dispatch('newTask', task)
        console.table(task)

        // RESET
        this.taskTitle = ''
        this.taskDescription = ''
        this.$v.$reset()

        //reset for tags
        this.tagsUsed = []
        this.tagMenuShow = false
        this.tagTitle = ''

        for (let i = 0; i < this.tags.length; i++){
          this.tags[i].use = false
        }
      }

      // time




    },
    addTagUsed(tag) {
      tag.use = !tag.use
      if(tag.use) {
        this.tagsUsed.push({
          title: tag.title
        })
      } else {
        ////////////////////// remove obj from array
        _.remove(this.tagsUsed, n => n.title === tag.title)
      }
    },
    getHoursAndMinutes(minutes) {
      let hours = Math.trunc(minutes / 60)
      let min = minutes % 60
      return `${hours} Hours ${min} Minutes`
    }
  },
  computed: {
    tags () {
      return this.$store.getters.tags
    },

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
// btutton enter
.button-list
  display flex
  justify-content flex-end

//
// Validate
//
.form-item
  .error
    display none
    margin-bottom 8px
    font-size 13.4px
    color #fc5c65
  &.errorInput
    .error
      display block
input
  &.error
    border-color #fc5c65
</style>
