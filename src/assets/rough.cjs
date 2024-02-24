const fs=require('fs');
const airport_api = [
    { "name": "Abidjan", "code": "ABJ" },
    { "name": "Abuja", "code": "ABV" },
    { "name": "Accra", "code": "ACC" },
    { "name": "Algiers", "code": "ALG" },
    { "name": "Stockholm", "code": "ARN" },
    { "name": "Baghdad", "code": "BGW" },
    { "name": "Bangkok", "code": "BKK" },
    { "name": "Barcelona", "code": "BCN" },
    { "name": "Beijing", "code": "PEK" },
    { "name": "Berlin", "code": "TXL" },
    { "name": "Bogotá", "code": "BOG" },
    { "name": "Cairo", "code": "CAI" },
    { "name": "Cape Town", "code": "CPT" },
    { "name": "Dubai", "code": "DXB" },
    { "name": "Dublin", "code": "DUB" },
    { "name": "Frankfurt", "code": "FRA" },
    { "name": "Istanbul", "code": "IST" },
    { "name": "Jakarta", "code": "CGK" },
    { "name": "Kuala Lumpur", "code": "KUL" },
    { "name": "London", "code": "LHR" },
    { "name": "Los Angeles", "code": "LAX" },
    { "name": "Madrid", "code": "MAD" },
    { "name": "Mexico City", "code": "MEX" },
    { "name": "Moscow", "code": "SVO" },
    { "name": "Mumbai", "code": "BOM" },
    { "name": "Nairobi", "code": "NBO" },
    { "name": "New York", "code": "JFK" },
    { "name": "Paris", "code": "CDG" },
    { "name": "Rio de Janeiro", "code": "GIG" },
    { "name": "Rome", "code": "FCO" },
    { "name": "Seoul", "code": "ICN" },
    { "name": "Shanghai", "code": "PVG" },
    { "name": "Sydney", "code": "SYD" },
    { "name": "Tokyo", "code": "NRT" },
    { "name": "Toronto", "code": "YYZ" },
    { "name": "Vancouver", "code": "YVR" }
]


const airportArr = airport_api.map((i) => i.code);
const PlaceArr = airport_api.map((i) => i.name);
const arr = [];

airportArr.forEach((departure, index1) => {
    airportArr.forEach((arrival, index2) => {
        if (index1 !== index2) {
            for (let index = 0; index < 3; index++) {
                const departure_place = PlaceArr[index1];
                const arrival_place = PlaceArr[index2];
                const flight_code = Math.floor(Math.random() * 900) + 100;
                const departure_hour = Math.floor(Math.random() * 20) + 2;
                const departureMinute = Math.floor(Math.random() * 59);
                const travelHour = Math.floor(Math.random() * 20) + 2;
                const travelMinute = Math.floor(Math.random() * 59);
                const arrival_hour = (departure_hour + travelHour) % 24;
                const arrival_minute = (departureMinute + travelMinute) % 60;

                const departure_time = `${departure_hour}:${departureMinute < 10 ? '0' + departureMinute : departureMinute}`;
                const travelTime = `${travelHour}:${travelMinute < 10 ? '0' + travelMinute : travelMinute}`;
                const arrivalTime = `${arrival_hour}:${arrival_minute < 10 ? '0' + arrival_minute : arrival_minute}`;
                const economy_class = (Math.floor(Math.random() * 10) + 1) * 10000;

                const obj = {
                    departure_place: departure_place,
                    arrival_place: arrival_place,
                    departure: departure,
                    arrival: arrival,
                    flight_code: flight_code,
                    departure_time: departure_time,
                    travel_time: travelTime,
                    arrival_time: arrivalTime,
                    SeatingClass: {
                        Economy: economy_class,
                        Premium: economy_class + 5000,
                        Business: economy_class + 10000,
                        First: economy_class + 15000
                    }
                };
                arr.push(obj);
            }
        }
    });
});

const FlightJson = JSON.stringify(arr, null, 2);
const Fd = "FlightDetail.json";

fs.writeFile(Fd, FlightJson, (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log("Flight details generated and saved successfully!");
    }
});
