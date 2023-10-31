import React from 'react'
import {motion} from "framer-motion"
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineCheck } from 'react-icons/hi';

const Price = ({price, features, plan}) => {
  return (
    <motion.div
      className={`price__card`}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <h4 className="card_title">{plan}</h4>
        <small className="sub_title">
          When you need just.
        </small>
      </div>

      <div className={` price_content `}>
        <h1>
          ${price}
          <sub>/per month</sub>
        </h1>
      </div>
      <div>
        <a href='' className="btn">
          Choose {plan}
        </a>
      </div>
      {/* ---------- Top Featur */}
      <div className="features">
        <h4>Features</h4>
        {features.map(({ featureName, available }, index) => {
          return (
            <div key={index} className="features__item">
              <p className="icon_wapper">
                {available ? (
                  <HiOutlineCheck className="check" />
                ) : (
                  <AiOutlineClose className="close" />
                )}
              </p>
              <small>{featureName}</small>
            </div>
          );
        })}
      </div>
    </motion.div>
  )
}

export default Price