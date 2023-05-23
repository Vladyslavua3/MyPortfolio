import React from 'react';
import Link from "next/link";
import styled from "styled-components";


export const Header = () => {
    return (
        <HeaderSection>
            <Link href={'/'}>
                <h1>Vlad | Frontend Developer</h1>
            </Link>
            <nav>
                <Menu>
                    <MenuItem><Link href={'/skills'}>Skills</Link></MenuItem>
                    <MenuItem><Link href={'/works'}>Works</Link></MenuItem>
                    <MenuItem><Link href={'/contact'}>Contact me</Link></MenuItem>
                </Menu>
            </nav>
        </HeaderSection>
    );
};

const HeaderSection = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: darkblue;
`

const Menu = styled.ul`
display: flex;
  align-items: center;
justify-content: center;
  flex-direction: row;
  
`

const MenuItem = styled.li`
padding: 10px;
`