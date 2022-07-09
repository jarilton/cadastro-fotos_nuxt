export default {
      getPhotos({ commit }) {
            return this.$axios.$get("photos")
                  .then((response) => {
                        commit('GET_PHOTOS', response);
                        return response;
                  })
      },
      async submitPhotos({ commit, state }, payload) {
            try {
                  const { data } = await this.$axios.$post("photos", payload)
                  commit('SUBMIT_PHOTOS', payload)

            } catch (error) {
                  return error
            }
      },
      editPhotos({ commit }) {
            return this.$axios.$put("photos")
                  .then(response => {
                        commit('EDIT_PHOTOS', response);
                        return response;
                  })
      },
      async deletePhotos(context, id) {
            if (confirm("Deseja realmente excluir a foto?")) {
                  try {
                        return this.$axios.$delete(`photos/${id}`)
                  } catch (error) {
                        return error
                  }
            }
      },
}