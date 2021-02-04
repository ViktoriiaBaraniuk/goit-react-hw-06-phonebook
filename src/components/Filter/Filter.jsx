import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import contactsActions from '../../redux/contacts-actions';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filterForm}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        className={s.filter}
      />
    </label>
  );
}

export default Filter;

/* import contactsActions from '../../redux/contacts-actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.filterForm}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.filter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
   value: state.contacts.filter
 });

 const mapDispatchToProps = dispatch => ({
 onChange: (e) => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Filter);
 */
