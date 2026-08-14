import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';
import { NavLink, useNavigate } from 'react-router';


function MenuDropdown() {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    navigate('/login')
  }

  return (
    <Stack direction="horizontal" gap={3}>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="dark"
        title="Selecione a seção..."
        className="mt-2 dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className='dropdown-item' href='/dashboard/' active={true} >
          Home
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-item' href='/dashboard/profile'>
          Perfil
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-item' href='/dashboard/profile'>
          Metas
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-item' href='/dashboard/habits'>
          Hábitos
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className='dropdown-item' onClick={() => logout()} >
          Logout
        </Dropdown.Item>
      </DropdownButton>
    </Stack>
  );
}

export default MenuDropdown;