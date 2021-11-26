import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido.').required('Preencha o e-mail.'),
  password: Yup.string().required(),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email('E-mail inválido.').required('Preencha o e-mail.'),
  password: Yup.string().required(),
  confirmPassword: Yup.string().test(
    'passwords-match',
    'Passwords must match',
    function (value) {
      return this.parent.password === value;
    },
  ),
});
