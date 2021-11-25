import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

export function IconMap(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faSitemap} />
    </Base>
  );
}
