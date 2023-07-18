"use client"
import { client } from '@/app/client';
import images from '@/constants';
import AppWrap from '@/wrapper/AppWrap';
import MotionWrap from '@/wrapper/MotionWrap';
import { useState } from 'react';
import './Footer.scss'
import Image from 'next/image';

const Footer = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Entre em contato</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <Image src={images.email} alt="email" />
          <a href="mailto:victoremmanuelmn@gmail.com" className="p-text">
            victoremmanuelmn@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <Image src={images.mobile} alt="mobile" />
          <a href="tel: +55 (085) 99703-4168" className="p-text">
            +55 (085) 99703-4168
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Seu Nome..."
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              name="email"
              placeholder="Seu Email..."
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div className="">
            <textarea
              name="message"
              className="p-text"
              placeholder="Deixe aqui a sua mensagem..."
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text">
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(Footer, "app__footer"),
  idName: "contato",
  classNames: "app__whitebg",
});
