import { useRouterDispatch } from "../packages/react-router-dom/context";

const useRouter = () => {
  const dispath = useRouterDispatch();

  const push = (path: string) => {
    history.pushState({ path }, "", path);
    dispath({ type: "CHANGE_PATH", path: path });
  };
  return { push };
};

export default useRouter;
