import React from 'react';
import { css } from '@emotion/react';
import { DotLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = () => {
  return (
    <div className="flex justify-center items-center ">
      <DotLoader color="#10B981" css={override} size={80} />
    </div>
  );
};

export default Loader;
