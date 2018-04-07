//Selection sort
function selectionSort(input) {
    //select first index as min
    for (var i = 0; i < input.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < input.length; j++) {
            if (input[j] < input[min]) {
                min = j;
            }
        }
        if (i != min) {
            swap(input, i, min);
        }
    }
}
//bubble sort
function bubbleSort(input) {
    for (var i = 0; i < input.length - 1; i++) {
        var swapDone = false;
        for (var j = 0; j < input.length - 1 - i; j++) {
            if (input[j] > input[j + 1]) {
                swap(input, j, j + 1);
                swapDone = true;
            }
        }
        if (!swapDone) {
            break;
        }
    }
}
//insertion sort

function insertionSort(input) {
    //consider first element as part of sorted array and assume all remaining items are unsorted.
    for (var i = 1; i < input.length; i++) {
        //iterate over remaining array
        //take one element value and reverse iterate over sorted array
      //to put it at proper place.
        var element = input[i];
        //take last element index from sorted array
        var j = i - 1;
        while (j >= 0 && input[j] > element) {
            //move elements to right
            input[j + 1] = input[j];
            j--;
        }
        //we moved elements to right means there is space left at index = j. but j was done j-- so we need to correct it
        input[j + 1] = element;
    }
}
//merge sort
function mergeSort(input){
    if(input.length < 2){
        return;
    }
    var midIndex = Math.floor(input.length / 2);
    var left = [];
    var right = [];
    for(var i=0; i < midIndex; i++){
        left.push(input[i]);
    }
    for(var i= midIndex; i < input.length; i++){
        right.push(input[i]);
    }
    mergeSort(left);
    mergeSort(right);
    merge(left, right, input);
}
function merge(left, right, input){
    var i = 0;
    var j = 0;
    var k = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            input[k] = left[i];
            i++;
        }else{
            input[k] = right[j];
            j++;
        }
        k++;
    }
    while(i < left.length){
        input[k] = left[i];
        i++;
        k++;
    }
    while(j < right.length){
        input[k] = right[j];
        j++;
        k++;
    }
}
//quick sort
//heap sort

var input = [10, 8, 4, 2, 3];
selectionSort(input);
console.log(input);
function swap(input, i, j) {
    var temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}