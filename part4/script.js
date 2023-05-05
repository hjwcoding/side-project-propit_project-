var diary = "";
var emojis = ["💙","💚","😡","🤣","😍"];
var emoji = "😍";

function saveHandler(){
    var date = $("#date").val();
    var text = $("#text").val();

    if(date == ""|| text == ""){
        return false;
    }

    diary = `<a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${text}</h5>
            <small>${date}</small>
        </div>
        <small>${emoji}</small>
    </a>` + diary ; // 과거의 일기 누적 + diary

    $("#result").html(diary);

    localStorage.setItem("diary",diary); //새로고침해도 세팅되는 역할

    $("#date").val("");
    $("#text").val("");
}

function emojiSelected(event, value) {
    if(value == 1){
        emoji = "💙";
    }else if(value == 2){
        emoji = "💚";
    }else if(value == 3){
        emoji = "😡";
    }else if(value == 4){
        emoji = "🤣";
    }else if(value == 5){
        emoji = "😍";
    }
}

$(document).ready(function() {
    diary = localStorage.getItem("diary"); //다이어리 불러오기

    if(diary == null){
        diary = "";
    }
    $("#emoji").emoji({
        emojis: emojis,
        callback: emojiSelected
    });

    $("#result").html(diary);
    
    $("#save").click(saveHandler);

    
});

