<template>
  <router-link to="/medicines" id="btn" class="bg-accent text-white"
    ><span>Confira os preços</span></router-link
  >
</template>

<style scoped>
#btn {
  border: 2px double transparent;
  border-radius: 10px;
  font-family: "DM Sans", sans-serif;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  width: 300px;
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
}

#btn:hover {
  transform: scale(1.05);
}
</style>
