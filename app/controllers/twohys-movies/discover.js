import Ember from 'ember';

export default Ember.Controller.extend({
    txtCurrentMovie: '',
    sortedMovies: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['vote_average:desc'],
    setTheCurrentMovieToSearch: Ember.observer('txtCurrentMovie', function(){
        var movie = this.get('txtCurrentMovie');
        this.send('updateCurrentMovie', movie);
    })
});
