import { Audio, Hourglass, Circles } from 'react-loader-spinner';

export const Loader = () => {
  <>
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
    ;
  </>;
};

export const LoadAdd = () => (
  <Hourglass
    visible={true}
    height="30"
    width="30"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#ffffff', '#d4d6da']}
  />
);

export const SpinerDel = () => (
  <Circles
    height="34"
    width="34"
    color="#4c524c"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);
