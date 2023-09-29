import React, { useRef, useState } from 'react';
import icon from '../../img/image 308.png'

const Application = () => {
    const inputRef = useRef(null)
    const [img, setImg] = useState("")
    const changeImg = () => {
        inputRef.current.click()
    }
    const handleChangeImg = e => {
        const file = e.target.files[0]
        setImg(file)
    }
    const handleForm = e => {
        e.preventDefault()
        const imgUrl = img
        const name = e.target.name.value
        const lastName = e.target.lastname.value
        console.log(name)
    }
const showContent = () => {
    document.getElementById("jantus").classList.toggle("hidden")
}
    return (
        <div>
            <h3 className='font-medium text-2xl capitalize mt-5 ml-10'>Upload cover image</h3>
            <form className='ml-10 w-[40%] mb-10' action="" onSubmit={handleForm}>
                <div className='p-10 border-2 mt-5  border-dotted border-gray-400' onClick={changeImg}>
                    {/* you don't need to delet the img just click on the img you can change img from there */}
                    {
                        img ? <img className='' src={URL.createObjectURL(img)} alt="" /> : <div className='flex items-center flex-col'>
                            <img className='w-[33px]' src={icon} alt="" />
                            <h6>Upload cover image</h6>
                            <h6 className='text-sm'>16:9 ratio is recommended. Max image size 1mb</h6>
                        </div>
                    }
                    <input className='hidden' type="file" ref={inputRef} onChange={handleChangeImg} />
                </div>
                <h3 className='font-medium text-2xl capitalize mt-10'>Personal Information</h3>
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='First Name' type="text" name="name" id="name" />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Last Name' type="text" name="lastname" id="lastname" />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Emai' type="email" name="email" id="email" />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Phone' type="tel" name="number" id="number" />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Nationality' type="text" name="nationality" id="nationality" />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Current Residence ' type="text" name="currentResidence " id="currentresidence" />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='ID Number' type="number" name="idNumber" id="idnumber" />
                <label className='outline-none mb-1 block border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' htmlFor="date">Date Of Birth</label>
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Date of Birth' type='date' name="dateofBirth" id="date" />
                <label className='outline-none mb-1 block border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' htmlFor="gender">Gender</label>
                <input className='outline-none mt-0 border-b-2 border-gray-400 bg-inherit py-3 px-2' type="radio" name="gender" value="male" /> Male<br />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2' type="radio" name="gender" value="female" /> Female<br />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2' type="radio" name="gender" value="other" /> Other
                <h3 className='font-medium text-2xl capitalize mt-10'>Profile</h3>
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Education' type="text" name="education" id="education" />
                <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Experience' type="text" name="experience" id="experience" />
                <label className='outline-none mb-1 block border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' htmlFor="file">Resume</label>
                <input className='outline-none border-b-2 hidden border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Resume' type="file" name="resume" id="file" />
                <button className='btn btn-primary capitalize mt-3 mr-5' onClick={showContent}>Add a question</button>
                <div id='jantus' className='w-full'>
                    <h3 className='font-medium text-2xl capitalize mt-10'>Additional questions</h3>
                    <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Please tell me about yourself in less than 500 words' type="text" name="about" id="about" />
                    <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Question' type="text" name="question" id="question" />
                    <input className='outline-none border-b-2 border-gray-400 bg-inherit py-3 px-2 w-full' placeholder='Choice' type="text" name="choice" id="choice" />
                </div>
                <input className='btn btn-primary uppercase mt-3' type="submit" value="submit" />
            </form>

        </div>
    );
};

export default Application;