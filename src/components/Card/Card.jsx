import { useEffect } from "react";
import { useState } from "react";
import MemberCard from "./MemberCard";

const Card = () => {

  // fetch member data
  const [members, setMembers] = useState([])
  useEffect( () => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setMembers(data))
  } , [])

  return (
    <div className="py-4 grid gap-4 grid-cols-1 md:grid-cols-3">
      {members.map((member, idx) => <MemberCard key={idx} member={member}/>)}
    </div>
  );
};

export default Card;