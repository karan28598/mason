import { useState, FunctionComponent } from 'react';
import styles from './accordion.module.css';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { FiArrowRight } from 'react-icons/fi';

export type DropdownTypes = {
  label: String;
  options: String[];
};

const Accordion: FunctionComponent<DropdownTypes> = ({ label, options }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const handleAccordionOpen = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return isAccordionOpen ? (
    <div className={styles.accordionBody1} onClick={handleAccordionOpen}>
      <div className={styles.accordionButton3}>
        <div className={styles.iconHeading3}>
          <div className={styles.toggleText4}>{label}</div>
        </div>
        <IoChevronUp />
      </div>
      <div className={styles.accordionBody2}>
        {options.map((option) => (
          <div className={styles.dropdownOption1}>
            <div className={styles.dropdownOption2}>
              <div className={styles.button2}>
                <div className={styles.frameDropdownContent}>{option}</div>
              </div>
              <div className={styles.button3}>
                <FiArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.accordionButton1} onClick={handleAccordionOpen}>
      <div className={styles.iconHeading}>
        <div className={styles.toggleText1}>{label}</div>
      </div>
      <IoChevronDown />
    </div>
  );
};

export default Accordion;
