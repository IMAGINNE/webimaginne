import React from 'react'
import styles from "./Navigation.module.css"

export default function Navigation() {
  return (
    <header id="top-header" class="navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                    <div class="navbar-brand">
                        <a class="smooth-scroll" data-section="#home" href="#home" >
                            MY LOGO
                        </a>
                    </div>
                </div>

                <nav class="collapse navbar-collapse navbar-right" role="navigation">
                    <div class="main-menu">
                        <ul id="nav" class="nav navbar-nav">
                            <li class="scroll"><a href="#home" data-section="#home">Home</a></li>
                            <li class="scroll"><a href="#about" data-section="#about">About</a></li>
                            <li class="scroll"><a href="#features" data-section="#features">Feature</a></li>
                            <li class="scroll"><a href="#services" data-section="#services">Services</a></li>
                            <li class="scroll"><a href="#portfolio" data-section="#portfolio">Portfolio</a></li>
                            <li class="scroll"><a href="#contact-area" data-section="#contact-area">Contact</a></li>   
                        </ul>
                    </div>
                </nav>          
            </div>
        </header>
  )
}
