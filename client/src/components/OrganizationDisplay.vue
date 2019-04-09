<template>
    <div class="row">
      <SingleOrgDisplay
        v-for="(org, index) in orgResults"
        v-bind:key="index"
        v-bind:org="org"
      >
      </SingleOrgDisplay>
    </div>
</template>

<script>
import SingleOrgDisplay from './SingleOrganizationDisplay';

export default {
  name: 'OrgDisplay',
  props: ['orgResults'],
  components: {
    SingleOrgDisplay
  }  
}
</script>
