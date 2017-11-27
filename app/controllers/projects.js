import Ember from 'ember';

export default Ember.Controller.extend({
    sortedProjects: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['sortOrder:asc'],
});
