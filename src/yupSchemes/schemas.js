import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido.').required('Preencha o e-mail.'),
  password: Yup.string().required(),
});
