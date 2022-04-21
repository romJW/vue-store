export const state = () => ({
  isMobileMenuOpen: false
})

export const mutations = {
  toggleMobileMenu (state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen
  },
  closeMobileMenu (state) {
    state.isMobileMenuOpen = false
  }
}
