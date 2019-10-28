<template>

    <div>
        <h2>こんにちはあああああ</h2>
        <h2>ホーム</h2>
        
         <router-link to="/page1">ページ1</router-link>
         <router-link to="/page2">ページ2</router-link>
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


