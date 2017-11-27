import Ember from 'ember';

export default Ember.Controller.extend({
    sortedProjects: Ember.computed.sort('model', 'sortDefinition'),
    sortDefinition: ['sortOrder:asc'],
    actions:{
        addProject: function(){
            var project = this.store.createRecord('project', {
              title: 'New Project',
              imageLocation: 'assets/images/missingPhoto.png',
              sortOrder:0
            });
            project.save();
            this.send("updateProjectsSortOrder", 1);
        },
        updateProject: function(val){
            var id = val.get('id');
            var title = val.get('title');
            var description = val.get('description');
            var createdDate = val.get('createdDate');
            var imageLocation = val.get('imageLocation');
            var urlLocation = val.get('urlLocation');
            var urlIsInternal = val.get('urlIsInternal');
            var githubLocation = val.get('githubLocation');
            this.store.findRecord('project', id).then(function(project) {
                project.set('title', title);
                project.set('description', description);
                project.set('createdDate', createdDate);
                project.set('imageLocation', imageLocation);
                project.set('urlLocation', urlLocation);
                project.set('urlIsInternal', urlIsInternal);
                project.set('githubLocation', githubLocation);
                project.save();
            });
        },
        projectCardClicked: function(val){
            Ember.$("#" + val).slideToggle()
        },
        deleteProject: function(project){
            var projectId = project.get('id');
            var list = this.store;
            var controller = this;

            list.findRecord('project', projectId, {}).then(function(project) {
                project.deleteRecord();
                project.save().then(function(){
                    controller.send("updateProjectsSortOrder", 0);
                });
            });

        },
        movedProject: function(project, oldIndex, newIndex){
            const content = this.get('sortedProjects');
            content.removeAt(oldIndex);
            content.insertAt(newIndex, project);
            this.send("updateProjectsSortOrder", 0);
        },
        updateProjectsSortOrder: function(startingIndex){
            var i = startingIndex;
            this.get('sortedProjects').forEach(function(project){
                project.set('sortOrder', i);
                project.save();
                i++;
            });
        }
    }
});
