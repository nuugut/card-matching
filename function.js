const jwt = require('jsonwebtoken');

export const initCards = (cardsType) => {
    let id = 0
    let cards = []

    cardsType.map(type => {
        cards.push({id: id++, type: type})
        cards.push({id: id++, type: type})
    })
    return shuffleArray(cards)
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export const getMyBestScore = (myBestScoreJWT) => {
    const myBestScoreJson = jwt.verify(myBestScoreJWT, process.env.jwtSecret)
    return myBestScoreJson['my-best-score']
}