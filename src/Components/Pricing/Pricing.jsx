import React from "react";
import { pricingList } from "../../Utlits/pricingList";
import Price from "./Price";
import Title from "../Title/Title";

const Pricing = () => {
  return (
    <section className="price">
      <div className="container">
        <Title shortTitle="PRICING" longTitle="We are dadicated" />
        <div className="price__wapper">
          {pricingList.map(({ id, features, plan, price }) => (
            <Price key={id} features={features} plan={plan} price={price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
