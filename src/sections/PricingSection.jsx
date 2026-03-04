import { pricingData } from "../assets/data"
import PricingTier from "../components/PricingTier"

const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 clash-display">Choose Your <span className="grad1 clash-display">Trading Plan</span></h2>
        </div>
        <p className="text-lg text-zinc-300/80 text-center">Select the perfect trading plan with advanced features and competitive fees</p>
        {/* Subscription Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
            {/* Pricing Tier */}
            {
            pricingData.map(({ _id, isPopular, name, description, features, price }) => (
                <PricingTier
                key={_id}
                isPopular={isPopular}
                name={name}
                description={description}
                features={features}
                price={price}
                />
            ))
            }
        </div>
    </section>
  )
}

export default PricingSection
