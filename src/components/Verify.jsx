import axios from 'axios';
import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

const Verify = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [otp, setOtp] = useState("")

    function submitOtp(e){
        console.log(location.state)
        // console.log("i am working")
        e.preventDefault()
        const url = "http://localhost:3000/warranty/verify"

        axios.post( url, {otp, orderNumber:location.state.orderNumber, serialNumber:location.state.serialNumber})
        .then((response)=>{
            console.log(response)
            alert(response.data.message)
            navigate("/")
        }).catch((error)=>{
            console.log(error)
            alert(error)
        })
    }
    
    return (
        <div style={{backgroundColor:"#c2dbfc",width:"100vw", height:"90vh", boxShadow: "0px 7px 22px 0px rgba(0, 0, 0, 0.60)"}}>

            <form style={{}}>
                <div className="c-email" style={{
                    overflow: "hidden",
                    backgroundColor:"#c2dbfc",
                }}
                    >
                    <div className="c-email__header" style={{
                        "backgroundColor": "#0fd59f",
                        width: "100%",
                        height: "60px",
                        borderRadius: "20px",
                        marginTop:"1rem",
                        boxShadow: "0px 7px 22px 0px rgba(0, 0, 0, 0.1)"

                    }}
                        >
                        <h1 className="c-email__header__title" style={{
                            fontSize: "23px",
                            margin: "0", 
                            textAlign: "center",
                            color: "white",
                            paddingTop: "20px"
                        }}
                        >
                            Your Verification Code is
                        </h1>
                    </div>
                    <div className="c-email__content" style={{
                        width: "100%",
                        padding: "15px",
                        textAlign: "center",
                        backgroundColor: "#c2dbfc"
                    }}
                    >
                        <p className="c-email__content__text text-title"
                            style={{
                                fontSize: "20px",
                                textAlign: "center",
                                color: "#343434",
                                marginTop: "0"
                            }}
                        >
                        This is Warranty application.
                        </p>
                        <input className="c-email__code" name='otp' type="text" htmlFor="otp" onChange={e => setOtp(e.target.value)} placeholder=' enter otp'
                            style={{
                                display: "block",
                                width: "60%",
                                margin: "30px auto",
                                backgroundColor: "#ddd",
                                borderRadius: "40px",
                                padding: "20px",
                                textAlign: "center",
                                fontSize: "36px",
                                letterSpacing: "10px",
                                boxShadow: "0px 7px 22px 0px rgba(0, 0, 0, .1)"
                                }}
                            >
                        </input>
                        <p className="c-email__content__text text-italic opacity-30 text-title mb-0">Verification code is valid only for 1
                            hour
                        </p>
                        <button onClick={submitOtp}>submit</button>
                    </div>
                    <p style={{
                        textAlign: "center",
                        }}
                    >Don't share the otp with any one
                    </p>
                </div>
            </form>
        </div>
        
    )
}

export default Verify