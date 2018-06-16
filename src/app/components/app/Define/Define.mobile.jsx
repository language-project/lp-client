import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import DefaultButton from '@components/common/DefaultButton/DefaultButton.mobile';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledDefine = styled.div`
  font-size: 14px;
  padding : 10px;

  > textarea {
    padding: 5px;
  }
`;

const Form = styled.div`
  > * {
    border-bottom: 1px solid ${Color.GRAY5};
    width: 100%;
  }

  > textarea {
    line-height: 1.4;
    padding: 7px 5px;
    resize: none;
  }
`;

const Term = styled.input`
  border: none;
  border-bottom: 1px solid ${Color.GRAY5};
  height: 40px;
  padding: 0 5px;
`;

const Definition = styled.textarea`
  height: 100px;
`;

const Usage = styled.textarea`
  resize: none;
`;

// const renderUsage = (props) => {
//   const UsageList = props.usages.map((usage, i) => (
//     <UsageInputConatiner key={i}>
//       <UsageInput
//         defaultValue={usage}
//         placeholder="말의 쓰임새를 써주세요(ex: 실화니;이거실화임?)"/>
//       <UsageDeleteButton>X</UsageDeleteButton>
//     </UsageInputConatiner>
//   ));
//   return (
//     <Usage>
//       <UsageLabel>쓰임새</UsageLabel>
//       {UsageList}
//       <UsageAddButton onClick={props.handleClickAddUsage}>+ 쓰임새 추가하기</UsageAddButton>
//     </Usage>
//   );
// };

const StyledAddMore = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-top: 8px;

  &:hover {
    span {
      text-decoration: underline;
    }
  }

  > span {
    margin-left: 5px;
  }
`;

const AddMore = () => {
  return (
    <StyledAddMore>
      <Facon label="plus"/>
      <span>Add more properties</span>
    </StyledAddMore>
  )
}

const Define = ({
  handleChangeValue,
  id,
}) => {
  return (
    <StyledDefine id={id}>
      <Form>
        <Term
          className="ab"
          onChange={(e) => handleChangeValue(e, 'term')}
          placeholder={`Any expression to define.`}/>
        <Definition
          onChange={(e) => handleChangeValue(e, 'definition')}
          placeholder={`What is the meaning? You may also elaborate the origin of the expression.`}/>
        <Usage
          onChange={(e) => handleChangeValue(e, 'usage')}
          placeholder={`Usage. Give us how the term is used in context, at least a single case`}/>
      </Form>
      <AddMore/>
    </StyledDefine>
  );
};

Define.propTypes = {
  handleChangeValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Define;
