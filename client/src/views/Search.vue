<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="search-container">
          <h2 class="mb-4">Seach by location</h2>
          <p class="mb-4">Enter in the necessary information below to pull up shelters in your desired location.</p>
          <div class="form-row justify-content-center">
            <div class="form-group col-md-5">
              <label for="inputCity">City</label>
              <input placeholder="Enter City Name" type="text" class="form-control" id="inputCity"
                v-model="cityName"
                :class="{isInvalid: isInvalidSearch, isSuccessful: isSuccessfulSearch}"
              >
            </div>
            <div class="form-group col-md-5">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control"
                v-model="selectedState"
                :class="{isInvalid: isInvalidSearch, isSuccessful: isSuccessfulSearch}"
              >
                <option disabled selected>Choose...</option>
                <option
                  v-for="(state, index) in states"
                  v-bind:key="index" 
                  v-bind:value="state"
                >
                  {{state}}
                </option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <button class="btn btn-outline-secondary js-search-btn" type="button"
              v-on:click="onInputZipSearch"
              :class="{isInvalid: isInvalidSearch, isSuccessful: isSuccessfulSearch}"
            >
                Search <font-awesome-icon icon="paw" />
              </button>
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
        <div class="js-search-results" v-else-if="isInvalidSearch">
          <p>Please fix the errors above.</p>
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
      cityName: '',
      organizationResults: [],
      isLoading: false,
      isInvalidSearch: false,
      isSuccessfulSearch: false,
      states: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
      selectedState: ''
    }
  },
  components: {
    OrgDisplay
  },
  methods: {
    onInputZipSearch() {
      this.isLoading = true;
      client.organization.search({
        location: `${this.cityName}, ${this.selectedState}`,
        limit: 50
      })
      .then(response => {
        const res = response.data.organizations.filter(org => {
          return org.photos.length > 0;
        });
        return res;      
      })
      .then(data => {
        this.organizationResults = data;
        this.isLoading = false;
        this.isInvalidSearch = false;
        this.isSuccessfulSearch = true;
        console.log(this.organizationResults);
      })
      .catch(error => {
        this.isLoading = false;
        this.isInvalidSearch = true;
        this.isSuccessfulSearch = false;
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  /* .container {
    height: calc(100vh * 2);
  } */
  .form-group.col-md-2 {
    align-self: flex-end;
  }
  .isInvalid {
    border-color: #FF2C37;
  }
  .isSuccessful {
    border-color: green;
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

