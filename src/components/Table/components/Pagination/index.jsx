import React from 'react'
import { Pagination as SemanticPagination } from 'semantic-ui-react'

const Pagination = () => (
  <SemanticPagination
  boundaryRange={0}
  defaultActivePage={1}
  ellipsisItem={null}
  firstItem={null}
  lastItem={null}
  siblingRange={1}
  totalPages={10}
/>
)

export default Pagination