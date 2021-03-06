import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects');
  this.route('experience');

  this.route('twohys-movies', function() {
    this.route('discover');
  });
  this.route('project-manager');
});

export default Router;
