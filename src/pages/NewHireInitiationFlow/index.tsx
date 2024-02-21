import { FunctionComponent, useState, useCallback } from 'react';
import PortalPopup from '../../components/PortalPopup';
import styles from './NewHireInitiationFlow.module.css';
import Dropdown from '../../components/Dropdown';
import Search from '../../components/Search';
import { FaArrowLeft } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import {
  jobOptions,
  locationOptions,
  seniorityOptions,
  accordions,
  agreements,
} from '../../constants';
import Switch from 'react-js-switch';
import Accordion from '../../components/Accordion';

const NewHireInitiationFlow: FunctionComponent = () => {
  const [isJobTemplatesDropdownOpen, setJobTemplatesDropdownOpen] =
    useState(false);
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [isSeniorityDropdownOpen, setSeniorityDropdownOpen] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const openJobTemplatesDropdown = useCallback(() => {
    setJobTemplatesDropdownOpen(true);
  }, []);

  const closeJobTemplatesDropdown = useCallback(() => {
    setJobTemplatesDropdownOpen(false);
  }, []);

  const openLocationDropdown = useCallback(() => {
    setLocationDropdownOpen(true);
  }, []);

  const closeLocationDropdown = useCallback(() => {
    setLocationDropdownOpen(false);
  }, []);

  const openSeniorityDropdown = useCallback(() => {
    setSeniorityDropdownOpen(true);
  }, []);

  const closeSeniorityDropdown = useCallback(() => {
    setSeniorityDropdownOpen(false);
  }, []);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <>
      <div className={styles.newHireInitiationFlow}>
        <main className={styles.button}>
          <section className={styles.frameAccordionButton}>
            <div className={styles.whichAgreementsFormsAndNoParent}>
              <div className={styles.whichAgreementsForms}>
                Which agreements, forms and notices should be sent to Jason
                Smith?
              </div>
              <div className={styles.employeesAssignedTo}>
                Employees assigned to this job type will be required to review,
                where relevant fill-in, and sign the following agreements and
                notices:
              </div>
            </div>
            <div className={styles.selectInput}>
              <div className={styles.label}>
                <div className={styles.label1}>
                  Select the agreements, notices and documents you want Jason
                  Smith to sign
                </div>
              </div>
              <div className={styles.documentSelector}>
                <div className={styles.selectBox}>
                  <div className={styles.label3}>Available Documents</div>
                  <div className={styles.inputFieldParent}>
                    <Search />
                    <div className={styles.textWithButton}>Filter by:</div>
                    <div className={styles.accordionBody}>
                      <div
                        className={styles.selectInput1}
                        onClick={openJobTemplatesDropdown}
                      >
                        <div className={styles.content1}>
                          <div className={styles.placeholder}>
                            Job Templates
                          </div>
                          <IoChevronDown />
                        </div>
                      </div>
                      <div
                        className={styles.selectInput1}
                        onClick={openLocationDropdown}
                      >
                        <div className={styles.content1}>
                          <div className={styles.placeholder}>Locations</div>
                          <IoChevronDown />
                        </div>
                      </div>
                    </div>
                    <div className={styles.dropdownMenuButton}>
                      <div
                        className={styles.selectInput1}
                        onClick={openLocationDropdown}
                      >
                        <div className={styles.content1}>
                          <div className={styles.placeholder}>Subsidiary</div>
                          <IoChevronDown />
                        </div>
                      </div>
                      <div
                        className={styles.selectInput1}
                        onClick={openSeniorityDropdown}
                      >
                        <div className={styles.content1}>
                          <div className={styles.placeholder}>Seniority</div>
                          <IoChevronDown />
                        </div>
                      </div>
                    </div>
                    <div className={styles.dropdownOption}>
                      <div className={styles.dropdownOptionFrame}>
                        <div className={styles.textFrame}>53</div>
                        <div className={styles.text1}>Available Documents</div>
                      </div>
                      <div className={styles.toggle}>
                        <div className={styles.toggle1}>
                          <Switch
                            value={isSwitchOn}
                            onChange={handleSwitchChange}
                          />
                          <div className={styles.labelHelper}>
                            <div className={styles.writeLabelText}>
                              Select All
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.accordion}>
                    {accordions.map((name) => (
                      <Accordion label={name} options={agreements} />
                    ))}
                  </div>
                </div>
                <div className={styles.selectBox1}>
                  <div className={styles.label6}>Selected Documents</div>
                  <Search />
                  <div className={styles.emptyState}>
                    <div className={styles.icon94}>
                      <FaArrowLeft />
                    </div>
                    <div className={styles.text22}>
                      Select documents from the left panel to have employees
                      review them and provide a signature acknowledging review
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {isJobTemplatesDropdownOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Centered'
          onOutsideClick={closeJobTemplatesDropdown}
        >
          <Dropdown options={jobOptions} />
        </PortalPopup>
      )}
      {isLocationDropdownOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Centered'
          onOutsideClick={closeLocationDropdown}
        >
          <Dropdown options={locationOptions} />
        </PortalPopup>
      )}
      {isSeniorityDropdownOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Centered'
          onOutsideClick={closeSeniorityDropdown}
        >
          <Dropdown options={seniorityOptions} />
        </PortalPopup>
      )}
    </>
  );
};

export default NewHireInitiationFlow;
