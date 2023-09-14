import ReactLoading from "react-loading";

type LoadingProps = {
  type: any;
  color: string;
  height: string;
  width: string;
};

const Loading = ({ type, color, height, width }: LoadingProps) => (
  <ReactLoading type={type} color={color} height={height} width={width} />
);

export default Loading;
