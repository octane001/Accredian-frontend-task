import { useForm } from "react-hook-form";
import axios from 'axios';
// eslint-disable-next-line react/prop-types
const Form = ({ setVisible }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await axios.post("https://accredian-backend-task-a580.onrender.com/submit-form", data);
            if (response.status === 201) {
                reset();
                setTimeout(() => setVisible(false), 100);
                console.log("Form submitted successfully");
            }
        } catch (error) {
            console.error("Error submitting: ", error)
        }
    }
    return (
        <div className="form border flex justify-center w-[550px] p-2 pb-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center text-4xl border-b-1 border-dashed pb-2">Your Friend&apos;s Details</h1> <br />
                <label htmlFor="name">Referrer Name</label>
                <br />
                <input type="text" id="name" name="name" className="border w-[500px] h-[35px] p-1" {...register("referrer_name", { required: true })} />
                {errors.referrer_name && <span className="text-red-500"> <br /> This field is required</span>}
                <br /> <br />
                <label htmlFor="name">Referrer Email</label>
                <br />
                <input type="email" id="name" name="name" className="border w-[500px] h-[35px] p-1" {...register("referrer_email", { required: true })} />
                {errors.referrer_email && <span className="text-red-500"> <br /> This field is required</span>}
                <br /><br />
                <label htmlFor="name">Referee Name</label>
                <br />
                <input type="text" id="name" name="name" className="border w-[500px] h-[35px] p-1" {...register("referee_name", { required: true })} />
                {errors.referee_name && <span className="text-red-500"> <br /> This field is required</span>}
                <br /> <br />
                <label htmlFor="name">Referee Email</label>
                <br />
                <input type="email" id="name" name="name" className="border w-[500px] h-[35px] p-1" {...register("referee_email", { required: true })} />
                {errors.referee_email && <span className="text-red-500"> <br /> This field is required</span>}
                <br /> <br />
                <label htmlFor="name">Course Name</label>
                <br />
                <input type="text" id="name" name="name" className="border w-[500px] h-[35px] p-1" {...register("course_name", { required: true })} />
                {errors.course_name && <span className="text-red-500"> <br /> This field is required</span>}
                <br /> <br />
                <button type="submit" className="bg-stone-900 w-[180px] cursor-pointer text-2xl font-light text-amber-50 p-1 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Form
