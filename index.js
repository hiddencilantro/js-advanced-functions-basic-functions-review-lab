function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`;
}

function wrapAdjective(flair="*") {
    return function(param="special") {
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add: () => 1+3,
    subtract: () => 1-3,
    multiply: () => 1*3,
    divide: () => 10/5
};

function actionApplyer(int, arr) {
    return arr.reduce((accum, element) => {return element(accum)}, int);
}
