export default {
      getPhotos({ commit }) {
            return this.$axios.$get("photos")
                  .then((response) => {
                        commit('STORE' ,response);
                        return response;
                  })
      }
}