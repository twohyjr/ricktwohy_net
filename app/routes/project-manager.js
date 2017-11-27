import Ember from 'ember';

export default Ember.Route.extend({
    loginService: Ember.inject.service(),
    beforeModel(){
        if(!this.get('loginService').get('isLoggedIn')){
            this.transitionTo('index');
        }
    },
    model(){
        return this.store.findAll('project');
    }
});
