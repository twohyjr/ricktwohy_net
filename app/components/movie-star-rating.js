import Ember from 'ember';

export default Ember.Component.extend({
    movie: null,
    starList: [],
    willRender(){
        this.get('starList').clear();
        let movieRating = this.get('movie.vote_average');
        let starList = this.get('starList');
        for(var i = 0; i < 10; i++){
            var starToUse = ""
            if(movieRating >= .8){
                starToUse = "fullStar.png";
            }else if(movieRating >= .25 && movieRating <= 0.8){
                starToUse = "halfStar.png";
            }else{
                starToUse = "emptyStar.png";
            }
            movieRating--;

            starList.push(`<img src="/assets/images/ratings/${starToUse}" style="width: 25px;" />`);
        }
        this.set('starList', starList);

    }
});
