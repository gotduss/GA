//Arrays
const myArray = ['I', 'would', 'like', 'to', 'say']
// 1. Add 'hello' to the end of the array
const newArray = [...myArray, 'hello']
console.log('1.', newArray)
// 2. Replace the first element in the array with 'Fred'

// 3. Add 'you' in between 'like', and 'to' and add 'goodbye' at the end.

// 4. Remove 'like' and 'to' from the array (by index)

// 5. Sort the array

console.log('Initial array', myArray)

// const lapTimes = [2.34, 2.15, 2.93, 2.03, 1.98, 2.1, 2.16, 2.39, 2.42, 2.28]

// const temp = [...lapTimes]
// const findBestLapTime = (lap) => {
// 	temp.sort((a, b) => b - a)
// 	return temp[lap.length - 1]
// }

// const bestLapTime = findBestLapTime(lapTimes)

// temp.map((lapTime, i) => {
// 	if (bestLapTime === lapTime) {
// 		console.log(`Lap ${i + 1}: ${lapTime} - Best lap!`)
// 	} else {
// 		console.log(`Lap ${i + 1}: ${lapTime}`)
// 	}
// })
// console.log(lapTimes)

// const names = ['Fred', 'Sally', 'Mary']

// // const names2 = names
// // names2.push('Bob')
// // const names2 = [...names]
// const names2 = []
// names2.push(...names)
// names2.push('Bob')
// console.log(names)
// console.log(names2)
