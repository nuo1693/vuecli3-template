<template>
  <div id="app">
    <A :name='name' ref='a' />
  </div>
</template>

<script>
import A from './components/a.vue';

export default {
  components: {
    A,
  },

  data() {
    return {
      name: 100,
    };
  },
  mounted() {
    this.$refs.a.isA();
  },
  created() {
    this.$api.loadHome().then((res) => {
      // debugger;
      console.log(res);
    });
  },
};
</script>
