import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  return (
    <div>
      <h2>about</h2>
      <button onClick={() => push("/")}>go main</button>
    </div>
  );
};

export default Root;
