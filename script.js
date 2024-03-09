let input = document.getElementById('input');
const btn = document.getElementById('btn');
let display = document.querySelector('.ageDisplay');

// using this code can only select past date or today's date
input.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let dob = new Date(input.value);
    let d1 = dob.getDate();
    let m1 = dob.getMonth() + 1; 
    // +1 is adding because month start from 1 not 0
    let y1 = dob.getFullYear();
    
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1)
    {
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0)
    {
        m3 = 11;
        y3--;
    }

    display.innerHTML = "You are <span style='color: #ffff76'>"+ y3 +"</span> years, <span style='color: #ffff76'>"+ m3 +"</span> months and <span style='color: #ffff76'>"+ d3 +"</span> days old";
    

}

function getDaysInMonth(year,month){
    return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", function(){
    if(input.value === "")
    {
        alert("Please Select Date");
    }
    else{
        calculateAge();
    }
   
});