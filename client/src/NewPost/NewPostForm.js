import react from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

//Styling
const NewPostContainer = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 26px 18px 40px;
    min-height: 100%;
`

const NewPostHeader = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #4E04E0;
    margin-bottom: 26px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input` 
    color: #433755;
    background-color: transparent;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 2px solid #4E03E0;
    height: 28px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 15px;
    

    &::placeholder {
    color: #D6D6D6;
    }

    &:focus {
        outline: none;
    }
`

const BodyInput = styled.textarea` 
    color: #433755;
    background-color: transparent;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom: 2px solid #4E03E0;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 15px;
    

    &::placeholder {
    color: #D6D6D6;
    }

    &:focus {
        outline: none;
    }
`

const Label = styled.label`
    color: #433755;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: bold;
    line-height: 22px;
    margin-bottom: -2px;
`

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

    //TODO: implement yup validation on inputs.
    return (
        <NewPostContainer>
            <NewPostHeader>Create a New Podcast Clip!</NewPostHeader>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>Post Title</Label>
                <Input type="text" placeholder='Post Title...' {...register("post_title", { required: true, maxLength: 250 })} />
                {errors.post_title && "Title is required"}

                <Label>Tell Us More</Label>
                <BodyInput type="text" placeholder='Tell us some more...' {...register("post_body", { required: true, maxLength: 1000 })} />
                {errors.post_body && "Gotta tell us something about this post"}

                <input type="submit" />
            </Form>
        </NewPostContainer>
    )
}
