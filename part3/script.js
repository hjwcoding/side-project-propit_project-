function calculateHandler(){
    var loan = $("#loan").val();
    var percent = $("#percent").val();
    var period = $("#period").val();

    loan = parseFloat(loan);
    percent = parseFloat(percent);
    period = parseFloat(period);

    var interestMonth = percent / 12 / 100;

    interestMonth = parseFloat(interestMonth);

    var div1 = loan * interestMonth * (1 + interestMonth) ** period;
    var div2 = (1+interestMonth) ** period -1;

    var result = Math.round(div1 / div2);
    
    var toLocalString = result.toLocaleString();

    var resultText = `고객님의 ${period}개월동안 월     상환액은 <mark>${toLocalString}</mark>입니다.`

    $("#result").html(resultText);
}

function loan100Handler(){
    var loan = $("#loan").val(); //가져온다

    if(loan == ""){
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 1000000;

    $("#loan").val(loan);//넣어준다
}

function loan1000Handler(){
    var loan = $("#loan").val(); //가져온다

    if(loan == ""){
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 10000000;

    $("#loan").val(loan);//넣어준다
}

function loan10000Handler(){
    var loan = $("#loan").val(); //가져온다

    if(loan == ""){
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 100000000;

    $("#loan").val(loan);//넣어준다
}

function interest3Handler(){
    var percent = $("#percent").val(); //가져온다

    if(percent == ""){
        percent = 0;
    }

    percent = parseFloat(percent);

    percent = percent + 3;

    $("#percent").val(percent);//넣어준다
}

function interest4Handler(){
    var percent = $("#percent").val(); //가져온다

    if(percent == ""){
        percent = 0;
    }

    percent = parseFloat(percent);

    percent = percent + 4;

    $("#percent").val(percent);//넣어준다
}

function interest5Handler(){
    var percent = $("#percent").val(); //가져온다

    if(percent == ""){
        percent = 0;
    }

    percent = parseFloat(percent);

    percent = percent + 5;

    $("#percent").val(percent);//넣어준다
}

function period1Handler(){
    var period = $("#period").val(); //가져온다

    if(period == ""){
        period = 0;
    }

    period = parseFloat(period);

    period = period + 12;

    $("#period").val(period);//넣어준다
}

function period3Handler(){
    var period = $("#period").val(); //가져온다

    if(period == ""){
        period = 0;
    }

    period = parseFloat(period);

    period = period + 36;

    $("#period").val(period);//넣어준다
}

function period5Handler(){
    var period = $("#period").val(); //가져온다

    if(period == ""){
        period = 0;
    }

    period = parseFloat(period);

    period = period + 60;

    $("#period").val(period);//넣어준다
}


try{
$(document).ready(function() {
    $("#calculate").click(calculateHandler);

    $("#loan-100").click(loan100Handler);
    $("#loan-1000").click(loan1000Handler);
    $("#loan-10000").click(loan10000Handler);

    $("#3percent").click(interest3Handler);
    $("#4percent").click(interest4Handler);
    $("#5percent").click(interest5Handler);

    $("#1year").click(period1Handler);
    $("#3year").click(period3Handler);
    $("#5year").click(period5Handler);
});

}catch(e){
    e
}