<template>
  <div class="hompage flex justify-center">
    <div class="h-screen flex flex-col">
      <h1 class="font-sans text-center text-4xl">Codexify</h1>
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
  name: 'homepage'
}
</script>
