import { Base, ItemsDiv, Div } from './styles';
import { DashboardTitle } from '../DashboardTitle';
import { registerSchema } from '../../yupSchemes/schemas';
import { Formik } from 'formik';
import { DefaultButton } from '../DefaultButton';
import { DefaultLabel } from '../DefaultLabel';
import { FormInput } from '../FormInput';
import { useRouter } from 'next/router';
import { routesDocument } from '../../routes';

export function UserForm(props) {
  const router = useRouter();

  function save(name, email, password, confirmPassword) {
    router.push(routesDocument.dashboardUsers);
  }

  return (
    <Base>
      <ItemsDiv>
        <Div
          display="block"
          background="#1F2029"
          borderRadius="8px"
          padding="32px"
          width="864px"
          height="402px"
        >
          <Div
            padding="0 0 24px 0"
            margin="0 0 24px 0"
            border="1px solid #353646"
          >
            <DashboardTitle>Usuários</DashboardTitle>
          </Div>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              save(values);
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
                <Div margin="0 0 32px 0" justifyContent="space-between">
                  <Div display="block" margin="0 0 0 0">
                    <DefaultLabel htmlFor="name">Nome completo</DefaultLabel>
                    <FormInput
                      width="384px"
                      margin="8px 0 0 0"
                      required
                      id="name"
                      name="name"
                      autoComplete="current-name"
                      onChange={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      errors={errors.name && touched.name}
                    />
                    {errors.name && touched.name}
                  </Div>
                  <Div display="block">
                    <DefaultLabel htmlFor="email">E-mail</DefaultLabel>
                    <FormInput
                      width="384px"
                      margin="8px 0 0 0"
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
                </Div>

                <Div justifyContent="space-between">
                  <Div display="block">
                    <DefaultLabel htmlFor="password">Senha</DefaultLabel>

                    <FormInput
                      width="384px"
                      margin="8px 0 0 0"
                      required
                      id="password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      onChange={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errors={errors.password && touched.password}
                    />

                    {errors.password && touched.password}
                  </Div>
                  <Div display="block">
                    <DefaultLabel htmlFor="confirmPassword">
                      Confirmação da senha
                    </DefaultLabel>
                    <FormInput
                      width="384px"
                      margin="8px 0 0 0"
                      required
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      autoComplete="current-confirmPassword"
                      onChange={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      errors={errors.confirmPassword && touched.confirmPassword}
                    />

                    {errors.confirmPassword && touched.confirmPassword}
                  </Div>
                </Div>

                <Div margin="32px 0 0 0" justifyContent="end">
                  <DefaultButton
                    background="rgba(255, 255, 255, 0.36)"
                    margin="0 16px 0 0"
                    padding="10px 16px"
                    fontSize="1rem"
                    onClick={() => router.push(routesDocument.dashboardUsers)}
                  >
                    Cancelar
                  </DefaultButton>
                  <DefaultButton
                    fontSize="1rem"
                    padding="10px 16px"
                    onClick={() => handleSubmit()}
                  >
                    Salvar
                  </DefaultButton>
                </Div>
              </>
            )}
          </Formik>
        </Div>
      </ItemsDiv>
    </Base>
  );
}
