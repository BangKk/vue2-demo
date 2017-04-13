<template>
 <li class="list-item">
   <span class="sort">{{index + 1}}</span>
   <span class="img"><img :src="item.pic_small" :alt="item.title" :title="item.title"></span>
   <span class="item-title">
     <router-link :to="{ name: 'songDetail', params: { id: item.song_id }}">{{item.title}}</router-link>
   </span>
   <span class="author">{{item.artist_name}}</span>
   <audio controls="controls">
      <source src="../static/media/song.mp3" type="audio/mp3" />
      Your browser does not support this audio format.
   </audio>
 </li>
</template>
<script>
export default {
  name: 'item',
  props: ['item', 'index']
}
</script>
<style>
.list-item {
    background-color: #fff;
    padding: 15px 30px 15px 50px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 30px;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.list-item .sort{
    color: #f60;
    font-size: 1.1em;
    font-weight: 700;
    text-align: center;
}
.list-item span{
  margin-right: 30px;

}
.list-item .item-title{
  width: 20%;
}
.list-item .img{
}
.list-item .img img{
  vertical-align: middle;
  width: 45px;
  height: 45px;
}
.list-item .img img:hover {
  cursor: pointer;
}
.author{
  font-size: 12px;
  color: #666;
}
</style>
