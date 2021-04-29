import React, {useRef, useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const nameInput = useRef()
    const { name, nickname } = inputs
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value // name 키를 가진 값을 value로 설정
        })
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus();
    }
    return (
        <div>
            <input name="name" type="text" onChange={onChange} value={name} placeholder="이름" ref={nameInput}/>
            <input name="nickname" type="text" onChange={onChange} value={nickname} placeholder="닉네임"/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;