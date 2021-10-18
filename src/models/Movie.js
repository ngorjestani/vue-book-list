export default class Movie {
    constructor(title, genre, runTime, isSeen) {
        this.id = Math.floor(Math.random() * 10000);

        this.title = title;
        this.genre = genre;
        this.runTime = runTime;
        this.isSeen = isSeen;
    }

    getDetails() {
        // let titleHeader = document.createElement('h5');
        // let titleText = document.createTextNode(this.title);
        // titleHeader.appendChild(titleText);
        //
        // let genreHeader = document.createElement('h5');
        // let genreText = document.createTextNode(this.genre);
        // genreHeader.appendChild(genreText);
        //
        // let readHeader = document.createElement('h5');
        // let readText = document.createTextNode(this.isRead);
        // readHeader.appendChild(readText);
        //
        // let detailDiv = document.createElement('div');
        // detailDiv.appendChild(titleHeader);
        // detailDiv.appendChild(genreHeader);
        // detailDiv.appendChild(readHeader);
        //
        // return detailDiv;

        return `Title: ${this.title}, Genre: ${this.genre}, Run Time: ${this.runTime}, Read: ${this.isSeen}`;

    }
}