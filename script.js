function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Example usage:
console.log(isLeapYear(2020)); 
console.log(isLeapYear(1900)); 



function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket price: $10 (Children)";
    } else if (age >= 13 && age <= 17) {
        return "Ticket price: $15 (Teenagers)";
    } else {
        return "Ticket price: $20 (Adults)";
    }
}

// Example usage:
console.log(getTicketPrice(10)); 
console.log(getTicketPrice(15)); 
console.log(getTicketPrice(20)); 






const fibonacciMemo = (function() {
    const memo = {};

    function fib(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;
        if (memo[n]) return memo[n]; 

        memo[n] = fib(n - 1) + fib(n - 2); 
        return memo[n];
    }

    return fib;
})();

// Example usage:
console.log(fibonacciMemo(5)); 
console.log(fibonacciMemo(10)); 
console.log(fibonacciMemo(50)); 













function isPalindrome(str) {
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        return checkPalindrome(s, left + 1, right - 1);
    }

    return checkPalindrome(normalizedStr, 0, normalizedStr.length - 1);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("Hello")); 