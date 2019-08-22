<template>
  <div>
    <button>a组件{{name}}</button>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: Number,
    },
  },
  methods: {
    isA() {
      console.log('我在a组件');
    },
  },
};
</script>
