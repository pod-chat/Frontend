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
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Post Title</label>
            <input {...register("post_title")} />
        </form>
    )
}
