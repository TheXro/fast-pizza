import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username); // useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.
  return <div className="hidden text-sm font-semibold md:block">{username}</div>;
}

export default Username;
