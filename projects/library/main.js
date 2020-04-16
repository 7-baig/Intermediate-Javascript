// Congratulations, you’ve passed the grueling rigmarole of librarian school and have become head librarian at your local Books-‘N-Stuff.
// Just as you sit down, eager to utilize all those skills you learned in “Lib 203 - Shushing: How to Maintain Order While Spitting”, you realize you’re still using index cards to handle everything.
// But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.
// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD.

class Media {
    constructor(title) {
        this._title = title
        this._isCheckedOut = false
        this._ratings = [];
    }
    get title() {
      return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    set isCheckedOut(key) {
        this._isCheckedOut = key
    }
    get ratings() {
        return this._ratings
    }
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((acc, currentValue) => acc + currentValue)
        let lengthOfArray = this.ratings.length;
        return ratingsSum / lengthOfArray
    }
    toggleCheckOutStatus() {
            this._isCheckedOut = !this._isCheckedOut
    }
    addRating(rating) {
        this.ratings.push(rating)
    }
};
// Book Class that extends Media Class
class Book extends Media {
    constructor(author, title, pages) {
        super(title)
        this._author = author
        this._pages = pages
    }
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }
};
// Movie Class that extends Media Class
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title)
        this._director = director
        this._runTime = runTime
    }
    get director() {
        return this._director
    }
    get runTime() {
        return this.runTime
    }
};
// instances
// Book
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(2)
historyOfEverything.addRating(5)
historyOfEverything.addRating(4)
console.log(historyOfEverything.getAverageRating());
// Movie
const zodiac = new Movie('David Fincher', 'Zodiac', 242);
zodiac.toggleCheckOutStatus();
console.log(zodiac.isCheckedOut);
zodiac.addRating(9)
zodiac.addRating(7)
zodiac.addRating(6)
console.log(zodiac.getAverageRating());

//======> For more practice <========//
// Add more properties to each class (movieCast, songTitles, etc.)
// Create a CD class that extends Media.
// In .addRating(), make sure input is between 1 and 5.
// Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in   the songs property.
// Create class called Catalog that holds all of the Media items in our library.
