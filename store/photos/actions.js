export default {
      getPhotos({ commit }) {
            return this.$axios.$get("photos")
                  .then((response) => {
                        commit('STORE', response);
                        return response;
                  })
      },
      async submitPhotos({ commit, state }, payload) {
            try {
                  const { data } = await this.$axios.$post("photos", payload)
                        commit('SUBMITPHOTOS', payload)

            } catch (error) {
                  return error
            }
      }
}