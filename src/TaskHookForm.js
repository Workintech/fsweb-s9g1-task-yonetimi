import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup" ;
import { yupResolver } from "@hookform/resolvers/yup";

export default function TaskHookForm({kisiler}) {
  
  const formSemasi = Yup.object().shape({
    title: Yup.string()
      .required("Task başlığı yazmalısınız")
      .min(3, "Task başlığı en az 3 karakter olmalı"),
    description: Yup.string()
      .required("Task açıklaması yazmalısınız")
      .min(5, "Task açıklaması en az 10 karakter olmalı"),
    // people: Yup.array()
    //   .max(3, "En fazla 3 kişi seçebilirsiniz")
    //   .min(1, "Lütfen en az bir kişi seçin"),
  });
  
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid }
  // } = useForm({resolver: yupResolver(formSemasi) });

  const TaskForm = ({kisiler, submitFn}) => {
    const {
      register,
      handleSubmit,
      formState: { errors, isValid }
    } = useForm({resolver: yupResolver(formSemasi) });
    }
  

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label>
          İsim: &nbsp;
          
          <input
            className="input-text"
            type="text"
            name="title"
            {...register("title", { required: "title is required" })}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </label>
      </p>
      <br />
      <p>
        <label>
          Görev: &nbsp;
          <input
            className="input-textarea"
            type="text"
            name="description"
            {...register("description", {
              required: "description is required",
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
          
        </label>
      </p>
      <br />
      <p>
      {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
              />
              {p}
            </label>
          ))}
      </p>

      <br />
      <input type="submit" disabled={!isValid}/>
    </form>
  );
}


// chat gpt:

// import React from "react";
// import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// export default function TaskHookForm({ kisiler }) {
//   const formSemasi = Yup.object().shape({
//     title: Yup.string()
//       .required("Task başlığı yazmalısınız")
//       .min(3, "Task başlığı en az 3 karakter olmalı"),
//     description: Yup.string()
//       .required("Task açıklaması yazmalısınız")
//       .min(5, "Task açıklaması en az 5 karakter olmalı"),
//   });

//   const { register, handleSubmit, formState: { errors, isValid } } = useForm({
//     resolver: yupResolver(formSemasi),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <p>
//         <label>
//           İsim: &nbsp;
//           <input
//             className="input-text"
//             type="text"
//             name="title"
//             {...register("title")}
//           />
//           {errors.title && <span>{errors.title.message}</span>}
//         </label>
//       </p>
//       <br />
//       <p>
//         <label>
//           Görev: &nbsp;
//           <input
//             className="input-textarea"
//             type="text"
//             name="description"
//             {...register("description")}
//           />
//           {errors.description && <span>{errors.description.message}</span>}
//         </label>
//       </p>
//       <br />
//       <p>
//         {kisiler.map((p) => (
//           <label className="input-checkbox" key={p}>
//             <input type="checkbox" name="people" value={p} />
//             {p}
//           </label>
//         ))}
//       </p>
//       <br />
//       <input type="submit" disabled={!isValid} />
//     </form>
//   );
// }
