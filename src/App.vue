<template>
  <div>
    <my-footer v-show="!(this.$route.path =='/')"></my-footer>
    <router-view/>
  </div>
</template>


