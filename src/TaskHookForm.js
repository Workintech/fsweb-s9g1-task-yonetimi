import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm({ kisiler }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Başlık
          <input 
            className="input-text" 
            type="text" 
            name="title" 
            {...register("title", {
              required: "Task başlığı yazmalısınız", 
              minLength: {
                value: 3,
                message: "Task başlığı en az 3 karakter olmalı"
              }
            })}/>
            {errors.title && <p>{errors.title.message}</p>}
        </label>
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
          <textarea
            className="input-textarea"
            rows="3"
            type="text"
            name="description"
            {...register("description", {
              required: "Task açıklaması yazmalısınız",
              minLength: {
                value: 10, 
                message: "Task açıklaması en az 10 karakter olmalı"
              }
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </label>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        {kisiler.map((e) => (
          <label className="input-checkbox" key={e}>
            <input 
            type="checkbox" 
            name="people"
            value={e}
            {...register("people", {
              maxLength: {
                value: 3,
                message: "En fazla 3 kişi seçebilirsiniz"
              }, 
              minLength: {
                value: 1, 
                message: "Lütfen en az bir kişi seçin"
              }
            })} 
            />
            {e}
          </label>
        ))}
        {errors.people && <p>{errors.people.message}</p>}
      </div>

      <div className="form-line">
        <button className="submit-button" type="submit" disabled={!isValid}>
          Kaydet
        </button>
      </div>
    </form>
  );
}
