import { FunctionComponent } from 'react';
import styles from './search.module.css';
import { IoSearch } from 'react-icons/io5';

const Search: FunctionComponent = () => {
  return (
    <div className={styles.inputField}>
      <div className={styles.input}>
        <div className={styles.content}>
          <IoSearch size={20} />
          <input
            type='text'
            className={styles.inputText}
            placeholder='Search'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
