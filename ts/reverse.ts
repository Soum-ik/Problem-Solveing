const reverseString = (str: string): string => {
    let newString: string = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }

    return newString;
}

console.log(reverseString('fuckyou'));
