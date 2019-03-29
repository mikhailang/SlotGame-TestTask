function spin () 
{
    console.log("Triggered");

    // PopulateArray

    var arr = [{name:'Reel/2xBAR.png',value:20,bottomValue:20,topValue:20},{name:'Reel/3xBAR.png',value:50,bottomValue:20,topValue:20},{name:'Reel/7.png',value:150,bottomValue:20,topValue:20},{name:'Reel/BAR.png',value:10,bottomValue:20,topValue:20},{name:'Reel/Cherry.png',value:1000,bottomValue:4000,topValue:2000}];
    //console.log(arr);

    for(var i=1;i<10;i++)
    {
        var random = Math.floor(Math.random() * 5);
        var currPos = document.getElementById("Pos" +i);
        //console.log(currPos);
        //console.log(random);
        currPos.src = arr[random].name;
        currPos.setAttribute("val",random);
    }

    // RandomLoopThroughArray
    // SetImages
    // DoIHaveMatching


    var totalWin = 0;

    var col1 = document.getElementById("Pos2").getAttribute("val");
    var col2 = document.getElementById("Pos5").getAttribute("val");
    var col3 = document.getElementById("Pos8").getAttribute("val");
    //console.log(col1);
    //console.log(col2);
    //console.log(col3);
    if(col1==col2 && col1==col3 && col2==col3)
    {
        var img = document.getElementById("Pos2").getAttribute("src");
        var item = document.getElementById("Pos2").getAttribute("val");
        var win = arr[item].value;
        totalWin += win;
        console.log(win);
        console.log(img);
        console.log("Jackpot");

    }

    var Topcol1 = document.getElementById("Pos1").getAttribute("val");
    var Topcol2 = document.getElementById("Pos4").getAttribute("val");
    var Topcol3 = document.getElementById("Pos7").getAttribute("val");
    //console.log(col1);
    //console.log(col2);
    //console.log(col3);
    if(Topcol1==Topcol2 && Topcol1==Topcol3 && Topcol2==Topcol3)
    {
        var img = document.getElementById("Pos4").getAttribute("src");
        var item = document.getElementById("Pos4").getAttribute("val");
        var win = arr[item].topValue;
        totalWin += win;
        console.log(win);
        console.log(img);
        console.log("Jackpot");

    }

    var Bottomcol1 = document.getElementById("Pos3").getAttribute("val");
    var Bottomcol2 = document.getElementById("Pos6").getAttribute("val");
    var Bottomcol3 = document.getElementById("Pos9").getAttribute("val");
    //console.log(col1);
    //console.log(col2);
    //console.log(col3);
    if(Bottomcol1==Bottomcol2 && Bottomcol1==Bottomcol3 && col2==Bottomcol3)
    {
        var img = document.getElementById("Pos6").getAttribute("src");
        var item = document.getElementById("Pos6").getAttribute("val");
        var win = arr[item].bottomValue;
        totalWin += win;
        console.log(win);
        console.log(img);
        console.log("Jackpot");

    }

    var winMeter = document.getElementById("winMeter");
    winMeter.textContent = win;

    if(win==undefined)
    {
        var winMeter = document.getElementById("winMeter");
        winMeter.textContent = 0;
    }

    // PopulateArray
}

function paytable()
{

}
