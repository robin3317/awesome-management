import React from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import Button from '../components/Button/Button';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { data, loading } = useTypedSelector((state) => state.member);
  const { deleteMember } = useActions();
  const history = useHistory();

  const onDeleteHandler: any = (memberId: string | number) => {
    deleteMember(memberId);
  };

  return (
    <BaseLayout className={styles.home} title="Home">
      {loading && <h3>Loading...</h3>}
      {!loading && (
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
                    <Button
                      onClick={() => {
                        history.push(`/edit/${member.id}`);
                      }}
                    >
                      Edit
                    </Button>
                    &nbsp;
                    <Button onClick={() => onDeleteHandler(member.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </BaseLayout>
  );
};

export default Home;
