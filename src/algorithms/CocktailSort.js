import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

const CocktailSort = (nums) => {
  // Set up code for tracing the algorithm
  const trace = newTrace(nums);

  // Sorting Algorithm with trace capture
  var swapped = true;
   var start = 0;
   var end = nums.length - 1;
 
    while (swapped) 
    {
    
        swapped =false;
 
      
        for (let i = start; i < end; ++i) 
        {    addToTrace(trace, nums, lastSorted(trace), [i, i + 1]);
            if (nums[i] > nums[i + 1]) {
                swap(nums,i,i + 1);
                addToTrace(trace, nums, lastSorted(trace), [], [i, i + 1]);
                swapped = true;
            }
        }
 
        if (!swapped)
            break;
 
     
        swapped = false;
 
  
        --end;
 
        
        for (let i = end - 1; i >= start; --i) 
        {   addToTrace(trace, nums, lastSorted(trace), [i, i + 1]);
            if (nums[i] > nums[i + 1]) {
                  swap(nums,i,i + 1);
                addToTrace(trace, nums, lastSorted(trace), [], [i, i + 1]);
                swapped = true;
            }
        }
 
       
        ++start;
   
addToTrace(trace, nums, [...Array(nums.length).keys()]);
}

  return trace;
};



export const CocktailSortKey = createKey('Comparing', 'Swapping');
export const CocktailSortDesc = {
  title: 'Cocktail Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Cocktail_shaker_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cocktail Sort
      </a>{' '}
       is a variation of Bubble sort. The Bubble sort algorithm always
       traverses elements from left and moves the largest element to its correct position
       n first iteration and second largest in second iteration and so on. Cocktail Sort 
       traverses through a given array in both directions alternatively. 
       Each iteration of the algorithm is broken up into 2 stages: 
<ul>
<ol>1.The first stage loops through the array from left to right, just like the Bubble Sort. During the loop, 
adjacent items are compared and if value on the left is greater than the value on the right, 
then values are swapped. At the end of first iteration, largest number will reside at the end of the array.</ol>
<ol>2.The second stage loops through the array in opposite direction- starting from the item just before the most 
recently sorted item, and moving back to the start of the array. Here also, adjacent items are compared and are
 swapped if required.</ol></ul>
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>
};
export default CocktailSort;