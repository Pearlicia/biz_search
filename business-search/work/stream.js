const calculateAverageRating = (ratings) => {

    let sum = 0;
    for (let rating of ratings) {
        sum += rating;
    }
    const result = sum / ratings.length;
    return result;

    


}

export { calculateAverageRating};

// 3 ways to loop an array

// 1

// let sum = 0;
// for (let i = 0; i < ratings.length; i++) {
 //   sum += ratings[i];
//}

// 2
// for (let i in ratings) {
 //   sum += ratings[i];

 // 3
// for (let rating of ratings) {
 //   sum += rating;