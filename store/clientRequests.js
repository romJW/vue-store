export const actions = {
  send(_, { name, phone, content, group }) {
    return this.$axios.post('/directus/items/client_requests/', {
      name,
      phone_number: phone,
      content,
      user_group: group
    })
  }
}
