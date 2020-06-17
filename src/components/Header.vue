<template>
  <nav>
    <div class=" nav-wrapper purple darken-4 text12">
      <a href="/" class="brand-logo " >Agile support</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/Textos">Textos rápidos</router-link>
        </li>
        <li>
          <router-link to="/lembretes">
            Lembretes
            <a class="btn-floating pulse purple darken-1">
              <i class="material-icons">drafts</i>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/acesso">Acessos</router-link>
        </li>
      </ul>
    </div>
    <i class="large material-icons">insert_chart</i>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>

a{
  font-family: 'Sriracha', cursive;
  font-size: 50px;

}
</style>