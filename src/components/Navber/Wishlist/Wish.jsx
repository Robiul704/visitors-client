

const Wish = ({blog}) => {
    const {title,category,shortdescription,longdescription,image,_id}=blog
    console.log(blog)
    return (
        <div>
            <div className="flex flex-row justify-center">
           <div className="card  bg-base-100 shadow-xl">
  <figure><img className="h-96" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h1> {category}</h1>
    <h2 className="card-title">
       
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{shortdescription}</p>
    <div className="card-actions justify-end">
     
    </div>
 
  </div>
</div>
        </div>
        </div>
    );
};

export default Wish;