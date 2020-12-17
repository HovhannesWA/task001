<template>
  <div class="header">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
    <div class="icon_container">
      <img src="./../../assets/images/icon.png" alt="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FormHeader",
  props: {
    title: String,
    text: String,
  },
};
</script>

<style scoped>
.header {
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
}

.header > div {
    color: #19b9e7;
}

h2 {
    display: block;
    font-size: 2.5em;    
    font-weight: bold;
}

p {
    font-size: 2em;
}

img {
    width: 150px;
}
</style>