import Record from '@models/Record';

export default class Definition extends Record({
  created_at: new Date(),
  id: 0,
  label: '',
  poss: [],
  status: '',
  term: {},
  termId: '',
  usages: [],
  user: {},
  userId: 0,
  vote: {},
  voteId: 0,
  updated_at: new Date(),
}) {
  constructor(data) {
    super(data);
  }
  
  static ofMany(data) {
    return data && data.reduce && data.reduce((acc, d) => {
      if (d!==null) {
        acc.push(
          new Definition({
            created_at: d.created_at,
            id: d.id,
            label: d.label,
            poss: d.poss,
            status: d.status,
            term: d.term,
            termId: d.termId,
            updated_at: d.updated_at,
            usages: d.usages,
            user: d.user,
            userId: d.userId,
            vote: d.vote,
            voteId: d.voteId,
          })
        );
      }
      return acc;
    }, []);
  }
};
