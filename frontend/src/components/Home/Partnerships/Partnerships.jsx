import React from "react";
import styles from './Partnerships.module.scss';
import {getData as getPartnershipData, dataKeys} from "../../../services/partnership";


function Partnerships(){
    const[partnership, setPartnerships]=React.useState([]);
    React.useEffect(()=>{
        getData();
    },[]);
    const getData=async()=>{
        try{
        const data =await getPartnershipData();
        console.log(data);
        if(data){
            setPartnerships(data);
        }
    }catch(error){
        alert(error);
    }
    }
    return (
        <section className={styles['community-partnerships']}>
        <h2 className={styles['heading']}>Community Partnerships</h2>
        <div className={styles['partnership-item-container']}>
        {partnership.map((elem,index) =>{
            return(
            <PartnershipItem
                key={index}
                title={elem[dataKeys.title]}
                img={elem[dataKeys.img]} 
            />
        )}
    )}
        </div>
        </section>
    );
}
function PartnershipItem({title,img}){
    return(
        <div className={styles['community-partnerships-container']}>
            
            <img
                src={`https://drive.google.com/uc?id=${img}`}
                alt={title}
            />
            <div className={styles['partnership-name']}>{title}</div>
            <hr></hr>
        </div>
        
    );
}
export default Partnerships;             