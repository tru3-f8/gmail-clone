import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const SendMail = () => {
  //Used for grabbing data from the form
  const { register, handleSubmit, watch, formState: {errors} } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h3>New Message</h3>
        <CloseIcon className='sendMail_close' />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='text'
          {...register('to', { required: true })}
        />
        {errors.to && <p className='sendMail_error'>Required</p>}

        <input
          placeholder='Subject'
          type='text'
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className='sendMail_error'>Required</p>}

        <input
          placeholder='Message'
          type='text'
          className='sendMail_message'
          {...register('message', { required: true })}
        />
        {errors.message && <p className='sendMail_error'>Required</p>}

        <div className='sendMail_options'>
          <Button
            className='sendMail_send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
