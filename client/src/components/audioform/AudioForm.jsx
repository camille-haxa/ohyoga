/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AudioForm() {
  const expressURL = import.meta.env.VITE_API_URL;
  const [categoryData, setCategoryData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${expressURL}/api/audios`, data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;
    try {
      axios.get(`${express}/api/categories`).then((response) => {
        const { data } = response;
        setCategoryData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const requiredFieldError = "Ce champ est obligatoire !";

  return (
    <section>
      <h1>Ajouter un enregistrement</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="titre"> titre </label>
          <input
            type="text"
            name="title"
            {...register("title", {
              required: requiredFieldError,
              minLength: {
                value: 2,
                message: "le titre doit avoir au moins 2 caractères",
              },
            })}
          />
          {errors.title && (
            <p className="audio-upload-error">{errors.title.message}</p>
          )}
        </div>
        <div className="audio-url">
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            {...register("url", {
              required: requiredFieldError,
            })}
          />
          {errors.url && <p> {errors.url.message}</p>}
        </div>
        <div className="audio-image-url">
          <label htmlFor="image">Thumbnail</label>
          <input
            type="text"
            name="image"
            {...register("image", {
              required: requiredFieldError,
            })}
          />
          {errors.image && <p> {errors.image.message}</p>}
        </div>

        <div className="audio-description">
          <label htmlFor="description"> Description </label>
          <input
            type="text"
            name="description"
            {...register("description", {
              required: requiredFieldError,
              minLength: {
                value: 2,
                message: "You need at least 2 characters",
              },
            })}
          />
          {errors.description && <p> {errors.description.message}</p>}
        </div>
        <div className="audio-category">
          <label htmlFor="categorie">Catégorie </label>
          <select name="category" {...register("category_id")}>
            {categoryData?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button className="audio-button" type="submit">
          {" "}
          ajouter
        </button>
      </form>
    </section>
  );
}
