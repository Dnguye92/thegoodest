<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="search-container">
          <h2 class="mb-4">Seach by location</h2>
          <p class="mb-4">Enter in the necessary information below to pull up shelters in your desired location.</p>
          <!-- <div class="input-group">
            <input type="text" class="form-control" placeholder="Zipcode" v-model="inputValue">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary js-search-btn" type="button" v-on:click="onInputZipSearch">Search</button>
            </div>
          </div> -->
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" v-model="inputValue">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option
                  v-for="(state, index) in states"
                  v-bind:key="index" :value="state"
                >
                  {{state}}
                </option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <button class="btn btn-outline-secondary js-search-btn" type="button" v-on:click="onInputZipSearch">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-12">
        <div v-if="isLoading">
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        <div class="js-search-results" v-else>
          <OrgDisplay
            v-bind:orgResults="organizationResults"
          >
          </OrgDisplay>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Client } from '@petfinder/petfinder-js';
import OrgDisplay from './../components/OrganizationDisplay';
const client = new Client({apiKey: process.env.VUE_APP_API_KEY , secret: process.env.VUE_APP_SECRET});

export default {
  name: 'Search',
  data() {
    return {
      inputValue: '',
      organizationResults: [],
      isLoading: false,
      states: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
    }
  },
  components: {
    OrgDisplay
  },
  methods: {
    onInputZipSearch() {
      console.log(this.inputValue);
      this.isLoading = true;
      client.organization.search({
        limit: 25
      })
      .then(response => {
        const res = response;
        return res;      
      })
      .then(data => {
        this.organizationResults = data.data.organizations;
        this.isLoading = false;
        console.log(this.organizationResults);
      })
      .catch(error => {
        this.isLoading = false;
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>
  .container {
    height: calc(100vh * 2);
  }
  .form-group.col-md-2 {
    align-self: flex-end;
  }
  .js-search-btn:hover {
    background-color: #FF2C37;
    border-color: #FF2C37;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #FF2C37;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #FF2C37 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>

