import { render } from '@testing-library/react';
import { Graphic } from '.';

test('graphic render', () => {
  const { debug } = render(<Graphic />);

  debug();
});
