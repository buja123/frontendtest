<template>
  <div class="main-container">
    <div>
      <img src="@/assets/logo.png">
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
.main-container{
  max-width: 600px;
  margin: auto auto
}
</style>
