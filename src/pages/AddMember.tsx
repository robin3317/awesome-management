import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import styles from './AddMember.module.scss';

interface IFormSubmitData {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: string;
  description?: string;
}

const AddMember: React.FC = () => {
  const [enteredFullname, setEnteredFullname] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const { addMember } = useActions();

  const { error, loading } = useTypedSelector((state) => state.member);

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

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: IFormSubmitData = {
      name: enteredFullname,
      username: enteredUsername,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
      description: enteredDescription,
    };

    addMember(formData);

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
    <BaseLayout title="Add Member">
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <form onSubmit={onSubmitHandler}>
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
            <input type="submit" />
          </div>
        </form>
      )}
      <ToastContainer />
    </BaseLayout>
  );
};

export default AddMember;
