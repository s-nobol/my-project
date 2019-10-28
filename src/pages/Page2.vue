<template>

    <div>
        <h2>ページ2</h2>
        <h2>これはVueのてすとです</h2>
         <router-link to="/">ホーム</router-link>
         <router-link to="/page1">ページ1</router-link>
    </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
  methods:{
    onClickBurron(){
        alert("ボタンがクリックされました")
    }  
}
}
</script>


