import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
    twohysMovies: Ember.inject.service(),
    host: 'https://api.themoviedb.org',
    namespace: '/3/movie/upcoming',
    buildURL (modelName, id, snapshot, requestType, query){
        if(query && Object.keys(query).length){
            this.set('namespace', '/3/search/movie');
        }else{
            this.set('namespace', '/3/movie/upcoming');
        }
        return this.get('host') + this.get('namespace') + '?api_key=' + this.get('twohysMovies').ApiKey;
    }
});
