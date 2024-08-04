var months=[31,28,31,30,31,30,31,31,30,31,30,31];

function leapyear(year){
    if(year%4==0 && (year%100!=0 || year%400==0))
    {
        months[1]=29;
    }
    else{
        months[1]=28;
    }
}


 function age(){
    let todayDate=new Date();
    let month=todayDate.getMonth()+1;
    let year=todayDate.getFullYear();
    let date=todayDate.getDate();
    let birthday=new Date(document.getElementById("bday").value)
    let byear=birthday.getFullYear();
    let bmonth=birthday.getMonth()+1;
    let bdate=birthday.getDate();
    let birthyear,birthmonth,birthdate;

    if(birthday==="" || birthday===null)
    {
        alert("Please Enter your date of birth");
        return false;
    }

    leapyear(year);

    if(byear>year || (bmonth>month && byear==year) || (bdate>date && bmonth==month && byear==year))
    {
        alert("Not born yet");
    }

    birthyear=year-byear;
    if(month>=bmonth)
    {
        birthmonth=month-bmonth;
    }
    else
    {
        birthyear--;
        birthmonth=12+month-bmonth;
    }
    if(date>=bdate)
    {
        birthdate=date-bdate;
    }
    else
    {
        birthmonth--;
        if(month==1)
        {
            let days=months[month-1];
            birthdate=days+date-bdate;
        }
        else if(month==bmonth)
        {
            birthdate=bdate-date;
            console.log(birthdate);
        }
        else
        {
            let days=months[month-2];
            birthdate=days+date-bdate;
        }
        if(birthmonth<0)
        {
            birthmonth=11;
            birthyear--;
        }
    }
    document.getElementById("days").innerHTML=birthdate;
    document.getElementById("months").innerHTML=birthmonth;
    document.getElementById("years").innerHTML=birthyear;
 }




