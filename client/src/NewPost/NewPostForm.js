import react from 'react';
import { useForm } from 'react-hook-form';

// const initialFormValues = {
//     post_title: '',
//     post_body: '',
//     post_clip_start: '',
//     post_clip_end: '',
//     podcast_episode_id: '',
//     //TODO: Decoded token needs to add user_id to this in the middleware
// }

export default function NewPostForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div>Create a New Podcast Clip!</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Post Title</label>
                <input {...register("post_title", { required: true, maxLength: 250 })} />
                {errors.post_title && "Title is required"}
                <label>Tell Us More</label>
                <input {...register("post_body", { required: true, maxLength: 1000 })} />
                {errors.post_body && "Gotta tell us something about this post"}

                <input type="submit" />
            </form>
        </div>
    )
}
