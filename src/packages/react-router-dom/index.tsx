import usePath from "./hooks/usePath";

/**
 * Route는 단순히 component를 Render하는 역할만 합니다.
 * path parameter는 Routes에서 사용됩니다.
 */
interface RouterProps {
  children: any;
}
export const Router = ({ children }: RouterProps) => {
  const currentPath = usePath();
  return (
    <>
      {children.map((router: any) => {
        if (router.props.path == currentPath) return router;
      })}
    </>
  );
};

/**
 * Route는 단순히 component를 Render하는 역할만 합니다.
 * path parameter는 Routes에서 사용됩니다.
 */
interface RouteProps {
  path: string;
  component: React.ReactNode;
}
export const Route = ({ component }: RouteProps) => {
  return <>{component}</>;
};
