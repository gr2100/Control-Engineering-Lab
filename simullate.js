

let values = new Map([
    [1,"Initial"],
    [2,"Step 2"],
    [3,"Step 3"],
    [4,"Step 4"],
    [5,"Step 5"],
    [6, "Step 6"],
    [7,"Step 7"],
    [8,"Step 8"],
    [9,"Step 9"],
    [10,"Step 10"],
    [11,"Step 11"],
    [12,"Step 12"],
    [13,"Final Step"],
])


let correctAnswers= new Map([
    ["Initial","G1*G2"],
    ["Step 2","G5+G6"],
    ["Step 3","1/(G5+G6)"],
    ["Step 4","H3/(G5+G6)"],
    ["Step 5","G4*(G5+G6)"],
    ["Step 6","1/G1G2"],
    ["Step 7","H3/G1G2(G5+G6)"],
    ["Step 8","G1G2G3"],
    ["Step 9","1&2"],
    ["Step 10","G1G2G3/(1+G1G2G3H1)"],
    ["Step 11","G4(G5+G6)/(1+G4H2(G5+G6))"],
    ["Step 12","G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)))"],
    ["Final Step","G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6))+G3G4H3)"]
]);

let description = new Map([
    ["Step 2","Reduce the blocks connected in parallel. Enter the value in the respective field. Click on the ‘SUBMIT PARALLEL GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 3","Shift the take-off point ahead or behind the block. Enter the derived value in the respective field. Click on the ‘SUBMIT THE TAKE-OFF SHIFT’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 4","Reduce the blocks connected in series. Enter the value in the respective field. Click on the ‘SUBMIT SERIES GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 5","Reduce the blocks connected in series. Enter the value in the respective field. Click on the ‘SUBMIT SERIES GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 6","Shift the summing point ahead or behind the block. Enter the derived value in the respective field. Click on the ‘SUBMIT THE SUMMING POINT SHIFT’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 7","Reduce the blocks connected in series. Enter the value in the respective field. Click on the ‘SUBMIT SERIES GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 8","Reduce the blocks connected in series. Enter the value in the respective field. Click on the ‘SUBMIT SERIES GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 9","Interchange/split/combine the summing point in the block. Enter the derived value in the respective field. Click on the ‘SUBMIT THE SUMMING POINT INTERCHANGE/SHIFT/COMBINE’ Button to check whether the user has derived it Right or Wrong. "],
    ["Step 10"," Eliminate the minor internal feedback loops with suitable rule. Enter the value in the respective field. Click on the ‘SUBMIT FEEDBACK LOOP GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 11","Eliminate the minor internal feedback loops with suitable rule. Enter the value in the respective field. Click on the ‘SUBMIT FEEDBACK LOOP GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Step 12"," Reduce the blocks connected in series. Enter the value in the respective field. Click on the ‘SUBMIT SERIES GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
    ["Final Step","Eliminate the minor internal feedback loops with suitable rule. Enter the value in the respective field. Click on the ‘SUBMIT FEEDBACK LOOP GAIN BLOCK’ Button to check whether the user has derived it Right or Wrong."],
])


let submit = document.getElementById("Submit");
let nextbtn = document.getElementById("NextBtn");
let ansres = document.getElementById("AnswerResponse_div");
let step = document.getElementById("step");
let value = document.getElementById("Answer");
let showAns = document.getElementById("ShowAnswerBtn");
let fin = document.getElementById("FinalBtn");
let hint = document.getElementById("HintBtn")
let proc = document.getElementById("Procedure");
let i=1;
let j = 1;
let tries = 0;


submit.addEventListener("click",()=>{ 
    console.log(tries);
    if(i>=13){
        fin.style.display="block";
        nextbtn.disabled=true;
        nextbtn.style.display="none";
    }
    ans = correctAnswers.get(values.get(i));
    if(value.value==ans){
        if(j>=13){
            proc.innerText="Congrats. You have completed lab. Now click Finish to view final image"
        }
        submit.disabled=true;
        ansres.innerHTML = "<p style=color:Green;margin-left:120px;margin-top:50px;font-size:1.5rem;>Excellent....Correct Answer!</p>";
        value.disabled = true;
        if(i<13){
            nextbtn.style.display = "block";
            if(nextbtn.disabled===true){
                nextbtn.disabled = false;
            }
        }
       
        if(showAns.style.display!="none"){
            showAns.style.display = "none";
        }
        
        i=i+1;
        j=j+1;
        nextbtn.addEventListener("click",()=>{  
            tries = 0;
            if(showAns.style.display=="block"){
                showAns.style.display = "none";
            }

            if(hint.style.display=="block"){
                hint.style.display = "none";
            }
            proc.innerText = description.get(values.get(j));
           
            value.value = "";
            submit.disabled = false;  
            if(showAns.disabled==true){
                showAns.disabled=false;
            }        
            nextbtn.style.display="none";
            value.disabled = false;
            let img = document.getElementById("The_Image");
            step.innerText = values.get(i);
            img.src = `Image${i}.png`;
            img.style.width = "50%";
        })
        fin.addEventListener("click",()=>{
            window.open("postlab.html","_parent");
        })
    }
    else{
        if(tries>=2){
            showAns.style.display="block";
        }
        else if(tries>=1){
            hint.style.display = "block";
        }
        let ansres = document.getElementById("AnswerResponse_div");
        ansres.innerHTML =  "<p style=color:Red;margin-left:120px;margin-top:50px;font-size:1.5rem;>Wrong Answer! Please Try Again</p>";
        let hiddenbtns = Array.from(document.getElementsByClassName("SimButtons_Hidden"));
        
        showAns.addEventListener("click",()=>{
            value.value=ans;
            showAns.disabled = true;
        })
        tries+=1;
    }
})