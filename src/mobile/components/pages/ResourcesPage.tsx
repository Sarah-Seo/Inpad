import React, { useMemo } from 'react'
import {
  getResourceShowPageData,
  ResourceShowPageResponseBody,
} from '../../../cloud/api/pages/teams'
import DocPage from './DocPage'
import FolderPage from './FolderPage'
import { GetInitialPropsParameters } from '../../../cloud/interfaces/pages'

const ResourceIndex = (props: ResourceShowPageResponseBody) => {
  const content = useMemo(() => {
    switch (props.type) {
      case 'doc':
        return (
          <DocPage
            doc={props.pageDoc}
            contributors={props.contributors || []}
            backLinks={props.backLinks || []}
            revisionHistory={props.revisionHistory || []}
          />
        )

      case 'folder':
        return <FolderPage />
    }
  }, [props])

  return content
}

ResourceIndex.getInitialProps = async (params: GetInitialPropsParameters) => {
  const result = await getResourceShowPageData(params)
  return result
}

export default ResourceIndex
