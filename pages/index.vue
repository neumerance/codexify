<template>
  <div class="hompage flex justify-center">
    <div class="homepage__dial-box h-screen flex flex-col">
      <app-session-form>
        <template v-slot:join-session>
          <app-join-session></app-join-session>
        </template>
        <template v-slot:create-session>
          <app-create-session></app-create-session>
        </template>
      </app-session-form>
    </div>
  </div>
</template>

<script>
import AppSessionForm from "../components/AppSessionForm.vue"

export default {
  name: 'homepage',
  scrollToTop: true,
}
</script>
<style scoped>
  .hompage {
     background: rgb(48,48,48);
     background: linear-gradient(0deg, rgba(48,48,48,1) 0%, rgba(106,106,107,1) 40%, rgba(106,106,107,1) 76%, rgba(32,30,30,1) 100%);
  }
  .homepage__dial-box {
    justify-content: center;
  }
</style>
