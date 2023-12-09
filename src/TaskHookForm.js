import React from 'react'
import { useForm } from "react-hook-form";


export default function TaskHookForm({ kisiler, submitFn }) {

  const {
    register,
    handleSubmit, 
    formState: {errors, isValid},
    reset // react-hook-form'dan reset fonksiyonunu kullanarak formu temizleyeceğiz
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      people: []
    }
  })
  
  const onSubmit = (data) => {
    console.log(data);
    submitFn(data);
    reset(); // Formu temizleme işlemi
  } 

  const validatePeople = (value) => {
    return value.length >= 1 && value.length <=3;
  } // yeni kişi eklenirken kullanıcının seçtiği kişilerin sayısının 3'ün üstünde olmasını sağlayan fonksiyon

  return (

    <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-line">
      <label className="input-label" htmlFor="title">
        Başlık
      </label>
      <input
        className="input-text"
        id="title"
        type="text"
        {...register("title", {
          required: "Task başlığı yazmalısınız", 
          minLength: {
            value: 3,
            message: "Task başlığı en az 3 karakter olmalı"
          }
        })}
      />
      {errors.title && <p>{errors.title.message}</p>}
    </div>

    <div className="form-line">
      <label className="input-label" htmlFor="description">
        Açıklama
      </label>
      <textarea
        className="input-textarea"
        rows="3"
        id="description"
        {...register("description", {
          required: "Task açıklaması yazmalısınız",
          minLength: {
            value: 10, 
            message: "Task açıklaması en az 10 karakter olmalı"
          }
        })}
      ></textarea>
      {errors.description && <p>{errors.description.message}</p>}
    </div>

    <div className="form-line">
      <label className="input-label">İnsanlar</label>
      <div>
        {kisiler.map((e) => (
          <label className="input-checkbox" key={e}>
            <input
              type="checkbox"
              name="people"
              value={e} 
              {...register("people", {
                validate: (value) => validatePeople([...value, e]), // kişi seçimi için her bir checkbox'a ayrı ayrı kontrol mekanizması ekiyoruz. 
                required: "Lütfen en az bir kişi seçin",             
                maxLength: {
                  value: 3,
                  message: "En fazla 3 kişi seçebilirsiniz"
                }, // validate seçeneği, formdaki alanın geçerliliğini kontrol etmek için kullanılır. validatePeople fonksiyonuyla, seçilen kişileri kontrol ediyoruz. Eğer kurallara uymuyorsa, hata mesajı döndürülür.
              })}
            />
            {e}
          </label>
        ))}
        {errors.people && <p>{errors.people.message}</p>}
      </div>
    </div>

    <div className="form-line">
      <button
        className="submit-button"
        type="submit"
        disabled={!isValid}
      >
        Kaydet
      </button>
    </div>
  </form>
  )
}
