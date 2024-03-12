import styles from './styles.module.css';

import { FaTrashAlt, FaEdit  } from 'react-icons/fa';

type BlogItemProps = {
  title: string;
  text: string;
}

const BlogItem: React.FC<BlogItemProps> = ({title, text}) => {
  return (
    <article className={styles.container}>
      <div className={styles.toolbar}>
        <FaEdit className={styles.icon} />
        <FaTrashAlt className={styles.icon}/>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>
        <p>By: Anon</p>
        <p>Posted: 2021-10-10</p>
      </div>
      <p className={styles.text}>
        {text}
      </p>
    </article>
  );
};

export default BlogItem;