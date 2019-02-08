export const cons = (mean, answer) => func => func(mean, answer);

export const car = pair => pair(mean => mean);

export const cdr = pair => pair((mean, answer) => answer);
