import styles from './styles.module.css';

type DropdownProps = {
  options: { value: string; }[];
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({options, placeholder}) => {
  return (
    <select className={styles.select} defaultValue="">
      <option value="" disabled selected className={styles.hide}>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;