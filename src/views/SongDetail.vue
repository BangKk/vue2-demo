<template>
  <div class="view">
    <div class="song-C">
      {{song}}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    song () {
      let songs = this.getSongs()
      let song
      songs.map((item) => {
        if (item['song_id'] === this.$route.params.id) {
          song = item
        }
      })
      return song
    }
  },
  methods: {
    getSongs () {
      let songs = []
      if (!this.$store.state.music.newS.length && !this.$store.state.music.newS.length) {
        let module = this.$store.getters.modules
        module.map(item => {
          this.$store.dispatch('getMusicItem', item.type)
        })
      }
      songs = this.$store.state.music.newS.concat(this.$store.state.music.hotS)
      return songs
    }
  }
}
</script>
<style>
.view{
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-top: 45px;
}
.song-C{
  width: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  background-color: #fff;
  border-radius: 2px;
}
</style>
