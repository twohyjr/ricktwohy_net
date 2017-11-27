import Ember from 'ember';

export default Ember.Component.extend({
    project: null,
    selectedModalImageLocation: '',
    linkToProjectText: Ember.computed('project',function(){
        var projectLocation = this.get('project.urlLocation');
        var title = this.get('project.title');
        return projectLocation !== '' && projectLocation !== null ? `Check Out ${title} Here` : '';
    }),
    projectLocation: Ember.computed('project',function(){
        var projectLocation = this.get('project.urlLocation');
        return projectLocation !== null && projectLocation !== '' ? projectLocation : 'projects';
    }),
    targetLocation: Ember.computed('project',function(){
        var isInternal = this.get('project.urlIsInternal');
        return isInternal ? '_self' : '_blank';
    }),
    githubLocationShowStatus: Ember.computed('project',function(){
        return this.get('project.githubLocation') !== '' && this.get('project.githubLocation') !== null ? 'initial' : 'none';
    }),
    actions: {
        toggleImageModal: function(imageLocation) {
          this.toggleProperty('isShowingImageModal');
          this.set('selectedModalImageLocation', imageLocation);
        },
        resetImageModal: function(){
          this.toggleProperty('isShowingImageModal');
          this.set('selectedModalImageLocation', '');
        }
    }
});
