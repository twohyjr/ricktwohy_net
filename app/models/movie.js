import DS from 'ember-data';
import Ember from 'ember';

const {
    attr
} = DS;

export default DS.Model.extend({
    title: attr('string'),
    original_title: attr('string'),
    overview: attr('string'),
    poster_path: attr('string'),
    backdrop_path: attr('string'),
    release_date: attr('date'),
    video: attr('boolean'),
    vote_count: attr('number'),
    vote_average: attr('number'),
    popularity: attr('number'),
    genre_ids: attr(),
    formatted_poster_path_185: Ember.computed('poster_path', function(size,va){
        var posterPath = this.get('poster_path');
        if(posterPath !== '' && posterPath !== null){
            return "http://image.tmdb.org/t/p/w185/" + this.get('poster_path')
        }
        return '/assets/images/missingPhoto.png'
    }),
    formatted_poster_path_780: Ember.computed('poster_path', function(size,va){
        var posterPath = this.get('poster_path');
        if(posterPath !== '' && posterPath !== null){
            return "http://image.tmdb.org/t/p/w780/" + this.get('poster_path')
        }
        return '/assets/images/missingPhoto.png'
    })
});
