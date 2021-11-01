<template>
  <div class="dial-pad">
    <div class="dial-pad__button mb-2">
      <app-dial-button number="1"></app-dial-button>
      <app-dial-button number="2"></app-dial-button>
      <app-dial-button number="3"></app-dial-button>
    </div>
    <div class="dial-pad__button mb-2">
      <app-dial-button number="4"></app-dial-button>
      <app-dial-button number="5"></app-dial-button>
      <app-dial-button number="6"></app-dial-button>
    </div>
    <div class="dial-pad__button mb-2">
      <app-dial-button number="7"></app-dial-button>
      <app-dial-button number="8"></app-dial-button>
      <app-dial-button number="9"></app-dial-button>
    </div>
    <div class="dial-pad__button mb-2">
      <app-dial-button number="#"></app-dial-button>
      <app-dial-button number="0"></app-dial-button>
      <app-un-dial-button number="<="></app-un-dial-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppDialPad'
}
</script>

