

const Personal = ({ name, moreDetails, profilePicture }) => {
    return (
        <>
             
             <div className="profileCard">
                <div className="header">
             <img src={profilePicture} alt="" className="picture"/>
             </div>
             about me:
            <h2>My name is {name}</h2>
            <p>My age is {moreDetails.age}</p>
            <p>  {moreDetails.bio}</p>
            </div>
        

       
         
          
        </>
    )

}

export default Personal