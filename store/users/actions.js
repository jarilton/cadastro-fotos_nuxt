export default {
      getUsers({ commit }) {
            return this.$axios.$get("https://jsonplaceholder.typicode.com/users")
                  .then((response) => {
                        commit('STORE', response)
                  })
      }
}