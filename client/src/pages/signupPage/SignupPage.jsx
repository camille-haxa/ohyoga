/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import "./SignupPage.css";

import axios from "axios";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const expressURL = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      await axios.post(`${expressURL}/api/users`, data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <h1 className="signup-h1">Inscription</h1>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="signup-description">
          {" "}
          enregistrez vous pour avoir accès aux enregistrements audios et vidéos
        </h5>
        <div className="signup-field">
          <label className="form-label" htmlFor="nom">
            nom d'utilisateur.ice
          </label>
          <input
            className="signup-input"
            type="text"
            name="username"
            {...register("username", {
              required: "ce champ est obligatoire!",
              minLength: {
                value: 2,
                message: "le nom doit avoir au moins 2 lettres",
              },
              maxLength: {
                value: 120,
                message: " le nom ne peut pas avoir + de 120 caractères",
              },
            })}
          />
          {errors.username && (
            <p className="signup-error">{errors.username.message}</p>
          )}
        </div>
        <div className="signup-field">
          <label className="form-label" htmlFor="email">
            email
          </label>
          <input
            className="signup-input"
            type="email"
            name="email"
            {...register("email", {
              required: "Ce champ est obligatoire!",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "format d'email invalide",
              },
              maxLength: {
                value: 120,
                message: "l'email ne peut pas avoir + de 120 caractères",
              },
            })}
          />
          {errors.email && (
            <p className="signup-error">{errors.email.message}</p>
          )}
        </div>
        <div className="signup-field">
          <label className="form-label" htmlFor="confirmez l'email">
            confirmez l'email
          </label>
          <input
            className="signup-input"
            type="email"
            name="confirmemail"
            {...register("confirmemail", {
              required: "Ce champ est obligatoire!",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "format d'email invalide",
              },
              maxLength: {
                value: 120,
                message: "l'email ne peut pas avoir + de 120 caractères",
              },
              validate: (value) =>
                value === watch("email") || "les emails ne correspondent pas",
            })}
          />
          {errors.confirmemail && (
            <p className="signup-error">{errors.confirmemail.message}</p>
          )}
        </div>
        <div className="signup-field">
          <label className="form-label" htmlFor="mot de passe">
            mot de passe
          </label>
          <input
            className="signup-input"
            type="password"
            name="password"
            {...register("password", {
              required: "Ce champ est obligatoire!",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/,
                message:
                  "le mot de passe doit contenir au moins 8 caractères, dont 1 majuscule, 1 chiffre et 1 caractère spécial",
              },
              maxLength: {
                value: 32,
                message: "le mot de passe ne peut pas avoir + de 32 caractères",
              },
            })}
          />
          {errors.password && (
            <p className="signup-error">{errors.password.message}</p>
          )}
        </div>
        <div className="signup-field">
          <label className="form-label" htmlFor="confirmez mot de passe">
            confirmez le mot de passe
          </label>
          <input
            className="signup-input"
            type="password"
            name="confirmpassword"
            {...register("confirmpassword", {
              required: "Ce champ est obligatoire!",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/,
                message: "format de mot de passe invalide",
              },
              validate: (value) =>
                value === watch("password") ||
                "les mots de passe ne correspondent pas",
            })}
          />
          {errors.confirmpassword && (
            <p className="signup-error">{errors.confirmpassword.message}</p>
          )}
        </div>

        <button className="signup-button" type="submit">
          {" "}
          s'inscrire
        </button>
      </form>
    </section>
  );
}
