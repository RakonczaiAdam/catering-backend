exports.generate = () => {
    let couponCode = "";
    const chars = "aAbB0cCeE1fFgG2hHiI3jJkK4lLmM5nNoO6pPqQ7rRsS8tTuU9vVwWxXyYzZ"
    for(let i = 1; i <= 9; i++){
        couponCode += chars.charAt(Math.floor(Math.random()*chars.length))
        if(i % 3 === 0 && i < 9){
            couponCode += " "
        }
    }
    return couponCode;
}