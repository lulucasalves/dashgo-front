import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function IconSearch(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faSearch} />
    </Base>
  );
}
