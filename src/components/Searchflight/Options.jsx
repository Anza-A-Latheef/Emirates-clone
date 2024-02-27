import React from 'react'

const Options = () => {
  return (
    <div>
        <Benefits>
            <BenefitsHead>Your benefits</BenefitsHead>
            <BenefitsP>Your included benefits depend on your selected class and fare and your memebership tier. Click on any of the cards for more information.</BenefitsP>
            <BenefitsCards>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/checked_baggage_tcm91-154667.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Baggage allowance</CardTitle>
                    <BaggageWeight>2x23kg</BaggageWeight>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/ice_tcm91-154656.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Inflight entertainment</CardTitle>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/hot_meals_tcm91-154660.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Economy Class dining</CardTitle>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/stay_connected_gsm_tcm91-154663.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle>Stay connected</CardTitle>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImgCont>
                        <BenefitsImg src="https://fly2.ekstatic.net/media/award_tcm91-154665.svg" alt=""/>
                    </BenefitsImgCont>
                    <CardTitle></CardTitle>
                </BenefitsCard>
            </BenefitsCards>
        </Benefits>
        <UpgradeFlight>
            <UpgradeHead>Upgrade your flight to Business Saver</UpgradeHead>
            <UpgradeTitle>Explore a higher level of comfort by adding more benefits to your flight fare.Fare rules may be different. View fare rules.</UpgradeTitle>
            <UpgradeCards>
                <UpgradeCard>
                    <UpgradeImgCont>
                        <UpgradeImg alt="" src="/media/J_upsell_7_tcm91-154641.jpg"/>
                    </UpgradeImgCont>
                    <UpgradeImgTitle>Chauffer-drive</UpgradeImgTitle>
                </UpgradeCard>
                <UpgradeCard>
                    <UpgradeImgCont>
                        <UpgradeImg alt="" src="/media/J_upsell_3_tcm91-154633.jpg"/>
                    </UpgradeImgCont>
                    <UpgradeImgTitle>Lounge access</UpgradeImgTitle>
                </UpgradeCard>
                <UpgradeCard>
                    <UpgradeImgCont>
                        <UpgradeImg alt="" src="/media/J_upsell_2_tcm91-154634.jpg"/>
                    </UpgradeImgCont>
                    <UpgradeImgTitle>Lie-flat beds</UpgradeImgTitle>
                </UpgradeCard>
                <UpgradeCard>
                    <UpgradeImgCont>
                        <UpgradeImg alt="" src="/media/baggage_1_tcm91-154635.png"/>
                    </UpgradeImgCont>
                    <UpgradeImgTitle>Extra baggage allowance</UpgradeImgTitle>
                </UpgradeCard>
            </UpgradeCards>
        </UpgradeFlight>
        <Recommended>
            <RecommendedHead>Recommended for you</RecommendedHead>
            <RecommendedTitle>Enhance your travel experience with these options.</RecommendedTitle>
            <RecommendedCards>
                <RecommendedCard>
                    <RecommCardLeft>
                        <RecommCardImg alt="" src="https://fly2.ekstatic.net/media/Seat_selection_712x632_tcm91-153808.jpg"/>
                    </RecommCardLeft>
                    <RecommCardRight>
                        <RecommCardTitle>Choose seats</RecommCardTitle>
                        <RecommContent>Choose a seat based on your preferences:</RecommContent>
                        <RecommContent>Choose an aisle seat for quick access or a window seat for a great view</RecommContent>
                        <RecommContent>Preferred seats are located at the front of the aircraft or on the upper deck of some of our A380 flights, so you'll be one of the first passengers to disembark</RecommContent>
                        <RecommContent>Choose twin seats if you'd like to sit in a two-seater row</RecommContent>
                        <RecommContent>Choose extra legroom and stretch your legs - book now and save more compared to what you would pay at the airport</RecommContent>
                        <RecommCardButton></RecommCardButton>
                    </RecommCardRight>
                </RecommendedCard>
                <RecommendedCard>
                    <RecommCardLeft>
                        <RecommCardImg alt="" src="/media/baggage%402x_tcm91-154177.png"/>
                    </RecommCardLeft>
                    <RecommCardRight>
                        <RecommCardTitle>Add excess baggage now and save money and time at the airport</RecommCardTitle>
                        <RecommContent>By adding excess baggage now, you can save more with special discounts compared to what you would pay at the airport.</RecommContent>
                        <RecommContent>From</RecommContent>
                        <RecommContent><b>INR 11,319</b></RecommContent>
                    </RecommCardRight>
                </RecommendedCard>
            </RecommendedCards>
        </Recommended>
        <BaggageDetails>
            <BaggageBox>
                <BaggageBoxHead>
                    <BaggageAirport>Bengaluru (BLR) to Accra (ACC)</BaggageAirport>
                    <BaggageClass>Economy Saver</BaggageClass>
                </BaggageBoxHead>
                <BaggageBoxContent>
                    <PassengerBaggage>
                        <PassengerName>Anza AbdulLatheef</PassengerName>
                        <BaggageAllowance>Complimentary baggage allowance: <b>2 x 23kg</b></BaggageAllowance>
                    </PassengerBaggage>
                    <AdditionalBaggage>
                        <AddBaggageLabel>Additional baggage</AddBaggageLabel>
                        <AddBaggageSelect>
                            <option value=" No extra baggage">No extra baggage</option>
                            <option value=" 1 additional bag">1 additional bag</option>
                            <option value=" 2 additional bags">2 additional bags</option>
                            <option value=" 3 additional bags">3 additional bags</option>
                            <option value=" 4 additional bags">4 additional bags</option>
                            <option value=" 5 additional bags">5 additional bags</option>
                        </AddBaggageSelect>
                    </AdditionalBaggage>
                </BaggageBoxContent>
            </BaggageBox>
            <BaggageBox>
                <BaggageBoxHead>
                    <BaggageAirport>Accra (ACC) to Bengaluru (BLR)</BaggageAirport>
                    <BaggageClass>Economy Flex</BaggageClass>
                </BaggageBoxHead>
                <BaggageBoxContent>
                    <PassengerBaggage>
                        <PassengerName>Anza AbdulLatheef</PassengerName>
                        <BaggageAllowance>Complimentary baggage allowance: <b>2 x 23kg</b></BaggageAllowance>
                    </PassengerBaggage>
                    <AdditionalBaggage>
                        <AddBaggageLabel>Additional baggage</AddBaggageLabel>
                        <AddBaggageSelect>
                            <option value=" No extra baggage">No extra baggage</option>
                            <option value=" 1 additional bag">1 additional bag</option>
                            <option value=" 2 additional bags">2 additional bags</option>
                            <option value=" 3 additional bags">3 additional bags</option>
                            <option value=" 4 additional bags">4 additional bags</option>
                            <option value=" 5 additional bags">5 additional bags</option>
                        </AddBaggageSelect>
                    </AdditionalBaggage>
                </BaggageBoxContent>
            </BaggageBox>
        </BaggageDetails>
        <TotalForBaggage>
            <ExcessBaggage>Total for excess baggage</ExcessBaggage>
            <INR>INR 0</INR>
        </TotalForBaggage>
    </div>
  )
}

export default Options
