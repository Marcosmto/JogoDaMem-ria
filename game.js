const game = {

    techs : ['bootstrap',
    'css',
    'electron',
    'firabase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'],
    
    cards : null,

    createCardsFromTechs: function(){

        this.cards = [];
    
        this.techs.forEach((tech)=> {
            this.cards.push(this.createPairFromTech(tech));
        })
    
        this.cards = this.flatMap(pair => pair);
        this.shuffleCards();
        // return this.cards;
    },
    
    createPairFromTech: function(tech){
    
        return[{
            id: this.createIdwithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdwithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },
    
    createIdWithTech: function(tech){
        return tech + parseInt(Math.random() *1000);
    },

    shuffleCards: function(cards){
        let currentIndex = this.cards.length;
        let randomindex = 0;
    
        while (currentIndex != 0){
    
            randomindex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomindex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomindex]]
        }
    }


}