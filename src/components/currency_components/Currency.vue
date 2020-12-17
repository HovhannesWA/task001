<template>
  <div class="main">
    <div class="currencyes">
      <div class="select_container">
        <select name="base" id="base" v-model="base_currency" @change="change_base_curr">          
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="AMD">AMD</option>
        </select>
      </div>      
      <div class="cur usd">
        <p class="location">USD</p>
        <p class="val">{{exchanges.USD}}</p>
      </div>
      <div class="cur eur">
        <p class="location">EUR</p>
        <p class="val">{{exchanges.EUR}}</p>
      </div>
      <div class="cur rub">
        <p class="location">RUB</p>
        <p class="val">{{exchanges.RUB}}</p>
      </div>
      <div class="cur amd">
        <p class="location">AMD</p>
        <p class="val">{{exchanges.AMD}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "currency",
  data: function () {
    return {
      base_currency: "AMD",
      apiKey: "fa287fffa6a1bbab3646ab5f",
      base_url: "https://v6.exchangerate-api.com/v6/",
      exchanges: {
          AMD: 0,
          USD: 0,
          EUR: 0,          
          RUB: 0
      }
      //   url: `${this.base_url}${this.apiKey}/latest/${this.base_currency}`
    };
  },
  mounted() {
    this.change_base_curr()
  },
  methods: {
      change_base_curr (){          
          axios.get(this.myUrl).then( async(res) => {
              let cr = await res.data.conversion_rates              
              for(let i in this.exchanges){
                  this.exchanges[i] = cr[i]
              }
          } );
      }
  },
  computed: {
    myUrl() {
      return `${this.base_url}${this.apiKey}/latest/${this.base_currency}`;
    },
  },
};
</script>s

<style scoped>
.main {
  height: 500px;
  background-color: honeydew;
}

.select_container {
  display: flex;
  justify-content: center;
  align-items: center;  
}

select {
    width: 100px;
    height: 50px;    
}

.currencyes {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
}

.cur {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.cur > p {
    margin: 10px;
}

.location {
    font-weight: bold;
    font-style: italic;
    font-size: 2em;
}

.location::after {
    content: '';
    display: block;
    /* width: 100px; */
    border-bottom: 2px solid black;
}

.val {
    color: darkgreen;
    font-size: 1.5em;
}
</style>