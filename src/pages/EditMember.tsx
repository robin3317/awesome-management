import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useTypedSelector } from '../hooks/useTypeSelector';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import { useActions } from '../hooks/useActions';
import styles from './Edit.module.scss';
import axios from 'axios';

interface IparamsType {
  memberId: string;
}

export interface IMemberData {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  description?: string;
  address: string;
}

const EditMember: React.FC = () => {
  const { loading, error, data } = useTypedSelector((state) => state.member);
  const { memberId } = useParams<IparamsType>();
  const [member, setMember] = useState<IMemberData>({} as IMemberData);

  useEffect(() => {
    const memberDetails = data.filter(
      (member) => member.id === parseInt(memberId)
    )[0];
    setMember(memberDetails);
  }, [member]);

  console.log('================', member.name);
  const [enteredFullname, setEnteredFullname] = useState(member.name);
  const [enteredUsername, setEnteredUsername] = useState(member.username);
  const [enteredEmail, setEnteredEmail] = useState(member.email);
  const [enteredPhone, setEnteredPhone] = useState(member.phone);
  const [enteredAddress, setEnteredAddress] = useState(member.address);
  const [enteredDescription, setEnteredDescription] = useState(
    member.description
  );
  console.log('^^^^^^^^^^^^^', enteredFullname);

  const { editMember } = useActions();

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    switch (event.target.name) {
      case 'fullname':
        setEnteredFullname(event.target.value);
        break;
      case 'username':
        setEnteredUsername(event.target.value);
        break;
      case 'email':
        setEnteredEmail(event.target.value);
        break;
      case 'phone':
        setEnteredPhone(event.target.value);
        break;
      case 'address':
        setEnteredAddress(event.target.value);
        break;
      case 'description':
        setEnteredDescription(event.target.value);
        break;

      default:
        console.log('default statement from add member form onchange');
    }
  };

  const onUpdateHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: IMemberData = {
      id: parseInt(memberId),
      name: enteredFullname,
      username: enteredUsername,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
      description: enteredDescription,
    };

    editMember(formData);

    if (!error && !loading) {
      resetForm();
    }
  };

  const resetForm = () => {
    setEnteredFullname('');
    setEnteredUsername('');
    setEnteredEmail('');
    setEnteredPhone('');
    setEnteredAddress('');
    setEnteredAddress('');
    setEnteredDescription('');
  };

  return (
    <BaseLayout title="Edit Member">
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <form onSubmit={onUpdateHandler}>
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Full Name</label>
            <input
              name="fullname"
              type="text"
              id="fullname"
              value={enteredFullname}
              onChange={inputChangeHandler}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              value={enteredUsername}
              onChange={inputChangeHandler}
              id="username"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              value={enteredEmail}
              onChange={inputChangeHandler}
              id="email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="tel"
              value={enteredPhone}
              onChange={inputChangeHandler}
              id="phone"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              value={enteredAddress}
              onChange={inputChangeHandler}
              id="address"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <input
              name="description"
              type="text"
              value={enteredDescription}
              onChange={inputChangeHandler}
              id="description"
            />
          </div>

          <div className={styles.formGroup}>
            <input className={styles.submitBtn} type="submit" value="Update" />
          </div>
        </form>
      )}
      <ToastContainer />
    </BaseLayout>
  );
};

export default EditMember;
