<template lang="pug">
  .relative
  button.flex.items-center(href='#' @click='toggleVisibility' @keydown.space.exact.prevent='toggleVisibility' @keydown.esc.exact='hideDropdown' @keydown.shift.tab='hideDropdown' @keydown.up.exact.prevent='startArrowKeys' @keydown.down.exact.prevent='startArrowKeys')
    img.w-8.h-8(:src='`/flag_${$i18n.locale}.svg`' alt='flag')
    span.ml-2 {{ $i18n.locale.toUpperCase() }}
    svg(fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewbox='0 0 24 24' width='24' height='24')
      path.heroicon-ui(d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z')
  transition(name='dropdown-fade')
    ul.absolute.normal-case.z-30.font-normal.bg-white.shadow.overflow-hidden.rounded.w-48.border.mt-2.py-1(v-on-clickaway='hideDropdown' v-if='isVisible' ref='dropdown' class='xs:left-0 lg:right-0 lg:z-20')
      li
        a.flex.items-center.px-3.py-3(href='#' @click.prevent="setLocale('en')" ref='account' class='hover:bg-gray-200' @keydown.up.exact.prevent='' @keydown.tab.exact='focusNext(false)' @keydown.down.exact.prevent='focusNext(true)' @keydown.esc.exact='hideDropdown')
          img.h-8.w-8(src='/flag_en.svg' alt='english flag')
          span.ml-2 English

</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  data() {
    return {
      isVisible: false,
      focusedIndex: 0
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
      this.hideDropdown();
    }
  }
};
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
