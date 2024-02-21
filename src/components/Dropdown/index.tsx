import { FunctionComponent } from 'react';
import styles from './dropdown.module.css';
import Search from '../Search';

export type DropdownTypes = {
  options: String[];
};

const Dropdown: FunctionComponent<DropdownTypes> = ({ options }) => {
  return (
    <div className={styles.jobTemplatesDropdown}>
      <section className={styles.dropdownMenu}>
        <Search />
        {options.map((option) => (
          <div className={styles.dropdownOption}>
            <div className={styles.optionFrame}>
              <div className={styles.frameNesting}>{option}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dropdown;
