import PropTypes from 'prop-types';
import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@styles/styles';
import { calculateTime } from '@utils/mathUtils';
import Color from '@constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const RELATED_TERM_DUMMY = [
  {
    degree: 23.11,
    label: 'Related word1',
  },
  {
    degree: 14.51,
    label: 'Even more related2',
  },
  {
    degree: 14.51,
    label: 'Word3',
  },
]

const StyledRelatedTerm = styled.div`
  color: ${Color.GRAY3};
  font-size: 12px;
`;

const StyledEntry = styled.div`
  display: inline-block;
  margin-right: 7px;
`;

const Degree = styled.span`
  font-style: italic;
  margin-left: 2px;
`;

const Entry = ({
  degree,
  label,
}) => {
  return (
    <StyledEntry>
      <span>{label}</span>
      <Degree>{degree}</Degree>
    </StyledEntry>
  )
}

const RelatedTerm = ({
}) => {
  const relatedTerms = RELATED_TERM_DUMMY.map((r, idx) => {
    return (
      <Entry
        degree={r.degree}
        key={idx}
        label={r.label}/>
    );
  });

  return (
    <StyledRelatedTerm>
      {relatedTerms}
    </StyledRelatedTerm>
  )
};

RelatedTerm.propTypes = {
};

export default RelatedTerm;
