/**
 * pushState & popstate 이벤트 발생 두가지 역할을 하는 함수입니다.
 */

const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, "", path);
    window.dispatchEvent(new Event("popstate"));
  };
  return { push };
};

export default useRouter;
