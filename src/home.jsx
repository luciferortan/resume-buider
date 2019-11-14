import React,{useState} from "react";
import {Homewrapper,Build,Instrwrapper,Instr1,Instr2,Instr3,Instr4,Instr5,Icon,Instrvalue1,Instrvalue2,Instrvalue3} from "./styles";
import './fonts/css/font-awesome.css';
import Navbar from './navbar';
export default function Home(){
    
    return(
        <Homewrapper id="root">
                <Navbar/>
            <Instrwrapper>
                        <Instr1><Icon><i class="fa fa-file-text-o" aria-hidden="true"></i></Icon></Instr1>
                        <Instr2/>
                        <Instr3><Icon><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Icon></Instr3>
                        <Instr4/>
                        <Instr5><Icon><i class="fa fa-download" aria-hidden="true"></i></Icon></Instr5>
                        <Instrvalue1>Choose your resume template</Instrvalue1>
                        <Instrvalue2>Build your resume</Instrvalue2>
                        <Instrvalue3>Download your resume</Instrvalue3>
            </Instrwrapper>

            <Build>Build resume</Build>
        </Homewrapper>
    );
}