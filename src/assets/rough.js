import airport_api from '../../airport.json' assert { type: 'json' }

const airportArr = airport_api.map((i)=>i.code)
airportArr.map((item)=>{
    airportArr.map((arrival)=>{
        for (let index = 0; index < 3; index++) {
            
            const departure_airport=item
            const arrival_airport=arrival
            const flight_code=Math.floor(Math.random()*900)+100
            const departure_time=`${Math.floor(Math.random()*20)+2}:${Math.floor(Math.random()*59)}`
            const travelTime=`${Math.floor(Math.random()*20)+2}:${Math.floor(Math.random()*59)}`
            const economy_class=(Math.floor(Math.random()*10)+1)*10000
            
            const obj = {
                departure:departure_airport,
                arrival:arrival_airport,
                flight_code:flight_code,
                departure_time:departure_time,
                travel_time:travelTime,
                class:[
                    {
                        economy:economy_class,
                        premium:economy_class+5000,
                        business:economy_class+10000,
                        firstclass:economy_class+15000
                    }
                ]
            }
            console.log(obj)
        }
    })
})

console.log(airportArr)