import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import mainPhoto from '../../assets/img/mainPhoto.png'



export const Main = () => {
    return (
        <MainSection>
            <AboutMe>
                <h2>WEB DEVELOPER</h2>
                <h1>Vladyslav Gershman</h1>
                <p>{` I'm skilled software developer with
                    experience in TypeScript and
                    JavaScript,and expertise in library
                    like React,Redux,RTK,NextJS.
                    I'm a quick learner and
                    collaborate closely with team to
                    create efficient,scalable,and
                    user-friendly solutions that
                    solve real-world problems.`}</p>
                <div>
                    <Link href={'/contact'}>Contact</Link>
                </div>
            </AboutMe>
            <Image src={mainPhoto} alt={'Frontend Developer'}/>
        </MainSection>
    );
};

const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`

const AboutMe = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

