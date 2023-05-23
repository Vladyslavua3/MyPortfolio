'use client'
import {Lato} from 'next/font/google'
import styles from './page.module.css'
import {Header} from "@/layout/Header/Header";
import {Main} from "@/layout/Main/Main";
import dynamic from "next/dynamic";
import React from 'react'
import Works from "@/layout/Works/Works";



const lato = Lato({weight: "400", subsets: ['latin']})

const Skills = dynamic(() => import('@/layout/Skills/Skills').then((mod) => mod.Skills),{ssr:false})

export default function Home() {
    return (
        <main className={styles.main} style={lato.style}>
            <Header/>
            <Main/>
            <Skills/>
            <Works />
        </main>
    )
}
