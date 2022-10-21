import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import { FAQs } from "constants/faq"
import "./style.scss"

const generateFaqItems = (selectedItem, setSelectedItem) =>
  FAQs.map((data, index) => (
    <div key={index} className="faq-item">
      <span
        className="flex"
        onClick={() =>
          selectedItem === index + 1
            ? setSelectedItem()
            : setSelectedItem(index + 1)
        }
      >
        {data.question}
        <FontAwesomeIcon
          className={`${
            selectedItem === index + 1
              ? "faq-item-icon-reversed"
              : "faq-item-icon"
          }`}
          icon={faChevronCircleDown}
        />
      </span>
      <p className={`${selectedItem === index + 1 ? "selected" : ""}`}>
        {data.answer}
      </p>
    </div>
  ))

const FAQ = () => {
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <div className="faq flex flex-column">
      <div className="faq-title container">FREQUENTLY ASKED QUESTIONS</div>
      <div className="faq-wrapper container">
        {generateFaqItems(selectedItem, setSelectedItem)}
      </div>
    </div>
  )
}

export default FAQ
