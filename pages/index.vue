<template>
  <div class="index">
    <Main />
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  async asyncData({ store }) {
    const photos = await store.dispatch('photos/getPhotos')
    return {
      photos,
    }
  }
};
</script> 
