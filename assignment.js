// Problem 1

function feetToMile(feet){
    var mile = 0.000189394 * feet;
    return mile;
}


// Problem 2

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var total = chairCount + tableCount + bedCount;

    return total;
}


// Problem 4

function tinyFriend(friend){
    var tiny = friend[0];

        for(var i = 0; i < friend.length; i++){
        var element = friend[i];
        if(element.length < tiny.length){
            tiny = element;
            return tiny;
   }
}
}


