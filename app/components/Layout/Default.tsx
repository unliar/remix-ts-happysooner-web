import { Footer } from "../Footer/Index";
export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <div className="sticky-container"></div>
        <div className="default-layout-container">{children}</div>
      </div>
      <Footer />
    </>
  );
};
