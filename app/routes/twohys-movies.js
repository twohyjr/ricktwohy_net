import Ember from 'ember';

export default Ember.Route.extend({
    afterModel(){
        this.transitionTo('twohys-movies.discover');
    }
});
