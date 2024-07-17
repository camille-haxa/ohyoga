/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useOutletContext, Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const { currentUser, setCurrentUser } = useOutletContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const expressURL = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${expressURL}/api/auth/login`, data, {
          withCredentials: true,
        })
        .then((response) => {
          setCurrentUser(response.data.user);
        });
      console.warn(currentUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h1>Connexion</h1>
      <div>
        <p>
          pas de compte? pour vous inscrire{" "}
          <Link to="/inscription"> cliquez ici </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "ce champ est obligatoire",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "format d'email invalide",
              },
              maxLength: {
                value: 120,
                message: "l'email ne peut pas contenir + de 120 caractères",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="mot de passe">mot de passe</label>
          <input
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
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">se connecter</button>
      </form>
    </section>
  );
}
