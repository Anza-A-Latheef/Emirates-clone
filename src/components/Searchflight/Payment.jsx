	import React from 'react'
	import styled from 'styled-components'

	const Payment = () => {
	return (
		<div>
			<PaymentHead>Review your selection</PaymentHead>
			<ReviewSelection>
				<ReviewSelectionHead>
						<Flights>Flights</Flights>
						<AllFlights>All Flight details</AllFlights>
						<FlightDetailP>For 1 passenger (Including airfare, taxes, fees and carrier-imposed charges)</FlightDetailP>
						<TotalInr>Total: INR 194,026</TotalInr>
				</ReviewSelectionHead>
				<ReviewFlights>
					<ReviewFlight>
					<FlightData>
						<ReviewDate>Sat 9 Mar 24</ReviewDate>
                            <AirportTime>
                                <FlightTime>{flight.departure_time}</FlightTime>
                                <AirportCode>{flight.departure}</AirportCode>
                            </AirportTime>
                            <FlightDuration>
                                <TravelDetail>{flight.travel_time}</TravelDetail>
                                <FlightTrackImg>
                                    <FlightImage alt="" src="https://fly4.ekstatic.net/Images/farebrand_refresh/flight@2x.png"/>
                                </FlightTrackImg>
                                <TravelDetail><u>1 connection</u></TravelDetail>
                            </FlightDuration>
                            <AirportTime>
                                <FlightTime>{flight.arrival_time}</FlightTime>
                                <AirportCode>{flight.arrival}</AirportCode>
                            </AirportTime>
							<ClassFare>
								<ClassFareHead>Class/Fare</ClassFareHead>
								<ClassFareDetail>Economy/Flex</ClassFareDetail>
							</ClassFare>
                        </FlightData>
						<ReviewFlightBottom>
							
						</ReviewFlightBottom>
					</ReviewFlight>
				</ReviewFlights>
			</ReviewSelection>
		</div>
	)
	}

	export default Payment
