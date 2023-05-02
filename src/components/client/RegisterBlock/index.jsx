import close from '../../../assets/img/icon/x.png';
import { useForm } from 'react-hook-form';
import eye from '../../../assets/img/icon/eye.png';
import ButtonSubmit from '../ButtonSubmit';
import styles from './Register.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/function/authAction';

const RegisterBlock = ({ display, onClose }) => {
  const { loading, userInfo, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    // check if passwords match
    if (data.Password !== data.confirmPassword) {
      alert('Password mismatch');
    }
    dispatch(registerUser(data));
  };
  return (
    <div
      className={styles.root}
      style={display ? { display: 'inline' } : { display: 'none' }}
    >
      <div className={styles.close}>
        <img onClick={onClose} src={close} alt="Close" />
      </div>
      <h3>Registration</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="Name"></label>
          <input
            type="text"
            className="form-input"
            {...register('Name')}
            required
            placeholder="Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="SurName"></label>
          <input
            type="text"
            className="form-input"
            {...register('SurName')}
            required
            placeholder="SurName..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="UserName"></label>
          <input
            type="text"
            className="form-input"
            {...register('UserName')}
            required
            placeholder="User Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email"></label>
          <input
            type="email"
            className="form-input"
            {...register('Email')}
            required
            placeholder="Email..."
          />
        </div>
        <div className={styles.password}>
          <label htmlFor="Password"></label>
          <input
            type="password"
            className="form-input"
            {...register('Password')}
            required
            placeholder="Password..."
          />
          <img className={styles.eye} src={eye} alt="Show" />
        </div>
        <div className={styles.confirm}>
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            className="form-input"
            {...register('confirmPassword')}
            required
            placeholder="Confirm Password..."
          />
          <img className={styles.eye} src={eye} alt="Show" />
        </div>
        <div className="mt-4 ">
          <ButtonSubmit title={loading ? 'loading' : 'Register'} />
        </div>
      </form>
    </div>
  );
};

export default RegisterBlock;
