import React, { useEffect, useState } from 'react'
import styles from './Form.module.css'


let url = "https://www.rptechindia.in/media/catalog/product/w/o/wobot-logo_blue_-_tapan_dixit.png"
export const Form = () => {
  let data = JSON.parse(localStorage.getItem("company_details")) || []




  const [backGroundColor, setBackGroundColor] = useState("")
  const [isActive, setIsActive] = useState(false);
  const [notification, setNotification] = useState()

  const [location, setLocation] = useState("")
  const [name, setName] = useState("")
  const [company_name, setCompany_name] = useState("");
  const [industry, setIndustry] = useState("");
  const FormData = {
    name: name,
    location: location,
    company_name: company_name,
    industry: industry

  }


  useEffect(() => {
    alert(location)

  }, [location])





  const handleSubmit = () => {
    data.push(FormData)
    localStorage.setItem("company_details", JSON.stringify(data))
    alert("Data Saved Successfully")
    
    setCompany_name("")
    setName("")
    location("")
    




  }




  return (
    <div className={styles.main_container}>
      <div className={styles.logo}>
        <img height="100px" width="130px" src={url} alt="" />

      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.heading}>
            <img src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/62a1ea94ed0dad0001527373/picture" alt="logo" />
            <h4>it's a delight to have you onboard</h4>
            <h6>Help us to Know better.</h6>
            <h6>(This is how we optimise Wobot as per your bussiness needs)</h6>
          </div>
          <div className={styles.description}>
            <label >Your name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g John Smith" />

            <label >Company name</label>
            <input type="text" value={company_name} onChange={(e) => setCompany_name(e.target.value)} placeholder="e.g Alpha Inc." />

            <label >Industry</label>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)}  >
              <option value="tech">Tech</option>
              <option value="edtech">Edtech</option>
              <option value="consultation">Consultation</option>
            </select>

            <label >Number of locations</label>
            <div onClick={(e) => (setLocation(e.target.innerText))} className={styles.location_btn}>
              <div >1-20</div>
              <div>21-50</div>
              <div >51-200</div>
              <div >201-500</div>
              <div>500+</div>
            </div>
            <button className={styles.btn} onClick={handleSubmit}>Submit</button>
          </div>
        </div>

      </div>
      <div className={styles.policy}>

      </div>
    </div>
  )
}
