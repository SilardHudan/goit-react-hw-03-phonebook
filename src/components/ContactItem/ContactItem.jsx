import PropTypes from 'prop-types';
import { Contact, IconUser, Item, Button } from './ContactItem.styled';
import { RiDeleteBin3Line } from 'react-icons/ri';

const ContactItem = ({ id, name, number, deleteHandler }) => {
  return (
    <Item>
      <Contact>
        <IconUser />
        {name} : {number}
      </Contact>
      <Button onClick={() => deleteHandler(id)} title="Delete" type="button">
        <RiDeleteBin3Line />
      </Button>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteHandler: PropTypes.func,
};
