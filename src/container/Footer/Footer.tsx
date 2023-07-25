"use client";
import { client } from "@/app/client";
import { zodResolver } from "@hookform/resolvers/zod";
import images from "@/constants";
import AppWrap from "@/wrapper/AppWrap";
import MotionWrap from "@/wrapper/MotionWrap";
import { useState } from "react";
import "./Footer.scss";
import Image from "next/image";
import {
  TcontactFormSchema,
  contactFormSchema,
} from "@/shemas/contactFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TcontactFormSchema>({
    mode: "onBlur",
    resolver: zodResolver(contactFormSchema),
  });

  const submit: SubmitHandler<TcontactFormSchema> = (formData) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });

    toast.success("Contato enviado com sucesso", {
      className: "toast-sucess",
    });

    reset();
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
          <a href="tel: +55 (085) 99680-3000" className="p-text">
            (085) 99680-3000
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          onSubmit={handleSubmit(submit)}
        >
          <div className="app__flex">
            <Input
              type="text"
              className="p-text"
              placeholder="Seu Nome..."
              error={errors.username}
              {...register("username")}
            />
          </div>

          <div className="app__flex">
            <Input
              type="email"
              className="p-text"
              placeholder="Seu Email..."
              error={errors.email}
              {...register("email")}
            />
          </div>
          <div>
            <Textarea
              className="p-text"
              placeholder="Deixe aqui a sua mensagem..."
              error={errors.message}
              {...register("message")}
            />
          </div>
          <button type="submit" className="p-text" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      ) : (
        <div className="thank-you">
          <h3 className="head-text">Obrigado pela mensagem!</h3>
          <p className="bold-text">Irei retorna-la assim que possível😄</p>
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
