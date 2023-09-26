import React, { useState } from 'react';
import { getRandomPrompts } from '../utils';
import { preview } from '../assets';
import { useNavigate } from 'react-router-dom';
import { FormField, Loader } from '../components';
import { Grid, ThreeDots } from 'react-loader-spinner';
import { FiShare } from 'react-icons/fi';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [generatingImg, setGeneratingImg] = useState(false)

  const generateImage = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts(form.prompt)
    setForm({ ...form, prompt: randomPrompt })

  }


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-sans font-bold bg-clip-text bg-gradient-to-br from-blue-500 to-pink-500 text-transparent text-[42px]'>
          Create
        </h1>
        <p className='mt-2 text-[#666375] max-w-[500px] text-[16px]'>
          Generate captivating and imaginitive images using DALL-E AI
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
        focus:border-[#4649ff] w-64 h-64 p-3 flex justify-center items-center'>
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />

            ) : (
              <img
                src={preview}
                alt="preview"
                className='w-9/12 h-9/12 object-contain opacity-40'
              />
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-10 flex justify-center items-center
              bg-gray-200 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg'
              >
                {/* <Loader /> */}
                <Grid
                  height="150"
                  width="150"
                  color="gray"
                  ariaLabel="grid-loading"
                  radius="12.5"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className='text-white bg-black font-medium rounded-md text-sm w-full
          sm:w-auto px-5 py-2.5 text-center'
          >
            {generatingImg ? (
              <div className='flex flex-row items-center gap-2'>
                Generating
                <ThreeDots
                  height="20"
                  width="20"
                  radius="2"
                  color="black"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            ) : 'Generate'}
          </button>
        </div>
        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            Once you have done with generating image share
            it with others
          </p>
          <button
            type='submit'
            className='flex justify-center items-center gap-2 mt-3 text-white bg-gradient-to-br from-blue-500 to-pink-500 font-medium 
          rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
            Share with others <FiShare />
          </button>
        </div>
      </form>

    </section>
  )
}

export default CreatePost
