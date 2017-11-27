import Ember from 'ember';

export default Ember.Route.extend({
    currentMovieToSearch: '',
    model(){
        var obj = {};
        var currentMovieToSearch = this.get('currentMovieToSearch');
        if(currentMovieToSearch !== '' && currentMovieToSearch !== null){
            obj = {query: this.get('currentMovieToSearch')};
        }
        return  this.store.query('movies-discover', obj);
    },
    actions: {
        updateCurrentMovie(movie){
            this.set('currentMovieToSearch', movie)
            this.refresh();
        }

    }
});
