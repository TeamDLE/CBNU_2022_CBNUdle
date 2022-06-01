function isCorrect(answerLat, answerLong, guessLat, guessLong)
{
    if(answerLat == guessLat && answerLong == guessLong)
    {
      return 0 + ",🎉"; 
    }
    else
    {
      var distance = calc_distance(answerLat, answerLong, guessLat, guessLong);
      var direction = calc_direction(answerLat, answerLong, guessLat, guessLong);
      return distance + "," + direction;
    }
}

function calc_distance(a_lat, a_long, b_lat, b_long)
{
    var R = 6371; // km
    var dLat = (b_lat - a_lat) * Math.PI / 180;
    var dLon = (b_long - a_long) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(a_lat * Math.PI / 180 ) * Math.cos(b_lat * Math.PI / 180 ) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d*1000; //return in m
}

function calc_direction(a_lat, a_long, b_lat, b_long)
{
    var dLon = (b_long - a_long) * Math.PI / 180;
    var y = Math.sin(dLon) * Math.cos(b_lat * Math.PI / 180);
    var x = Math.cos(a_lat * Math.PI / 180 ) * Math.sin(b_lat * Math.PI / 180 ) -
        Math.sin(a_lat * Math.PI / 180 ) * Math.cos(b_lat * Math.PI / 180 ) *
        Math.cos(dLon);
    var brng = ((Math.atan2(y, x) * 180 / Math.PI) + 360) % 360;
    return directionTest(brng);
}

function directionTest(brng)
{
    if(brng >= 0 && brng <= 22.5)
    {
        return "⬆️";
    }
    else if(brng > 22.5 && brng <= 67.5)
    {
        return "↗️";
    }
    else if(brng > 67.5 && brng <= 112.5)
    {
        return "➡️";
    }
    else if(brng > 112.5 && brng <= 157.5)
    {
        return "↘️";
    }
    else if(brng > 157.5 && brng <= 202.5)
    {
        return "⬇️";
    }
    else if(brng > 202.5 && brng <= 247.5)
    {
        return "↙️";
    }
    else if(brng > 247.5 && brng <= 292.5)
    {
        return "⬅️";
    }
    else if(brng > 292.5 && brng <= 337.5)
    {
        return "↖️";
    }
    else if(brng > 337.5 && brng <= 360)
    {
        return "⬆️";
    }
}