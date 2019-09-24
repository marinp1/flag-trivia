import React from 'react';
import LazyFlags from '../../Flags';
import { FLAG_ISO_CODE } from '../../types';

export interface Props {
  choices: [];
  code: FLAG_ISO_CODE;
}

const Question = (props: Props) => {
  const [flag, setFlag] = React.useState();

  const fetchFlag = async () => {
    const content = (await LazyFlags[props.code]).default;
    setFlag(content);
  };

  React.useEffect(() => {
    fetchFlag();
  });

  return <img src={flag} />;
};

export default Question;
