import Ember from 'ember';

export default Ember.Component.extend({
    movie: null,
    isShowingMovieModal: false,
    actions:{
        showMovieModal: function() {
          this.toggleProperty('isShowingMovieModal');
        },
        resetMovieModal: function(){
          this.toggleProperty('isShowingMovieModal');
        }
    }
});
