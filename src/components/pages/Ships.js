import React from 'react'
import './Ships.css'
import CardItem from '../CardItem'

function Ships() {
  return (
    <div>
      <img className="banner-image" src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ships/wonder/wonder-of-the-seas-aerial-sailing-render.jpg?$1920x480$" alt="Cruise" />

      <div className="indented-content">

        <h1 className="ships-page-header"> <strong>The Best Selection of Cruise Ships </strong></h1>
        <p className='grey-paragraph'> There are so many reasons to get excited about a Royal Caribbean® cruise. Choose from itineraries that take you to top-rated destinations, from sun-soaked Caribbean isles to ancient temples in Asia and everywhere in between. And make the most out of every moment at sea onboard the world’s best cruise ships, loaded from bow to stern with game-changing thrills, dazzling entertainment, next-level dining and activities for all kinds of adventure-seekers. No matter which ship you choose to sail on, this is a fleet filled with incredible feats. </p>

        <hr />

        <h2 className="ships-page-header-2"> <strong> New To The Fleet </strong></h2>

        <div className="cards-wrapper">
          <ul className="cards-items-long">
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ships/wonder/wonder-of-the-seas-sunset-sailing-render.jpg?$1040x520$"
              title="WONDER OF THE SEAS"
              body="STARTING FROM $159"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/international/israel-launch/odyssey-arrives-israel-hp-desktop.jpg?$1040x520$"
              title="ODESSEY OF THE SEAS"
              body="Sailing From Fort Lauderdale"
              path='/Trip1'
            >
            </CardItem>
          </ul>
        </div>

        <hr />

        <h2 className="ships-page-header-2"> <strong> Meet The Fleet </strong></h2>
        <div className="cards-wrapper">
          <ul className="cards-items-short">
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/fleet-landing/adventure-exterior-horizon-day-island-ship.jpg?$1040x520$"
              title="ADVENTURE"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/fleet-landing/allure-exterior-back-aerial-day-sailing-ship.jpg?$1040x520$"
              title="ALLURE"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/international/promotions/2019/december/live-more,-spend-less/anthem-hp-desktop.jpg?$1040x520$"
              title="ANTHEM"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ship/brilliance-of-the-seas/image1/assets/brilliance-of-the-seas-hero.jpg?$1040x520$"
              title="BRILLIANCE"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
          </ul>
          <ul className="cards-items-short">
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/fleet-landing/enchantment-exterior-side-aerial-day-sailing-ship.jpg?$1040x520$"
              title="ENCHANTMENT"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/fleet-landing/explorer-of-the-seas-aerial.jpg?$1040x520$"
              title="EXPLORER"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/fleet-landing/freedom-exterior-side-aerial-day-sailing-ship.jpg?$1040x520$"
              title="FREEDOM"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ships/grandeur/grandeur-of-the-seas-sailing.jpg?$1040x520$"
              title="GRANDEUR"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
          </ul>
          <ul className="cards-items-short">
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ships/oasis/perfect-day-coco-cay-oasis-of-the-seas-aerial-morning-view.jpg?$1040x520$"
              title="OASIS"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ships/odyssey/assets/odyssey-of-the-seas-skypad-flowrider-hero.jpg?$1040x520$"
              title="ODESSEY"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/countries/NORDICS/tiles/sweden-tiles/symphony_of_the_seas_i_natta.jpg?$1040x520$"
              title="SYMPHONY"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ships/wonder/wonder-of-the-seas-sunset-sailing-render.jpg?$1040x520$"
              title="WONDER"
              body="OF THE SEAS"
              path='/Trip1'
            >
            </CardItem>
          </ul>
        </div>

        <hr />

        <h2 className="ships-page-header-2"> <strong> Theres More To Explore </strong></h2>
        <p className='grey-paragraph'>If you’re ready to learn more about the incredible adventures you can have on Royal Caribbean, check out our 2021-2022 sailings — they’re all open to book right now. Dive into our deck plans and become an expert on the fleet. Or discover why our Oasis Class and Amplified ships are rated among the best cruise ships in the world.</p>

        <div className="cards-wrapper">
          <ul className="cards-items-short">
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/special-mkgt/deployment-hub/independence-of-the-seas-aerial-view.jpg?$1920x1080$"
              title="CRUISES"
              body="2022-2023"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/onboard/experiences/the-perfect-storm/harmony-of-the-seas-perfect-storm-slides.jpg?$1920x1080$"
              title=""
              body="DECK PLANS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/countries/NORDICS/promotions/march-2020/flash-sale-1/se-desktop-abyss-kryssning-semester.jpg?$1920x1080$"
              title=""
              body="OASIS CLASS"
              path='/Trip1'
            >
            </CardItem>
            <CardItem
              src="https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ships/oasis/perfect-day-coco-cay-navigator-oasis-of-the-seas-docked.jpg?$1920x1080$"
              title=""
              body="ROYAL AMPLIFIED"
              path='/Trip1'
            >
            </CardItem>
          </ul>
          </div>
      </div>
    </div>
  )
}

export default Ships