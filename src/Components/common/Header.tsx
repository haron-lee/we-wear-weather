import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backBtn from 'Assets/backBtn-icon.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [headerBtn, setHeaderBtn] = useState<string | undefined>(undefined);
  const location = useLocation();
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path === 'searchDetail' || path === 'manual') {
      setHeaderBtn(backBtn);
    }
  }, [location.pathname]);

  return (
    <SLayout>
      <button onClick={handleBack} aria-label='뒤로가기'>
        {headerBtn && <img src={headerBtn} alt='' />}
      </button>
    </SLayout>
  );
};

export default Header;

const SLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`;
