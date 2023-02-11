import React from 'react'
import styles from './Form.module.css'


let url="https://www.rptechindia.in/media/catalog/product/w/o/wobot-logo_blue_-_tapan_dixit.png"
export const Form = () => {
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
   <form className={styles.description}>
       <label >Your name</label>
       <input type="text"  placeholder="e.g John Smith" />
   
       <label >Company name</label>
       <input type="text"  placeholder="e.g Alpha Inc." />
   
       <label >Industry</label>
       <select >
         <option value="tech">Tech</option>
         <option value="edtech">Edtech</option>
         <option value="consultation">Consultation</option>
       </select>
     
       <label >Number of locations</label>
       <div className={styles.location_btn}>
       <button>1-20</button>
       <button>21-50</button>
       <button>51-200</button>
       <button>201-500</button>
       <button>500+</button>
       </div>
       <input className={styles.btn} type="submit" value="Submit" />
     </form>
    </div>
    
       </div>
       <div className={styles.policy}>

       </div>
       </div>
  )
}
