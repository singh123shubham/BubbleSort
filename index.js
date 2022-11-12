const bubble_Sort = (nums) => {
    if(!Array.isArray(nums)) return -1; // --->if passed argument is not array
    if(nums.length<2) return nums; // --->if array length is one or less
  
      let swapped=false
       temp=0,
       count=-1,
       arrLength=0;
  
  
      do{
        count ++;
        swapped=false;
        arrLength = (nums.length-1) - count; //---> not loop through sorted items
        for(let i=0; i<=arrLength; i++){
            if(nums[i]>nums[i+1]){
              temp=nums[i+1];
              nums[i+1]=nums[i];
              nums[i]=temp;
              swapped=true;
            }
        }
      }
  
      while(swapped)
      return nums;
    }
    console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));
  

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

bubbleSort(a);
console.log(a);

function bubblesort(items) {
    var length = items.length;
    //Number of passes
    for (var i = 0; i < length; i++) { 
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) { 
            //Compare the adjacent positions
            if(items[j] > items[j+1]) {
                //Swap the numbers
                var tmp = items[j];  //Temporary variable to hold the current number
                items[j] = items[j+1]; //Replace current number with adjacent number
                items[j+1] = tmp; //Replace adjacent number with current number
            }
        }        
    }
}
const items = [1,5,2,7,3,4,6]
bubblesort(items)
console.log(items)