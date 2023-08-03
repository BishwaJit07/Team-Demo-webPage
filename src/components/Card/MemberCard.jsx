
const MemberCard = ({member}) => {
  const { name, college, email, profession} = member
  return (
    <div className="card w-full bg-base-100  border border-[#d3d3d3] rounded-lg shadow">
      {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Email: {email}</p>
        <p>College: {college}</p>
        <p>Profession: {profession}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Hire</button>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;