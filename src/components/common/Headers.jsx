import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasicButton from '../basic/BasicButton';
import { HomeOutlined, UserOutlined, LineOutlined, LogoutOutlined } from '@ant-design/icons';
import './Headers.css';
import MySelect from '../basic/MySelect';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

function Headers({ user, setUser }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('click me');
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser();
    navigate('/');
  };

  const isAdmin = user && user.isAdmin == 1;
  return (
    <div className='sticky-header'>
      <div className='divRoot'>
        <div className='profile'>
          
          <Link to='/profile'>
            <UserOutlined className='profileIcon' />
            
          </Link>
        </div>
        <div className='profile-name'>{user ? user.name : ''}</div>

        <div className='home'>
          <Link to='/'>
            <HomeOutlined className='homeIcon' />
          </Link>
        </div>

        <div className='managerSettingsIcon' hidden={isAdmin ? false : true}>
          <MySelect className='mySelectOptions' />
        </div>

        <div className='buttons-container'>
          <Header style={{ display: 'flex', alignItems: 'center', background: 'none' }}>
            <div>
              <Link to='/about' className='button-link'>
                <BasicButton className='link' size='large' text='About' onClick={handleClick} />
              </Link>
            </div>
            <LineOutlined rotate={90} />
            <div>
              <Link to='/all' className='button-link'>
                <BasicButton className='link' size='large' text='All recipes' onClick={handleClick} />
              </Link>
            </div>
            <LineOutlined rotate={90} />
            <div>
              <Link to='/cakes' className='button-link'>
                <BasicButton className='link' size='large' text='Cakes' onClick={handleClick} />
              </Link>
            </div>
            <LineOutlined rotate={90} />
            <div>
              <Link to='/cookies' className='button-link'>
                <BasicButton className='link' size='large' text='Cookies' onClick={handleClick} />
              </Link>
            </div>
            <LineOutlined rotate={90} />
            <div>
              <Link to='/deserts' className='button-link'>
                <BasicButton className='link' size='large' text='Deserts' onClick={handleClick} />
              </Link>
            </div>
          </Header>
        </div>
        {/* 
        {user ? <div className='logout'>
          <Link onClick={handleLogout}>
            <span className='logout-text'>Sign Out</span>
            <LogoutOutlined className='logoutIcon' />
          </Link>
        </div> : null} */}
      </div>
    </div>
  );
}

export default Headers;