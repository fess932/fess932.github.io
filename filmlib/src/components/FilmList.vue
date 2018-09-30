<template>
    <div class="filmlist container-fluid">
        <ul class="list-group">
            <li class="list-group-item" v-for="(film, key) in films" :key="key">
              <img @click="open(film.img)" :src="film.img" class="rounded img-fluid float-left" width="60vh" alt="...">
              <h5>{{film.label}}</h5>

              <sweet-modal ref="modal">
               Success!
              </sweet-modal>

            </li>
        </ul>
        <pre> {{$data}} </pre>

        <sweet-modal ref="filmImage">
          <img :src="filmImage" alt="">
        </sweet-modal>
    </div>
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import films from '@/content.json'
export default {
  components: {
    SweetModal,
    SweetModalTab
  },
  name: 'FilmList',
  data () {
    return {
      films: films,
      filmImage: ""
    }
  },
  methods: {
    open: function (img) {
      this.filmImage = img
      this.$refs.filmImage.open()
    }
  }
}
</script>

<style>

</style>
