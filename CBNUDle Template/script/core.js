// isCorrect를 사용해서 정답이 맞는지를 확인하고, 0이면 정답처리, 0이 아니면 들어온 거리와 방향정보를 띄우고 기회 하나를 차감한다.

//MySQL에서 데이터 answer를 가져와 building과 비교하는 함수
function isCorrect(building)
{
    //DB에서 오늘의 정답을 가져옵니다.
    var answerLat = ;
    var answerLong = ;
    //DB에서 "building"코드인 건물 정보를 가져옵니다.
    var guessLat = ;
    var guessLong = ;

    if(answerLat == guessLat && answerLong == guessLong)
    {
        return 0;
    }
    else
    {
        var distance = getDistance(answerLat, answerLong, guessLat, guessLong);
        var direction = getDirection(answerLat, answerLong, guessLat, guessLong);
        return distance + "," + direction;
    }
}