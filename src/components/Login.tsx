import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/auth.actions';
import { AuthState } from '../reducers/auth.reducer';
import { RootState } from '../reducers/root.reducer';

const INITIAL_VALUES = {
  username: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector<RootState, AuthState>((root) => root.auth);

  useEffect(() => {
    if (auth.user) {
      router.push(window.localStorage.getItem('prevPath') || '/');
    }
  }, [auth]);

  const handleSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    dispatch(
      login(username, password, (err) => {
        if (err) {
          alert('Invalid username or password');
        }
      })
    );
  };

  return (
    <div className="border border-theme content-theme max-w-sm mx-auto p-4">
      <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
        <Form className="grid grid-cols-1 gap-2">
          <div>
            <label htmlFor="username" className=" m-2">
              Username
            </label>
            <Field name="username" type="text" />
          </div>
          <div>
            <label htmlFor="password" className=" m-2">
              Password
            </label>
            <Field name="password" type="password" />
          </div>
          <div>
            <button className="btn-main" type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
