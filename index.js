
const functions = {
    
    revert: function(str){

        if(str==" ")
        return "empty string";
        
        return str.split("").reverse().join("");
    
    },

    bubblesort: function(list){
            
            let i;
            let j;
            let stop;
    
       
    
            try{
                if(typeof list == null){
                return null;
            }
    
            let len = list.length;
            
            if(len==0){
                return "Empty list";
            }
    
            for (i=0; i<len; i++)
            {
                for(j=0, stop=len-i; j<stop; j++)
                {
                    if(list[j] >list[j+1]){
                        functions.swap(list,j,j+1);
                    }
                }
            }
        }
    
        catch(err){
            console.log(err);
        }
       
        return list;
    },

    swap: (arr, first , second) => {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}

module.exports = functions;