const CookingTime = (eggs) => {
    return Math.ceil(eggs/8) * 5;
}

console.log(CookingTime(0));
console.log(CookingTime(5));
console.log(CookingTime(10));
console.log(CookingTime(144));