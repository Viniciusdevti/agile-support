<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Falta de comunicação</span>
          <p>
          Por falta de comunicação, não foi possível dar continuidade ao atendimento. Tão logo tenhamos recebido retorno de conclusão da análise, entraremos em contato
            .
          </p>
        </div>
        <div class="card-action">
          <a href="#">
            <i class="material-icons" v-on:click="copiarTexto()">content_copy</i>
          </a>
          <a href="#">
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
<div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Falta de comunicação</span>
          <p>
          Por falta de comunicação, não foi possível dar continuidade ao atendimento. Tão logo tenhamos recebido retorno de conclusão da análise, entraremos em contato
            .
          </p>
        </div>
        <div class="card-action">
          <a href="#">
            <i class="material-icons" v-on:click="copiarTexto()">content_copy</i>
          </a>
          <a href="#">
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Falta de comunicação</span>
          <p>
          Por falta de comunicação, não foi possível dar continuidade ao atendimento. Tão logo tenhamos recebido retorno de conclusão da análise, entraremos em contato
            .
          </p>
        </div>
        <div class="card-action">
          <a href="#">
            <i class="material-icons" v-on:click="copiarTexto()">content_copy</i>
          </a>
          <a href="#">
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Falta de comunicação</span>
          <p>
          Por falta de comunicação, não foi possível dar continuidade ao atendimento. Tão logo tenhamos recebido retorno de conclusão da análise, entraremos em contato
            .
          </p>
        </div>
        <div class="card-action">
          <a href="#">
            <i class="material-icons" v-on:click="copiarTexto()">content_copy</i>
          </a>
          <a href="#">
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Falta de comunicação</span>
          <p>
          Por falta de comunicação, não foi possível dar continuidade ao atendimento. Tão logo tenhamos recebido retorno de conclusão da análise, entraremos em contato
            .
          </p>
        </div>
        <div class="card-action">
          <a href="#">
            <i class="material-icons" v-on:click="copiarTexto()">content_copy</i>
          </a>
          <a href="#">
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Falta de comunicação</span>
          <p>
          Por falta de comunicação, não foi possível dar continuidade ao atendimento. Tão logo tenhamos recebido retorno de conclusão da análise, entraremos em contato
            .
          </p>
        </div>
        <div class="card-action">
          <a href="#">
            <i class="material-icons" v-on:click="copiarTexto()">content_copy</i>
          </a>
          <a href="#">
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Acesso ao painel</span>
          <p >
            Cliente entrou em contato informando que não estava conseguindo acesso ao painel. Por favor tente novamente. 
          </p>
        </div>
        <div class="card-action">
          <a href="#">
            <i class="material-icons">content_copy</i>
          </a>
          <a href="#">
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>

    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Solicitação de usuário</span>
          <p>
            Estaremos encaminhando a solicitação do(a) usuario (a) para o setor competente realizar a analise.
            
          </p>
        </div>
        <div class="card-action">
          <a href="#"  >
            <i class="material-icons" >content_copy</i>
          </a>
          <a href="#" >
            <i class="material-icons">create</i>
          </a>
          <a href="#">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  </div>


  
</template>

<script>
export default {
  name: "Textos",
 
 data() {
   return{p1: []}
    
  },

 methods: {
       copiarTexto  () {
           
          this.p1 = " Por falta de comunicação, não foi possível dar continuidade ao atendimento. Tão logo tenhamos recebido retorno de conclusão da análise, entraremos em contato ."
           document.execCommand('copy');
            
 }

}
}
</script>

<style>
</style>