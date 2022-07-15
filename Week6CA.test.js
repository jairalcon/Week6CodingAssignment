const expect = chai.expect;

// Wanting to test that 26 cards have been dealt to each player's hand
describe('#Deck, #Player constructors', function() {
    it("should save half the deck to a Player.hand[ ]", function() {
        // Arrange
        
        // Act
        const newDeck = new Deck();
        // console.log('This is a new deck', newDeck);
        newDeck.buildDeck();
        // console.log('This is a built deck', newDeck);
        newDeck.shuffleDeck();
        // console.log('This is a shuffled deck', newDeck);
        newDeck.returnDeck();
        // console.log('This deck has been returned', newDeck);

        const newPlayer1 = new Player();
        const newPlayer2 = new Player();
        
        //* testing
        // console.log('This is player 1', newPlayer1);
        // console.log('This is player 2', newPlayer2);
        for (let x = 0; x < 26; x++) {
            newPlayer1.takeOneCard(newDeck.dealACard())
            newPlayer2.takeOneCard(newDeck.dealACard())
        }
        
        //*testing
        // console.log('player 1 should have a hand', newPlayer1.hand);
        // console.log('player 2 should have a hand', newPlayer2.hand);
        // console.log(newPlayer1.hand.length)
        
        // Assert
        expect(newPlayer1.hand.length).to.be.equal(26);
        expect(newPlayer2.hand.length).to.be.equal(26);        
    });

    // testing to make sure Deck is an object    
    describe('#Deck constructor', function(){
        it("Ensure constructor creates a new instance of the Deck ", function(){
            testDeck1 = new Deck();
            expect(testDeck1).to.be.an('object');
        });
    });    
});