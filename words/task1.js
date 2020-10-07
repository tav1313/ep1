run1(7);

function run1(num) {
    let currNum = num;

    while (true) {
        let isAgile = false,
            isSoftware = false;

        let result = currNum % 5;
        if (result == 0) {
            isAgile = true;
            console.log('Agile');
        }

        result = currNum % 3;
        if (result == 0) {
            isSoftware = true;
            console.log('Software');
        }

        if (isAgile && isSoftware) {
            console.log('Testing');
        } else {
            console.log(num);
        }

        currNum -= 1;

        if (currNum < 1) break;
    }
}