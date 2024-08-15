import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className="bg-orange-500 text-gray-500 py-5 text-center">User:{userid}</div>
  )
}

export default User