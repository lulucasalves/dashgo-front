import { Base } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

export function IconDash(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faChartLine} />
    </Base>
  );
}
