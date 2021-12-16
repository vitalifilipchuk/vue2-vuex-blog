<template>
  <div class="error-page">
    <div class="container">
      <h1>404</h1>
      <p>Вибачте, такої сторінки не існує.</p>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NotFound',
}
</script>

<style scoped>
  h1 {
    font-size: 48px;
    color: red;
  }
  
  p {
    text-align: center;
    font-size: 20px;
    color: red;
  }
</style>
