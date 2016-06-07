var mergeSort = require("../../../lib/algorithms/11-sorting/mergeSort.js");

describe('When using MergeSort on an unsorted Array', function () {

	var unsortedLength = null;
	var sortedArray = null;

	beforeEach(function() {
		var unsortedArray = [10, 8, 3, 1, 7, 5, 9, 6];
		unsortedLength = unsortedArray.length;
		
		sortedArray = mergeSort(unsortedArray, 0, unsortedArray.length - 1);
		console.log(sortedArray);
	});

	it('the sorted array will not be null.', function () {
		expect(sortedArray).not.toBe(null);
	});

	it('a sorted array of the same length will be returned.', function () {
		expect(sortedArray.length).toEqual(unsortedLength);
	});

	it('the first element will be 1', function () {
		expect(sortedArray[0]).toEqual(1);
	});

	it('the last element will be 10', function () {
		expect(sortedArray[sortedArray.length - 1]).toEqual(10);
	});
});