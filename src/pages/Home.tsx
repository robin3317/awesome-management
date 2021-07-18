import BaseLayout from '../components/BaseLayout/BaseLayout';
import Button from '../components/Button/Button';
import { useTypedSelector } from '../hooks/useTypeSelector';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { data, loading, error } = useTypedSelector((state) => state.member);

  return (
    <BaseLayout className={styles.home} title="Home">
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className={styles.tableBody}>
            {data.map((member) => {
              return (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>
                    <Button>Edit</Button>&nbsp;
                    <Button>Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </BaseLayout>
  );
};

export default Home;
