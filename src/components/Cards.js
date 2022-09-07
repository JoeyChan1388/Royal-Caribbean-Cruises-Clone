import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
        <div className="cards-container">
            <div className="cards-wrapper"> 
                <ul className="cards-items">
                    <CardItem
                        src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/perfect-day/perfect-day-coco-cay-floating-cabana-sunset-parasol.jpg?$520x520$"
                        title="PERFECT DAY AT COCOCAY"
                        body="STARTING FROM $159"
                        path='/Trip1'
                    >
                    </CardItem>
                    <CardItem
                        src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/philipsburg-st-maarten/saint-maarten-philipsburg-aerial-coast-daytime.jpg?$520x520$"
                        title="7 NIGHT"
                        body="CARRIBEAN CRUISES"
                        path='/Trip1'
                    >
                    </CardItem>
                    <CardItem
                        src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/Alaska/alaska-juneau-glacier-couple-exploring-shore-excursion.jpg?$520x520$"
                        title="SUMMER 2022"
                        body="ALASKA CRUISES"
                        path='/Trip1'
                    >
                    </CardItem>
                    <CardItem
                        src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/international/promotions/2020/january/monthly/europe-monthly-hp-mobile.jpg?$520x520$"
                        title="SUMMER 2022"
                        body="EUROPE CRUISES"
                        path='/Trip1'
                    >
                    </CardItem>
                </ul>
            </div>
            <div className="cards-wrapper">
            <ul className="cards-items-long">
                    <CardItem
                        src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/perfect-day/perfect-day-coco-cay-floating-cabana-sunset-parasol.jpg?$520x520$"
                        title="PERFECT DAY AT COCOCAY"
                        body="STARTING FROM $159"
                        path='/Trip1'
                    >
                    </CardItem>
                    <CardItem
                        src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/philipsburg-st-maarten/saint-maarten-philipsburg-aerial-coast-daytime.jpg?$520x520$"
                        title="7 NIGHT"
                        body="CARRIBEAN CRUISES"
                        path='/Trip1'
                    >
                    </CardItem>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards