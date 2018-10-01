<template>
    <div class="filmlist container-fluid">
        <ul class="list-group">
            <li class="list-group-item" v-for="(film, key) in films" :key="key">
              <img @click="open(film)" :src="film.img" class="rounded img-fluid float-left" width="60vh" alt="...">
              <h5>{{film.label}}</h5>
            </li>
        </ul>
        <pre> {{$data}} </pre>

        <sweet-modal  modal-theme="dark" overlay-theme="dark" ref="filmImage">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm">
                <img class="rounded" width="100%" :src="filmImage" alt="">
              </div>
              <div class="col-sm">
                <div> {{ filmInfo }} </div>
              </div>
            </div>
          </div>          
        </sweet-modal>
    </div>
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import DataBase from '@/content.json'
export default {
  components: {
    SweetModal,
    SweetModalTab
  },
  name: 'FilmList',
  data () {
    return {
      films: DataBase.films,
      filmImage: '',
      filmInfo: '',
      filmLabel: ''
    }
  },
  methods: {
    open: function (film) {
      this.filmImage = film.img
      this.filmInfo = film.info
      this.filmLabel = film.label
      this.$refs.filmImage.open()
    }
  }
}
</script>

<style>

</style>
