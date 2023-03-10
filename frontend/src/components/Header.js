import { Link, Switch, Route } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = (props) => {
  const {
    onSignOut,
    userEmail,
  } = props

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt={"Mesto"}/>
      <Switch>
        <Route exact path='/'>
          <div className='header__group'>
            <p className='header__email'>{userEmail}</p>
            <Link to='/sign-in' className='header__btn' onClick={onSignOut}>
              Выйти
            </Link>
          </div>
        </Route>
        <Route exact path='/sign-up'>
          <Link to='/sign-in' className='header__btn'>
            Войти
          </Link>
        </Route>
        <Route path='/sign-in'>
          <Link to='/sign-up' className='header__btn'>
            Регистрация
          </Link>
        </Route>
      </Switch>
    </header>
  );
};

export default Header;