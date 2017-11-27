import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    createdDate: DS.attr('string'),
    imageLocation: DS.attr('string'),
    sortOrder: DS.attr('number'),
    urlLocation: DS.attr('string'),
    urlIsInternal: DS.attr('boolean'),
    githubLocation: DS.attr('string')
});
