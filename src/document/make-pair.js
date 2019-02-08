export const makePair = (mean, answer) => func => func(mean, answer);

export const getMean = pair => pair(mean => mean);

export const getAnswer = pair => pair((mean, answer) => answer);
