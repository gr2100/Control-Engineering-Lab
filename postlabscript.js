let score = 0;
function result1() 
{ 
    if(document.getElementById("corr1").checked)
    {
        score++;
    }
    if(document.getElementById("corr2").checked)
    {
        score++;
    }
    if(document.getElementById("corr3").checked)
    {
        score++;
    }
    if(document.getElementById("corr4").checked)
    {
        score++;
    }
    if(document.getElementById("corr5").checked)
    {
        score++;
    }
    alert("Your Score is:"+score+"/5")
 alert("Your Response Has Been Submited.");
 jsonObject={};
 const currentURL = new URL(window.location.href);
 let rno = currentURL.searchParams.get("rno");
 let exp = currentURL.searchParams.get("exp");
 jsonObject['exp']=exp;
 jsonObject['rno']=rno
 jsonObject[`postlabscore`]=score
 fetch('https://ngddxfrpg8.execute-api.us-east-1.amazonaws.com/test/postlabscoreupdate', {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(jsonObject)
})
.then(response => response.json())
.then(data => {
console.log("data",data);

})
.catch(error => {
console.error('Error during fetch operation:', error);
});
window.open("MainPageStudent.html","_parent");
}
 //postlab
 {
    var posttimer = document.getElementById('countdown1');
    const start = 15;
    let time = start*60;
    let pre = setInterval(postruncountdown,1000);
    function postruncountdown()
    {
        const minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds<10 ? '0'+seconds : seconds;
    posttimer.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if(time<0)
{
    clearInterval(pre)
    alert("Times Up!! Your Response Has Been Automatically Submited.");
    window.open('home.html',"_parent");
    }
}
}

