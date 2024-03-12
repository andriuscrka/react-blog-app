import styles from './styles.module.css';

import { Button, Dropdown } from '../../UI';

const DUMMY_OPTIONS = [{value: 'John'}, {value: 'Joe'}];

const BlogInput = () => {
  return (
    <div className={styles.container}>
      <textarea className={styles.input} placeholder="Write your blog here..."></textarea>
      <div className={styles.toolbar}>
        <Dropdown options={DUMMY_OPTIONS} placeholder='Select author' />
        <Button>Post</Button>
      </div>
    </div>
  );
};

export default BlogInput;