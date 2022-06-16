import { Base, ItemsDiv, Div } from './styles';
import { loginSchema } from '../../yupSchemes/schemas';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';
import { FormInput } from '../FormInput';
import { SubmitButton } from '../SubmitButton';
import { DefaultLabel } from '../DefaultLabel';
import { Eye } from '../Icons';
import { useState } from 'react';

export function Login(props) {
  const router = useRouter();

  const send = ({ email, password }) => {
    router.push(routesDocument.dashboardInitial);
  };

  const [type, setType] = useState(false);

  function transform() {
    if (type) {
      return 'text';
    } else {
      return 'password';
    }
  }

  return (
    <Base>
      <ItemsDiv>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            send(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
            <>
              <Div margin="0 0 16px 0">
                <DefaultLabel htmlFor="email">E-mail</DefaultLabel>
                <br />
                <FormInput
                  placeholder="Insira seu email"
                  required
                  id="email"
                  name="email"
                  autoComplete="current-email"
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  errors={errors.email && touched.email}
                />
                {errors.email && touched.email}
              </Div>

              <Div margin="0 0 24px 0">
                <DefaultLabel htmlFor="password">Senha</DefaultLabel>
                <br />
                <Div display="flex">
                  <FormInput
                    placeholder="Insira sua senha"
                    required
                    id="password"
                    type={transform()}
                    name="password"
                    autoComplete="current-password"
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    errors={errors.password && touched.password}
                  />
                  <Eye margin="0 0 -3px -40px" onClick={() => setType(!type)} />
                </Div>
                {errors.password && touched.password}
              </Div>

              <SubmitButton
                errors={
                  errors.password &&
                  touched.password &&
                  errors.email &&
                  touched.email
                }
                onClick={() => handleSubmit()}
              >
                Entrar
              </SubmitButton>
            </>
          )}
        </Formik>
      </ItemsDiv>
    </Base>
  );
}
