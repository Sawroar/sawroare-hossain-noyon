import Image from 'next/image'
import React from 'react'
import logo1 from '../../public/logo.png';
export default function Footer() {
  return (
 <footer className="footer sm:footer-horizontal bg-black text-base-content p-10 rounded-2xl">
  <aside>
  <Image src={logo1} height={100} width={100} alt='logo'></Image>
    <p>
I'm Sawroare Hossain Noyon - <br /> a full-stack developer, freelancer & problem solver. 
      <br />
Thanks for checking out my site!
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">General</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Projects</a>
    <a className="link link-hover">Blog</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}
